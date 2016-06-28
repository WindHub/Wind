import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { ProblemComponent } from './problem';
import { ContestComponent } from './contest';
import { AboutComponent } from './about';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'problem', component: ProblemComponent },
  { path: 'contest', component: ContestComponent },
  { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
