import { Component, Input, OnInit } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { TimeAgoPipe, DurationPipe, DateFormatPipe } from 'angular2-moment';


@Component({
  selector: 'my-contest-abstract',
  templateUrl: './contest.abstract.component.html',
  styleUrls: ['./contest.component.scss'],
  pipes: [TranslatePipe, TimeAgoPipe, DurationPipe, DateFormatPipe]
})
export class ContestAbstractComponent implements OnInit {

  @Input()
  contest: any;

  private isClock: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isClock = false;
  }

}
