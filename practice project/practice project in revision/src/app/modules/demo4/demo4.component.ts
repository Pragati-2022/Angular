import { Component } from "@angular/core";
import { Demo3Service } from "src/app/core/services/demo3-4/demo3.service";

@Component({
    selector: 'app-demo4',
    templateUrl: './demo4.component.html',
})

export class Demo4Component{
    numbers = [];

    constructor(private _demo3Service : Demo3Service) {
        this.numbers = _demo3Service.getNum();
    }

    addNum(num){
        this._demo3Service.addNum(num);
    }

    getNum(){
        this.numbers = this._demo3Service.getNum();
    }
}