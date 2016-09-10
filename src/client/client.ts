import 'angular2-universal/polyfills';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { DIRECTIVES, PIPES, PROVIDERS } from '../platform/browser';
import { ENV_PROVIDERS } from '../platform/environment';
import { App, APP_PROVIDERS } from '../components/App';

export function main(): Promise<any> {
  return bootstrap(App, [
    ...PROVIDERS,
    ...ENV_PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS
  ])
  .catch(err => console.error(err));
}

export function bootstrapDomReady() {
  // bootstrap after document is ready
  document.addEventListener('DOMContentLoaded', main);
};

bootstrapDomReady();
