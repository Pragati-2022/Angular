import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn : 'root'
// })
@Injectable()
export class Demo3Service {
    nums = [15, 50];

    addNum(num){
      this.nums.push(num)
    }

    getNum(){
      return this.nums
    }  
}
