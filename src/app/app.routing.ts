import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboards/dashboard1',
        pathMatch: 'full',
      },
      {
        path: 'dashboards',
        loadChildren: () =>
          import('./pages/dashboards/dashboards.routing').then(
            (m) => m.DashboardsRoutes,
          ),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./pages/charts/charts.routing').then((m) => m.ChartsRoutes),
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./pages/apps/apps.routing').then((m) => m.AppsRoutes),
      }
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routing').then(
            (m) => m.AuthenticationRoutes,
          ),
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
