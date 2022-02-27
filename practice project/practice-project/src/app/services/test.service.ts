import { Injectable } from '@angular/core';

import { SharedService } from "./shared.service";

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class TestService {

  title = 'hello Sanepara';
  otherTitle = '';
  // private tests :any[] = [];

  constructor(private _sharedService:SharedService) {
   }

   getOtherMsg(){
    this.otherTitle = this._sharedService.title;
    return this.otherTitle;
   }

  // add(test: any){
  //   this.tests.push(test);
  // }

  // remove(id: string){
  //   this.tests = this.tests.filter(x=> x.id !== id);
  // }

  // open(id: string){
  //   const test = this.tests.find(x=> x.id === id);
  //   test.open();
  // }

  // close(id: string){
  //   const test = this.tests.find(x=> x.id === id);
  //   test.open();
  // }
}
