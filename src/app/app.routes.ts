import { provideRouter, RouterConfig } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HomeComponent } from './home';
import { ProblemComponent, ProblemDetailComponent } from './problem';
import { ContestComponent, ContestDetailComponent } from './contest';
import { JudgeComponent, JudgeDetailComponent } from './judge';
import { AboutComponent } from './about';
import { RankComponent } from './rank';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'problem', component: ProblemComponent },
  { path: 'problem/:id', component: ProblemDetailComponent },
  { path: 'contest', component: ContestComponent },
  { path: 'contest/:id', component: ContestDetailComponent },
  { path: 'judge', component: JudgeComponent },
  { path: 'judge/:id', component: JudgeDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rank', component: RankComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
