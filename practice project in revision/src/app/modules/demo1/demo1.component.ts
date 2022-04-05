import { Component } from '@angular/core'
import { Demo1Service } from 'src/app/core/services/demo1-2/demo1.service';

@Component({
    selector: 'app-demo1',
    template: `<h1>I am demo 1 component.</h1>
                <input type="text" #num placeholder="Number">
                <button (click)="addNum(num.value)">Add Number</button>
                <ul>
                    <li *ngFor="let num of numbers">{{ num }}</li>
                </ul>`,
    styles: [`
        h1{
            color : red;
        }
    `],
    providers: [Demo1Service]
})
export class Demo1Component{

    numbers = [];
    constructor(private _demo1Service : Demo1Service){
        this.numbers = this._demo1Service.getNum();
    }

    addNum(num){
        this._demo1Service.addNum(num);
        this.numbers = this._demo1Service.getNum();
    }
 }