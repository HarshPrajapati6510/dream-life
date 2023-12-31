import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { GenerateToasterService } from '../system-services/generate-toaster.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private generateToastr: GenerateToasterService,
    private storageService: StorageService,
    private ngZone: NgZone
  ) {}

  /**
   * Login
   * @param credentials
   */
  login(credentials: any) {
    if (
      credentials?.email === 'admin@test.com' &&
      credentials?.password === 'Admin@123'
    ) {
      this.storageService.setToken(
        btoa(`${credentials?.email}:${credentials?.password}`)
      );
      this.generateToastr.success('You are successfully logged in.');
      this.ngZone.run(() => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.generateToastr.error('Email or Password is invalid.');
    }
  }

  /**
   * Logout
   * @param isFlash
   */
  logout(isFlash = true) {
    this.storageService.removeToken();
    if (isFlash) {
      this.generateToastr.success('You are successfully logged out.');
    }
    this.ngZone.run(() => {
      this.router.navigate(['/login']);
    });
  }
}
