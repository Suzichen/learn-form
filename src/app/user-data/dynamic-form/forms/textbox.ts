import { Base } from './base';

export class TextBox extends Base<string>{

    controlType: string = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}