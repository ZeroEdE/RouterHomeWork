import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent} from './flot/flot.component';
import {LoginRouteGuard} from "./login-route-guard";

const routes: Routes = [
  {path: '', redirectTo: 'flot', pathMatch: 'full'},
  {path: 'flot', component: FlotComponent ,canActivate: [LoginRouteGuard]} // 在某頁加入 判斷登入機制

];

// 指令 ng g m charts --routing 就會直接創建 module routes.module
// 用來放置 拆開來的 module

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginRouteGuard] // 判斷機制 要匯到這裡來
})
export class ChartsRoutingModule { }
