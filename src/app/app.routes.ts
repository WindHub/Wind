import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { ProblemComponent } from './problem';
import { ContestComponent } from './contest';
import { JudgeComponent } from './judge';
import { AboutComponent } from './about';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'problem', component: ProblemComponent },
  { path: 'contest', component: ContestComponent },
  { path: 'judge', component: JudgeComponent },
  { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
