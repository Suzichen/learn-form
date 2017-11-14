import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
    selector: '[ChineseMobileValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ChineseMobileValidator,
            multi: true
        }
    ]
})
export class ChineseMobileValidator implements Validator {
    @Input() ChineseMobileValidator: string;

    constructor() { }

    validate(control: AbstractControl): { [error: string]: any } {
        let val = control.value;
        let flag=/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/.test(val);
        if(flag || !val){
            control.setErrors(null);
            return null
        }else{
            control.setErrors({ChineseMobileValidator:false});
            return {ChineseMobileValidator:false};
        }
    }
}