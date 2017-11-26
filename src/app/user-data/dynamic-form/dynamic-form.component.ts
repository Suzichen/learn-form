import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Base } from '../dynamic-form/forms';

@Component({
    selector: 'form-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DynamicFormComponent implements OnInit {

    @Input()
    form: FormGroup;
    @Input()
    field: Base<any>

    constructor() { }

    ngOnInit() {
    }

}
