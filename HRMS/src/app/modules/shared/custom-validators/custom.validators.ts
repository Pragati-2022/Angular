import { FormControl, ValidationErrors } from '@angular/forms';
import { IHoliday } from '../models/holiday';
import { IDesignation } from '../models/master';

export class CustomValidators {
  static uniqueTitle(
    titles: any[],
    editTitleId?: string
  ): ValidationErrors | null {
    return (control: FormControl) => {
      let title;
      if (titles) {
        title = titles.find((e) => e.title === control.value);
      }

      if (title) {
        if (editTitleId === title.id) return null;
        else return { uniqueTitle: true };
      } else {
        return null;
      }
    };
  }
}
