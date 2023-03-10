import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { I18NEXT_NAMESPACE_RESOLVER } from 'angular-i18next';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: NxWelcomeComponent,
      },
    ],
    data: {
      i18nextNamespaces: ['demo'],
    },
    resolve: {
      i18next: I18NEXT_NAMESPACE_RESOLVER,
    },
  },
];
