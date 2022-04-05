import { Component } from "@angular/core";
import { Demo5Service } from "src/app/core/services/demo5-6/demo5.service";

@Component({
    selector: 'app-demo5',
    templateUrl: './demo5.component.html',
})

export class Demo5Component{
    numbers = [];

    constructor(private _demo5Service : Demo5Service) {
        this.numbers = _demo5Service.getNum();
    }

    addNum(num){
        this._demo5Service.addNum(num);
    }

    getNum(){
        this.numbers = this._demo5Service.getNum();
    }
}