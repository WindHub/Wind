import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

import { Problem, ProblemLabel, ProblemPermission } from '../models/problem';
import { JudgeStateLabel } from '../util/judge';

import * as TestProblems from '../test/problem';

@Component({
  selector: 'my-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
  pipes: [TranslatePipe],
  directives: [...ROUTER_DIRECTIVES]
})
export class ProblemComponent implements OnInit {
  private problems = null;
  private hiddencnt = 0;
  private JudgeLabel = JudgeStateLabel;

  ngOnInit() {
    let problems = [
      TestProblems.apb_problem,
      TestProblems.apbp_problem,
      TestProblems.lsq_problem,
      TestProblems.skyzh_problem
    ];
    this.problems = [];
    this.hiddencnt = 0;
    for (let problem of problems) {
      if (problem.isAvailable) {
        problem['acratio'] = Math.round(problem.judge['ac'] / problem.judge['sum'] * 1000) / 10;
        this.problems.push(problem);
      } else {
        this.hiddencnt++;
      }
    }
  }

  constructor(
  ) {
  }

}
