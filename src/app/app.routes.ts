import { Routes } from '@angular/router';
import { authRoutes } from '@/app/auth/auth.routes';
import { landingRoutes } from '@/app/landing/landing.routes';
import { dashboardRoutes } from '@/app/dashboard/dashboard.routes';

export const routes: Routes = [
  ...authRoutes,
  ...landingRoutes,
  ...dashboardRoutes,
  {
    path: 'error',
    loadComponent: () =>
      import('@/app/shared/pages/error-page/error-page.component'),
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];
