import {AbstractControl} from "@angular/forms";
/**
 * Created by zhanzero on 2017/3/14.
 * 自制的 驗證器，直接拿給 要使用的 component 使用即可，加在驗證欄位裡面
 */

export function MynameValidators(control: AbstractControl) {

  // error 條件，當 開頭是 zero 結尾是 0 就會成立
  if(control.value.indexOf('zero') == 0) {
    if((control.value as string).endsWith('0')) {
      return { myname: true } // return true 為 表式 驗證有錯
    }
  }
  return null; // 驗證沒有問題
}
