import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// disable console log
// console.log = function(){};

platformBrowserDynamic().bootstrapModule(AppModule);
