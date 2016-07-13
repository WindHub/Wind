import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { ProblemComponent, ProblemDetailComponent } from './problem';
import { ContestComponent } from './contest';
import { JudgeComponent, JudgeDetailComponent } from './judge';
import { AboutComponent } from './about';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'problem', component: ProblemComponent },
  { path: 'problem/:id', component: ProblemDetailComponent },
  { path: 'contest', component: ContestComponent },
  { path: 'judge', component: JudgeComponent },
  { path: 'judge/:id', component: JudgeDetailComponent },
  { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
