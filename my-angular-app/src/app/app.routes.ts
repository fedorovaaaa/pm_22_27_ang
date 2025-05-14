import { Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard';
import { RedirectIfAuthGuard } from './components/guards/redirect-if-auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./components/form/sign-in.component').then(m => m.SignInComponent),
    canActivate: [RedirectIfAuthGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./components/form/sign-up.component').then(m => m.SignUpComponent),
    canActivate: [RedirectIfAuthGuard]
  },
  {
    path: 'cv',
    loadComponent: () => import('./components/cv/cv.component').then(m => m.CvComponent),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'login' }
];
