import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserXhr, Http, HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { LOGIN_SERVICE_PROVIDER, CORS_SERVICE_PROVIDER } from './app/services';

if (process.env.ENV === 'build') {
  enableProdMode();
}



bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
      deps: [Http]
    },
    TranslateService,
    CORS_SERVICE_PROVIDER,
    LOGIN_SERVICE_PROVIDER
  ])
  .catch(err => console.error(err));
