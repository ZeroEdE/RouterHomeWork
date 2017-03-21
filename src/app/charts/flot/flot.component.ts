import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {FlotCharts} from "./init";
import {Observable} from "rxjs";

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css'],

  // 從外部 @Input() 值變更，才執行偵測
  // 只是 View 沒執行
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlotComponent implements OnInit {


  /**
   * Zone 事件 是  ng2 用來偵測DOM 事件變更的方法
   * 若是我們有使用 jquery 或其它，它會一直讓 Zone 偵測到 change 事件，就會在此頁面不斷的 重 load。
   * 因此，只要將要處理的 jquery 事件，寫在 runOutsideAngular，這樣子就不會影響到其它的 ng2 事件
   */

  temp = 1;

  constructor(private zone: NgZone, private cd:ChangeDetectorRef ) {

    // 使用 OnPush 要透過 非同步 Observable 去 subscribe，
    // 須要 使用 ChangeDetectorRef 告訴它，subscribe 裡面的東西 須要被改變而產生頁面更新訊息
    Observable.interval(1000).subscribe((id)=> {
      this.temp++;
      this.cd.markForCheck();
      // 若使用 markForCheck() 偵測 change 事件是 自已本身整個頁面(不管頁面多少其它事件)
    });
  }

  ngOnInit() {

    // 若不加，會無限跑，因為zone 會一直偵測變更!
    this.zone.runOutsideAngular(()=>{
      $(FlotCharts)
    });
  }

  // 這裡體一直重跑，因為我們載了 jquery 事件，他會讓 zone 機制不斷的重跑
  showTest() {
    // 若使用 changeDetection 設定 OnPush，這裡只會被執行一次
    console.log(new Date());
    return "決對不要這樣子寫… 會掛";
  }

}
