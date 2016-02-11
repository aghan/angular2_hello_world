import {Component} from 'angular2/core';

@Component({
    selector: 'sample-app',
    template: `<div class="sample">
        <h1> Hello world, this is {{name}} </h1>
    </div>`
})
export class SampleComponent {
    name: string;
    constructor() {
        this.name = 'Aditya';
    }
}
