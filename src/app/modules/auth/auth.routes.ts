import { Route } from '@angular/router';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';

export const AuthRoutes: Route[] = [
  {
    path: '',
    component: AuthWrapperComponent,
    // loadComponent: () =>
    //   import('./auth-wrapper/auth-wrapper.component').then(
    //     (c) => c.AuthWrapperComponent
    //   ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.component').then((c) => c.LoginComponent),
        data: { animation: 'login' },
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./sign-up/sign-up.component').then((c) => c.SignUpComponent),
        data: { animation: 'signUp' },
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];
