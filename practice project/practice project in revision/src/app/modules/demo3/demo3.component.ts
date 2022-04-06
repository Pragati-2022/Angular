import { Component } from "@angular/core";
import { Demo3Service } from "src/app/core/services/demo3-4/demo3.service";

@Component({
    selector: 'app-demo3',
    templateUrl: './demo3.component.html'
})

export class Demo3Component{
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