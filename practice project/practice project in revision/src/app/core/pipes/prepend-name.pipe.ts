import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'prependName'
})

export class PrependNamePipe  implements PipeTransform{
    transform( value: any, gender: any) {
        if(gender.toLowerCase()  === 'm' || gender.toLowerCase() === 'male'){
            return 'Mr.' + value;
        }   
        else if(gender.toLowerCase() === 'f' || gender.toLowerCase() === 'female'){
            return 'Ms.' + value;
        }
        else{
            return '-' + value;
        }
    }
}