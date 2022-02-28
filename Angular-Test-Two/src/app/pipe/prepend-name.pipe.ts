import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prependName',
})
export class PrependNamePipe implements PipeTransform {
  transform(value: string, gender: string): string {
    if (gender.toLowerCase() == 'male') return 'Mr.' + value.toUpperCase();
    else return 'Ms.' + value.toUpperCase();
  }
}
