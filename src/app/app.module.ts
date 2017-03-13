import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';
import {CardsComponent} from "./cards/cards.component";

import {FlotComponent} from "./charts/flot/flot.component";
import {ChartsRoutingModule} from "./charts/charts-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    LoginComponent,
    CardsComponent,
    DashboardComponent,
    FlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
