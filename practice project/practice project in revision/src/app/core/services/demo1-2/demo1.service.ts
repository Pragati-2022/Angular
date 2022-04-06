import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn : 'root'
// })
@Injectable()
export class Demo1Service {
    nums = [13, 56];

    addNum(num){
      this.nums.push(num)
    }

    getNum(){
      return this.nums
    }  
}
