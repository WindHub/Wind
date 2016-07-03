import { Component, OnInit } from '@angular/core';
import { Problem, ProblemLabel, ProblemPermission } from '../models/problem';

import * as TestProblems from '../test/problem';

@Component({
  selector: 'my-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {
  private problems = null;

  ngOnInit() {
    this.problems = [
      TestProblems.apb_problem,
      TestProblems.apbp_problem,
      TestProblems.lsq_problem,
      TestProblems.skyzh_problem
    ]
  }

  constructor(
  ) {
  }

}
