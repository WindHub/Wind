import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'my-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
  pipes: [TranslatePipe]
})
export class ContestComponent {

  constructor() {
  }

}
