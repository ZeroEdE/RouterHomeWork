import { Component, OnInit } from '@angular/core';
import {initDashboard} from "./init"; // 匯入 圖表 jquery code


// declare var $; // 解決 $ 問題，直接將它轉成 any 型別就不會檢查

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 解決圖表換頁不會呈現問題
    // 在 app.js 呼叫圖表的js檔內，取出 Dashboard

    $(initDashboard); // 呼叫自定檔

  }

}
