import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// 讓平台瀏覽器動態載入第一頁
platformBrowserDynamic().bootstrapModule(AppModule);
