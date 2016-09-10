// Angular 2
import { enableProdMode } from '@angular/core';

// Environment Providers
let providers = [];

if (process.env.NODE_ENV === 'production') {
  enableProdMode();

  providers = [
    ...providers
  ];

} else {
  providers = [
    ...providers
  ];
}

export const ENV_PROVIDERS = [
  ...providers
];
