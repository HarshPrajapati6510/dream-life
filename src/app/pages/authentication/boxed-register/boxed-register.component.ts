import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CoreService } from 'src/app/shared/services/core.service';
import { MaterialModule } from '../../../material.module';
import { DashboardService } from 'src/app/shared/services/component-services/dashboard.service';
import { GenerateToasterService } from 'src/app/shared/services/system-services/generate-toaster.service';

@Component({
  selector: 'app-boxed-register',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './boxed-register.component.html',
})
export class AppBoxedRegisterComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService, private router: Router,private dashboardService:DashboardService, private toastrService:GenerateToasterService) {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.registerForm.controls;
  }

  submit() {
    // console.log(this.form.value);
    if (this.registerForm.valid) {
      this.dashboardService.registerUser(this.registerForm.value).subscribe({
        next:(res:any)=>{
          console.log('====User Register successfully====');
          if(res?.type=='success'){
            this.toastrService.success(res?.message)
            this.router.navigate(['/dashboards/dashboard1']);
          }else{
            this.toastrService.error(res?.message)
          }
        },
        error:(error:any)=>{
          this.toastrService.error('register failed')
        }
      })
      
    }
  }
}
