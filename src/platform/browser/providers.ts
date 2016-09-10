import { APP_BASE_HREF } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

export const APPLICATION_PROVIDERS = [
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  { provide: APP_BASE_HREF, useValue: '/' }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
