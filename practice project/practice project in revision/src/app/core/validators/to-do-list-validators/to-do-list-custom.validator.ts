import { FormControl, ValidationErrors } from "@angular/forms";

export class ToDoListCustomValidator {
  static greaterThenNow(control: FormControl): ValidationErrors | null {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    let str = control.value.replace(/-/gi, "");
    let taskYear = str.substring(0, 4);
    let taskMonth = str.substring(4, 6);
    let taskDay = str.substring(6, 8);

    if (control.value) {
      if (
        taskYear < year ||
        (taskYear >= year && taskMonth < month) ||
        (taskYear >= year && taskMonth == month && taskDay < day)
      ) {
        return { greaterThenNow: true };
      } else {
        return null;
      }
    }
  }
}
