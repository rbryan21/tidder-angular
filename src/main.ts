import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TidderModule } from './tidder/tidder.module';
import { environment } from './environments/environment';

// required for gesture support on some material components
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TidderModule)
  .catch(err => console.log(err));
