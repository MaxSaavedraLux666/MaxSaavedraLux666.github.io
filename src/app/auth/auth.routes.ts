import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('@/app/auth/layouts/auth-layout/auth-layout.component'),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@/app/auth/pages/login-page/login-page.component'),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@/app/auth/pages/register-page/register-page.component'),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];
