import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prependName',
})
export class PrependNamePipe implements PipeTransform {
  transform(gender: string): string {
    if (gender.toLowerCase() == ('male' || 'm')) return 'Mr.' ;
    else if (gender.toLowerCase() == ('female' || 'f')) return 'Ms.' ;
    else return '-';
  }
}
