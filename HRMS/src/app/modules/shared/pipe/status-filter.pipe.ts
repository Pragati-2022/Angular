import { Pipe, PipeTransform } from '@angular/core';
import { filter, from, tap, toArray } from 'rxjs';
import { IDesignation } from '../models/master';

@Pipe({
  name: 'statusFilter',
})
export class StatusFilter implements PipeTransform {
  transform(value: IDesignation[], status: any) {
    if (status != 'all' && value) {
      let filteredArray: IDesignation[] = [];
      from(value)
        .pipe(
          filter((val) => {
            return val.status == status;
          }),
          toArray()
        )
        .subscribe((res) => {
          filteredArray = res;
        });
      return filteredArray;
    } else {
      return value;
    }
  }
}
