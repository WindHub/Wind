import { Injectable, provide } from '@angular/core';
import { BrowserXhr } from '@angular/http';

@Injectable()
export class CORSService extends BrowserXhr {
    build(): any{
        var xhr:any = super.build();
        xhr.withCredentials = true;
        return xhr;
    }
}

export const CORS_SERVICE_PROVIDER = provide(BrowserXhr, {useClass: CORSService});
