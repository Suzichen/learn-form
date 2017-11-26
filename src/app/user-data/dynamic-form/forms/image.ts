import { Base } from './base';

export class Image extends Base<string>{

    controlType: string = 'image'
    src: string

    constructor(options: {} = {}) {
        super(options);
        this.src = options['src'] || '';
    }
}