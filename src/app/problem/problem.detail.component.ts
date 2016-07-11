import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

import * as TestProblems from '../test/problem';

@Component({
  selector: 'my-problem-detail',
  templateUrl: './problem.detail.component.html',
  styleUrls: ['./problem.component.scss'],
  pipes: [TranslatePipe],
  directives: [...ROUTER_DIRECTIVES]
})
export class ProblemDetailComponent implements OnInit, OnDestroy {
  private problem: any;
  private sub: any;
  private langLimited: boolean;

  ngOnInit() {
    let problems = [
      TestProblems.apb_problem,
      TestProblems.apbp_problem,
      TestProblems.lsq_problem,
      TestProblems.skyzh_problem
    ];
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.problem = problems[id - 1];
      if (this.problem.isAvailable) {
        this.problem['acratio'] = Math.round(this.problem.judge['ac'] / this.problem.judge['sum'] * 1000) / 10;
        this.langLimited = ('lang' in this.problem.limits);
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  constructor(
    private route: ActivatedRoute
  ) {
  }

}
