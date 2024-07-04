import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        '@/app/dashboard/layouts/dashboard-layout/dashboard-layout.component'
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@/app/dashboard/pages/explore-page/explore-page.component'),
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('@/app/dashboard/pages/blog-page/blog-page.component'),
      },
      {
        path: 'plan',
        loadComponent: () =>
          import('@/app/dashboard/pages/plan-page/plan-page.component'),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('@/app/dashboard/pages/profile-page/profile-page.component'),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('@/app/dashboard/pages/chat-page/chat-page.component'),
      },
      {
        path: 'group',
        loadComponent: () =>
          import('@/app/dashboard/pages/group-page/group-page.component'),
      },
      {
        path: 'video-call',
        loadComponent: () =>
          import(
            '@/app/dashboard/pages/video-call-page/video-call-page.component'
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
