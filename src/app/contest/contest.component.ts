import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { TimeAgoPipe, DurationPipe, DateFormatPipe } from 'angular2-moment';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ContestState } from '../models/contest';
import { ContestClass } from '../util/contest';

import * as TestContests from '../test/contest';

@Component({
  selector: 'my-contest',
  templateUrl: './contest.component.html',
  pipes: [TranslatePipe, TimeAgoPipe, DurationPipe, DateFormatPipe],
  directives: [ROUTER_DIRECTIVES]
})
export class ContestComponent implements OnInit {
  private contests: any;
  private isClock: boolean;
  private ContestState: any;
  private currentTime: any;
  private ContestClass: any;

  constructor() {
    this.ContestState = ContestState;
    this.isClock = true;
    this.contests = TestContests.contests;
    this.currentTime = Date.now();
    for (let contest of this.contests) {
      if (this.currentTime < contest.enrollTime) {
        contest['state'] = ContestState.pd;
      } else if (this.currentTime < contest.startTime) {
        contest['state'] = ContestState.en;
      } else if (this.currentTime < contest.endTime) {
        contest['state'] = ContestState.rn;
      } else {
        contest['state'] = ContestState.ed;
      }
    }
    this.ContestClass = ContestClass;
  }

  ngOnInit() {
  }

}
