import { ButtonsComponent } from './buttons';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'remote',
    loadChildren: () => import('remote/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: ButtonsComponent,
  },
];
