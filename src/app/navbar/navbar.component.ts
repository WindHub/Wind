import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { ApiService } from '../utils';
import { LoginService, LOGIN_SERVICE_PROVIDER, PiService } from '../services';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  providers: [ApiService, LOGIN_SERVICE_PROVIDER, PiService],
  pipes: [TranslatePipe],
  directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES]
})
export class NavbarComponent {

  navs = {
    default: {
      main: [
        { name: 'problem', link: 'problem' },
        { name: 'contest', link: 'contest' },
        { name: 'judge', link: 'judge' },
        //{ name: 'discuss', link: 'discuss' },
        { name: 'rank', link: 'rank' }
      ]
    },
    login: {
      main: [
        //{ name: 'home', link: 'home'}
      ],
      user: [
        { name: 'profile', link: 'profile' },
        { name: 'inbox', link: 'inbox' },
        { name: 'settings', link: 'settings' }
      ]
    }
  };

  constructor(
    private api: ApiService,
    private loginService: LoginService,
    private piService: PiService
  ) {
  }

}
