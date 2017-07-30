import './polyfills.browser'
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './imports/app/app.module';
import { environment } from './imports/environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

import { Two } from './imports/two'

class App {
  constructor () {
    console.log('' + <div>hello world.</div>)
  }
}

document.write('<app></app>')
new App()
new Two()
