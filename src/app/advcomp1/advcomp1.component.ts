import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Advcomp1HeaderComponent} from "../advcomp1-header/advcomp1-header.component";

@Component({
  selector: 'app-advcomp1',
  templateUrl: './advcomp1.component.html',
  styleUrls: ['./advcomp1.component.css']
})
export class Advcomp1Component implements OnInit {

  /** 從 component 抓 view 面裡的物件 */

  // 第一種用法
  @ViewChild('p')
  p: ElementRef;

  // 第二種抓法
  @ViewChild('myheader')
  myheader1: Advcomp1HeaderComponent;

  // 第三種抓法
  @ViewChild(Advcomp1HeaderComponent)
  myheader2: Advcomp1HeaderComponent;


  constructor() { }

  ngOnInit() {

  }

  debug() {
    console.log(this.p);
    console.log(this.myheader1);
    console.log(this.myheader2);
  }

}
