import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { FlotComponent } from './flot/flot.component';

// 指令 ng g m charts --routing 就會直接創建 module routes.module
// 用來放置 拆開來的 module

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule,
  ],
  declarations: [ FlotComponent ] // component 要放的位置
})
export class ChartsModule { }
