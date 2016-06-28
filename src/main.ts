import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

const ENV_PROVIDERS = [];

if (process.env.ENV === 'build') {
  enableProdMode();
} else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

bootstrap(AppComponent, [
    ...HTTP_PROVIDERS,
    ...APP_ROUTER_PROVIDERS,
    ...ENV_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
      deps: [Http]
    },
    TranslateService
  ])
  .catch(err => console.error(err));
