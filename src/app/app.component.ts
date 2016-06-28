import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  providers: [ApiService],
  pipes: [TranslatePipe],
  directives: [...ROUTER_DIRECTIVES, CollapseDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/WindHub/WindOJ';

  navs = {
    main: [
      { name: 'home', link: '' },
      { name: 'problem', link: 'problem' },
      { name: 'contest', link: 'contest' },
      { name: 'status', link: 'status' },
      { name: 'discuss', link: 'discuss' },
      { name: 'rank', link: 'rank' }
    ]
  };

  isNavbarCollapsed: boolean = false;

  constructor(private api: ApiService, private translate: TranslateService) {
    let userLang = navigator.language.split('-')[0];
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
    translate.setDefaultLang('en');
    translate.use(userLang);
  }


}
