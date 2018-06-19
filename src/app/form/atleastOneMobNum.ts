import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export class atleastOneMobNum(control: AbstractControl): ValidationErrors|null {
   
     console.log(mnum);
    if ( mnum.value === '' && emernum.value === '') {
      return {
        'atleastOneMobNum': true
      };
    }
  return null;
  }