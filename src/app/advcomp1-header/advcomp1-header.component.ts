import {Component, OnInit, ContentChild} from '@angular/core';
import {Advcomp1PartComponent} from "../advcomp1-part/advcomp1-part.component";

@Component({
  selector: 'app-advcomp1-header',
  templateUrl: './advcomp1-header.component.html',
  styleUrls: ['./advcomp1-header.component.css']
})
export class Advcomp1HeaderComponent implements OnInit {

  // 抓到上層內容引用的 Content 內容
  @ContentChild(Advcomp1PartComponent)
  par1: Advcomp1PartComponent;

  constructor() { }

  ngOnInit() {
  }

}
