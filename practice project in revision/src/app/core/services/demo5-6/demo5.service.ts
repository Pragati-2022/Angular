import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class Demo5Service {
    nums = [45, 90];

    addNum(num){
      this.nums.push(num)
    }

    getNum(){
      return this.nums
    }  
}
