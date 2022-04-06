import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'prependName2'
})

export class PrependNamePipe2  implements PipeTransform{
    transform(gender: any) {
        if(gender.toLowerCase()  === 'm' || gender.toLowerCase() === 'male'){
            return 'Mr.';
        }   
        else if(gender.toLowerCase() === 'f' || gender.toLowerCase() === 'female'){
            return 'Ms.';
        }
        else{
            return '-';
        }
    }
}