import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent} from './flot/flot.component';
import { LayoutComponent} from '../layout/layout.component';

// 將 charts 的 routes 獨立出來寫在 Module 裡面
// const routes: Routes = [
//   {
//     path: 'charts', component: LayoutComponent,
//     children:[
//       { path: '', redirectTo: 'flot', pathMatch: 'full' }, // 空值時，會轉向
//       { path: 'flot', component: FlotComponent }
//   ]},
// ];

const routes: Routes = [
  { path: 'charts', component: LayoutComponent, children:[
    { path: '', redirectTo: 'flot', pathMatch: 'full' }, // 空值時，會轉向
    { path: 'flot', component: FlotComponent }
  ]},
];

// 指令 ng g m charts --routing 就會直接創建 module routes.module
// 用來放置 拆開來的 module

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }
