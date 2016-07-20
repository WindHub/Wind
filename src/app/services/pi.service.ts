import { Injectable, provide } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ApiService } from '../utils';
import { User } from '../models';

@Injectable()
export class PiService {
  public piUrl = this.api.pi_url;
  public loginUrl = this.piUrl + '/#/user/login';
  public logoutUrl = this.piUrl + '/#/user/logout';
  public registerUrl = this.piUrl + '/#/user/signup';

  constructor(
    private api: ApiService
  ) {
  }
}
