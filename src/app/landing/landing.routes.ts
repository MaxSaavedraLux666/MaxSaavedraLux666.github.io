import { Routes } from '@angular/router';

export const landingRoutes: Routes = [
  {
    path: 'landing',
    loadComponent: () =>
      import('@/app/landing/layouts/landing-layout/landing-layout.component'),
    // children: [],
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
];
