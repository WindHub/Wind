import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'my-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss'],
  pipes: [TranslatePipe]
})
export class JudgeComponent {

  constructor() {
  }

}
