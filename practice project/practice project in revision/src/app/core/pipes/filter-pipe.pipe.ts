import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {

    transform(value: any[], args: any){
        var filterValue = value.filter((e) => e === args);

        if(filterValue.length > 0 ){
            return filterValue;
        }
        else{
            return 'No Data Found'
        }
    }
}