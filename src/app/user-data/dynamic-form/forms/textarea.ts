import { Base } from './base';

export class Textarea extends Base<string>{

    controlType: string = 'textarea'
    rows: string;

    constructor(options: {} = {}) {
        super(options);
        this.rows = options['rows'] || '';
    }
}