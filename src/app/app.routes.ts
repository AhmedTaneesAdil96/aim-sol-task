import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },
  {
    path: 'app',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },

  {
    path: 'public',
    loadChildren: () =>
      import('./public/page-not-found/public.module').then(
        (m) => m.PublicModule,
      ),
  },
  { path: '**', redirectTo: 'public' },
];
