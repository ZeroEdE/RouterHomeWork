import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from './login/login.component';
import {CardsComponent} from  './cards/cards.component';
import {fallbackRoute} from "./fallbackRoute";
import {FormComponent} from './form/form.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, // 中間掛一層 layout 的作法
    children: [
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '', redirectTo: '/form', pathMatch: 'full' },
      { path: 'form', component: FormComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'cards/:num', component: CardsComponent },

      // 延遲載入 不須在 app.module 做 import routeing.module
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' } // 延遲載入
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
