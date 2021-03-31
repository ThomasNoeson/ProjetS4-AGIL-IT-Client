import {AbstractControl} from '@angular/forms';

export class MesValidateurs{
  static passwordConfirming(c: AbstractControl): { [s: string]: boolean } {
    if (c.get('password').value !== c.get('passwordconfirm').value) {
      return {invalid: true};
    }
    return null;
  }
}
