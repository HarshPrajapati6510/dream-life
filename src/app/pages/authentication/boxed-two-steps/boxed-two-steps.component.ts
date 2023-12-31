import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreService } from 'src/app/shared/services/core.service';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-boxed-two-steps',
  standalone: true,
  imports: [RouterModule, MaterialModule, NgIf],
  templateUrl: './boxed-two-steps.component.html',
})
export class AppBoxedTwoStepsComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService) {}
}
