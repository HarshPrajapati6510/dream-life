import { Routes } from '@angular/router';

import { AppBoxedForgotPasswordComponent } from './boxed-forgot-password/boxed-forgot-password.component';
import { AppBoxedLoginComponent } from './boxed-login/boxed-login.component';
import { AppBoxedRegisterComponent } from './boxed-register/boxed-register.component';
import { AppBoxedTwoStepsComponent } from './boxed-two-steps/boxed-two-steps.component';
import { AppErrorComponent } from './error/error.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'boxed-forgot-pwd',
        component: AppBoxedForgotPasswordComponent,
      },
      {
        path: 'login',
        component: AppBoxedLoginComponent,
      },
      {
        path: 'register',
        component: AppBoxedRegisterComponent,
      },
      {
        path: 'boxed-two-steps',
        component: AppBoxedTwoStepsComponent,
      },
      {
        path: 'error',
        component: AppErrorComponent,
      }
    ],
  },
];
