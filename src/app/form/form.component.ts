import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";


/**
 * 使用 Model-Driven Form 開發 表單
 */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data: any = {};

  constructor() { }

  ngOnInit() { }

  doSubmit(f: NgForm)  {
    // 把表單傳進來

    if(f.valid) {
      console.log(f.value);
    }

  }

}
