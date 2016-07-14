import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { NgForm }    from '@angular/forms';

import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { DateFormatPipe, TimeAgoPipe } from 'angular2-moment';
import { Codemirror } from 'ng2-codemirror';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';


import { JudgeStateLabel } from '../util/judge';
import { CodeLanguageMIME } from '../util/lang';

import * as TestJudges from '../test/judge';

@Component({
  selector: 'my-judge-detail',
  templateUrl: './judge.detail.component.html',
  styleUrls: ['./judge.component.scss'],
  pipes: [TranslatePipe, DateFormatPipe, TimeAgoPipe],
  directives: [ROUTER_DIRECTIVES, Codemirror]
})
export class JudgeDetailComponent implements OnInit {
  private judge: any;
  private sub: any;
  private codeConfig: any;
  private JudgeLabel: any;

  constructor(
    private route: ActivatedRoute
  ) {
    this.JudgeLabel = JudgeStateLabel;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.judge = TestJudges.points[id - 1];
      this.judge['memoryMB'] = Math.round(this.judge['memory'] / 1024);
      for (let point of this.judge.points) {
        point['memoryMB'] = Math.round(point['memory'] / 1024);
      }
      this.codeConfig = {
        lineNumbers: true,
        mode: CodeLanguageMIME[this.judge['lang']],
        cursorHeight: 0,
        readOnly: true
      };
    });
  }
}
