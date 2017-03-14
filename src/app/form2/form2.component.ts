import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MynameValidators} from "./validators/myname.validators";

/**
 * 使用 Reactive Forms 開發 表單
 * FormBuilder 、
 */

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: any;

  formData: any;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    // 透過強型別將 class 轉換成 form control
    // this.formData = this.fb.group(new myData());

    this.form = this.fb.group({
      'title': ['p1 default value', [Validators.required,MynameValidators]],
      'subtitle': ['p2 default value', Validators.required],

      // 使用 group 創建 表單子陣列，沒順序性
      'profile': this.fb.group({
        type1: ['type1', [Validators.required, Validators.maxLength(10)]],
        type2: ['type2', [Validators.required, Validators.minLength(10)]]
      }),

      // 使用 array 創建 表單子陣列，有順序性
      'types': this.fb.array([
        this.fb.control('Will 1', Validators.required),
        this.fb.control('Will 2', Validators.required),
        this.fb.control('Will 3', Validators.required),
        this.fb.control('Will 4', Validators.required),
        this.fb.control('Will 5', Validators.required)
      ]),

      // 使用 js map 迴 表單子陣列
      'types1': this.fb.array(
        [1,2,3,4,5].map((v, idx) => {
          return this.fb.control(v, Validators.required)
        })
      )

    });
  }

}


// class myData {
//   p1: string;
//   p2: string;
// }
