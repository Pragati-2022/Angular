import { Component } from "@angular/core";
import { Demo1Service } from "src/app/core/services/demo1-2/demo1.service";


@Component({
    selector: 'app-demo2',
    templateUrl: './demo2.component.html',
    providers: [Demo1Service]
})

export class Demo2Component {

    numbers = [];

    constructor(private _demo1Service : Demo1Service) {
        this.numbers = _demo1Service.getNum();
    }

    addNum(num){
        this._demo1Service.addNum(num);
    }

    getNum(){
        this.numbers = this._demo1Service.getNum();
    }
}