import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { ContestAbstractComponent } from './contest.abstract.component';

@Component({
  selector: 'my-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
  pipes: [TranslatePipe],
  directives: [ContestAbstractComponent]
})
export class ContestComponent {
  private contest: any;

  constructor() {
  }

}
