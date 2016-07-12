import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { DateFormatPipe } from 'angular2-moment';

import { JudgeStateLabel } from '../util/judge';

import * as TestJudges from '../test/judge';

@Component({
  selector: 'my-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss'],
  pipes: [TranslatePipe, DateFormatPipe],
  directives: [ROUTER_DIRECTIVES]
})
export class JudgeComponent implements OnInit {

  private judges: any;
  private JudgeLabel: any;

  constructor() {
    this.JudgeLabel = JudgeStateLabel;
  }

  ngOnInit() {
    this.judges = TestJudges.points;

    for (let judge of this.judges) {
      judge['memoryMB'] = Math.round(judge['memory'] / 1024);
    }
  }
}
