import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "addUnderscorePipe",
})
export class AddUnderscorePipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 10) {
      let str = "";
      let index = value.indexOf(" ");
      if (index >= 0) {
        str = value.replace(/ /gi, "_");
      } else {
        str = value.split("").join("_");
      }
      return str;
    } else {
      return value;
    }
  }
}
