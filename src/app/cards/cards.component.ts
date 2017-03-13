import { Component, OnInit } from '@angular/core';
import {Route, ActivatedRoute, Router, Params} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
    // Route 全站路由
    // ActivatedRoute目前啟用的路由
  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  num = 0;
  p1;
  p2;
  rr = [];

  ngOnInit() {

    // snapshot 快照(只讀到當前的值而且只讀一次)
    // this.route.snapshot.params['num'];
    this.p1 = this.route.snapshot.params['p1'];
    this.p2 = this.route.snapshot.params['p2'];

    // let obs1 = this.route.params;
    // let obs2 = this.route.queryParams;
    //
    // Observable.forkJoin(obs1,obs2).subscribe((r: Params[]) => {
    //   this.rr = r;
    // });

    // 訂閱的好處就是，當被訂閱的對象值變更了，就會重新取得新值一次
    this.route.params.subscribe((params: Params)=> {
      this.num = parseInt(params['num']) || this.num; // string to int
      //  value || value  { 名詞 short curcuit}  前者為 true 就 return
    });
  };

  goHome(){
    //
    this.router.navigateByUrl('/');
  }
  goChartsFolt() {
    // 可以一直 [] 下去
    this.router.navigate(['/charts'],['flot']);
  }

  IncrementNum() {
    // this.router.navigate(['/cards',this.num +1 ]);

    // 相對路徑寫法 無法做 要問
    // this.router.navigate(['..',this.num +1,{可選參數} ] …
    // this.router.navigate(['..',this.num +1 ], {
    //   relativeTo: this.route
    // });

    // 使用 matrix URL notation 的做法，後面的參數 可加可不加
    this.router.navigate(['..',this.num +1,{p1: this.p1, p2: this.p2} ], {
      relativeTo: this.route,
      // 使用 QueryString 的做法，後面的參數 可加可不加
      queryParams: {
        page: 99
      }
    });

  }

}
