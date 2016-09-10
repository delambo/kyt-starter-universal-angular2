/* tslint:disable:max-line-length */

import 'angular2-universal/polyfills';
import {
  provide,
  enableProdMode,
  REQUEST_URL,
  ORIGIN_URL,
  BASE_URL,
  NODE_ROUTER_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  Bootloader
} from 'angular2-universal';
import { App } from '../components/App';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

const clientAssets = require(process.env.ASSETS_MANIFEST);

const bootloader = new Bootloader({
  platformProviders: [
    provide(ORIGIN_URL, { useValue: 'http://localhost:3000' }),
    provide(BASE_URL, { useValue: '/' })
  ],
  async: true,
  preboot: false
});

export function ngApp(req, res) {
  const url = req.originalUrl || '/';

  const appConfig = {
    template: `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link id="favicon" rel="shortcut icon" href="/kyt-favicon.png" sizes="16x16 32x32" type="image/png" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">

          <title>Angular 2 Universal Starter-kyt</title>
        </head>
        <body>
          <app>Loading...</app>
          <script src="${clientAssets.main.js}"></script>
        </body>
      </html>
    `,
    directives: [App],
    providers: [
      provide(REQUEST_URL, {useValue: url}),
      ...NODE_ROUTER_PROVIDERS,
      ...NODE_HTTP_PROVIDERS
    ]
  };

  bootloader
    .serializeApplication(appConfig)
    .then(html => res.send(html));
};
