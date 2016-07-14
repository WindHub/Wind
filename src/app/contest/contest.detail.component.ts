import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { TimeAgoPipe, DurationPipe, DateFormatPipe } from 'angular2-moment';

import { ContestState, Contest } from '../models/contest';
import { ContestClass, getContestState } from '../util/contest';

import * as TestContests from '../test/contest';

@Component({
  selector: 'my-contest-detail',
  templateUrl: './contest.detail.component.html',
  styleUrls: ['./contest.component.scss'],
  pipes: [TranslatePipe, TimeAgoPipe, DurationPipe, DateFormatPipe],
  directives: [ROUTER_DIRECTIVES]
})
export class ContestDetailComponent implements OnInit, OnDestroy {
  private ContestState: any;
  private currentTime: any;
  private ContestClass: any;
  private sub: any;
  private contest: Contest;

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

      let __i = 0;
      for (let problem of this.contest.problems) {
        problem['cid'] = String.fromCharCode(65 + __i);
        __i++;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
