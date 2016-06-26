import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { ApiService } from './shared';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app',
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES, CollapseDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/WindHub/WindOJ';
  public isNavbarCollapsed: boolean = false;

  constructor(private api: ApiService) {
  }


}
