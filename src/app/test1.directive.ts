import {Directive, ElementRef, HostBinding, HostListener, Renderer} from '@angular/core';

/**
 * 它是一個 Directive
 * 功用可以加在 html 裡面的屬性
 * 它可以驅動DMO事件與更改css樣式
 * <h1 Test1> </h1> : 這樣加 <<<
 */

@Directive({
  selector: '[Test1]'
})
export class Test1Directive {

  /** :要點:
   * <h1 Test1> </h1>   <<< textColor
   * 若使用 HostBinding，是要 textColor 改變才會掉到 h1上
   *
   * <h1 Test1> </h1>   <<< changeColor
   * 若使用 HostListener，是 h1 上的事件改變 才會進到 changeColor{...} 事件容
   */

  /* 可以更改 css 樣式
   * [style.color]="'red'"
   */
  @HostBinding('style.color')
  textColor: string = 'red';

  /* 可以更改 DOM 事件
   * (click)="changeColor($event)"
   */
  @HostListener('click', ['$event']) changeColor($event: MouseEvent) {
    this.textColor = this.textColor == 'red' ? 'blue' : 'red';
    console.log($event.target);
    console.dir($event); // 列出 屬性型別
  }

  // 可透過 ElementRef & Renderer 存取靜態 html dom (產生呈現結果)
  constructor(private el: ElementRef, private renderer: Renderer) {
  }
  ngOnInit()  {
    // 取得 DMO 內容
    // this.el.nativeElement.innerHTML // 不建意使用
    // this.renderer...


  }



}
