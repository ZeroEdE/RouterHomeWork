import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent} from "./dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';
import { CardsComponent} from "./cards/cards.component";
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { Advcomp1Component } from './advcomp1/advcomp1.component';
import { Advcomp1HeaderComponent } from './advcomp1-header/advcomp1-header.component';
import { Advcomp1PartComponent } from './advcomp1-part/advcomp1-part.component';
import { Test1Directive } from './test1.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    LoginComponent,
    CardsComponent,
    DashboardComponent,
    FormComponent,
    Form2Component,
    Advcomp1Component,
    Advcomp1HeaderComponent,
    Advcomp1PartComponent,
    Test1Directive
  ],
  imports: [
    BrowserModule,
    FormsModule, // 它只支援 Template-Driven Form 註: 要寫在隸屬的 component 才能使用，匯在上層不能使用哦
    ReactiveFormsModule, // 支援 Model-Driven Form 註: 要寫在隸屬的 component 才能使用，匯在上層不能使用哦
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
