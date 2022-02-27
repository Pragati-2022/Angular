import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSize'
})
export class ImageSizePipe implements PipeTransform {

  transform(value: string) {
        return (value.length == 8 ? value :'add valid' ); 
  }      
}
