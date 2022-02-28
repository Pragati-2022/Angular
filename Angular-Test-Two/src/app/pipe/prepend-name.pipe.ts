import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prependName',
})
export class PrependNamePipe implements PipeTransform {
  transform(gender: string): string {
    if (gender.toLowerCase() == 'male') return 'Mr.' ;
    else return 'Ms.' ;
  }
}
