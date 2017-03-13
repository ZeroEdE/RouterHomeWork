import {Route} from "@angular/router";
/**
 * 萬用路由 提出寫法 (當使用者輸入錯的網址列會被導入到這裡)
 * 使用萬用路由時,一定要放在最後一個路由定義中!
 */

export const fallbackRoute: Route = {
  path: '**',
  redirectTo: '/',
  pathMatch: 'full' // 一定要這樣寫
};
