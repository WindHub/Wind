import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { TimeAgoPipe, DurationPipe, DateFormatPipe } from 'angular2-moment';

import { ContestState, Contest } from '../models/contest';
import { ContestClass, getContestState } from '../util/contest';

import { CountdownComponent } from '../util/components';

import * as TestContests from '../test/contest';

@Component({
  selector: 'my-contest-detail',
  templateUrl: './contest.detail.component.html',
  pipes: [TranslatePipe, TimeAgoPipe, DurationPipe, DateFormatPipe],
  directives: [ROUTER_DIRECTIVES, CountdownComponent]
})
export class ContestDetailComponent implements OnInit, OnDestroy {
  private ContestState: any;
  private currentTime: any;
  private ContestClass: any;
  private sub: any;
  private timer: any;
  private contest: Contest;
  private isProblemAvailable: boolean;

  constructor(
    private route: ActivatedRoute
  ) {
    this.ContestState = ContestState;
    this.ContestClass = ContestClass;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];

      this.currentTime = Date.now();
      this.contest = <Contest>TestContests.contests[id - 1];
      this.contest['state'] = getContestState(this.contest, this.currentTime);

      if (this.contest.problems) {
        let __i = 0;
        for (let problem of this.contest.problems) {
          problem['cid'] = String.fromCharCode(65 + __i);
          __i++;
        }
        this.isProblemAvailable = true;
      } else {
        this.isProblemAvailable = false;
      }
    });

    let timer = Observable.timer(0,1000);
    this.timer = timer.subscribe((t) => {
      this.currentTime = Date.now();
      this.contest['state'] = getContestState(this.contest, this.currentTime);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.timer.unsubscribe();
  }

}
