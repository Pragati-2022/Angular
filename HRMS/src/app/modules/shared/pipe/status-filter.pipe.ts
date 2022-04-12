import { Pipe, PipeTransform } from '@angular/core';
import { filter, from, toArray } from 'rxjs';
import { IDesignation } from '../models/master';

@Pipe({
  name: 'statusFilter',
})
export class StatusFilter implements PipeTransform {
  transform(value: any[], status: any) {

    let filteredArray : IDesignation[] = [];
    if(value){
    from(value).pipe(filter(val => {
      return val.status == status
    }), toArray()).subscribe((res) => {
      filteredArray = res;
    });  
  }
  return filteredArray;
  }
}
