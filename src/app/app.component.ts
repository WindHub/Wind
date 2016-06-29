import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';
import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  providers: [ApiService],
  pipes: [TranslatePipe],
  directives: [...ROUTER_DIRECTIVES, ...DROPDOWN_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/WindHub/WindOJ';

  navs = {
    default: {
      main: [
        { name: 'problem', link: 'problem' },
        { name: 'contest', link: 'contest' },
        { name: 'judge', link: 'judge' },
        { name: 'discuss', link: 'discuss' },
        { name: 'rank', link: 'rank' }
      ],
      user: [
        { name: 'login', link: 'login' },
        { name: 'register', link: 'register' }
      ]
    },
    login: {
      main: [
        { name: 'home', link: 'home'}
      ],
      user: [
        { name: 'profile', link: 'profile' },
        { name: 'inbox', link: 'inbox' },
        { name: 'settings', link: 'settings' },
        { name: 'logout', link: 'logout' }
      ]
    }
  };

  constructor(
    private api: ApiService,
    private translate: TranslateService) {
    let userLang = navigator.language.split('-')[0];
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
    translate.setDefaultLang('en');
    translate.use(userLang);
  }


}
