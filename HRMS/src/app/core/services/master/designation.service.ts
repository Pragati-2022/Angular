import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { IDesignation } from 'src/app/modules/shared/models/master';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class DesignationService {
  // designation array
  designations!: IDesignation[];

  constructor(
    private notificationService: NotificationService,
    private loader: NgxUiLoaderService
  ) {}

  // method to add designation
  addDesignation(designation: IDesignation) {
    if (!this.designations) {
      this.designations = [];
    }

    this.designations.push(designation);

    this.designations.sort(function (a, b) {
      var c: any = new Date(a.dateTime);
      var d: any = new Date(b.dateTime);
      return d - c;
    });

    this.loader.stop();
  }

  //method to edit designation
  editDesignation(designation: IDesignation) {
    // find index which we want to edit
    let index = this.designations.findIndex((e) => e.id === designation.id);

    // ckeck index is not -1, null and undefined
    if (index != -1 && index != null && index != undefined) {
      // edit designation
      this.designations[index] = designation;
      
      this.designations.sort(function (a, b) {
        var c: any = new Date(a.dateTime);
        var d: any = new Date(b.dateTime);
        return d - c;
      });
    } else {
      this.notificationService.onWarning(
        'Data not found for edit !!',
        'notification'
      );
    }
    this.loader.stop();
  }

  // method to delete designation
  deleteDesignation(designation: IDesignation) {
    // find index which we want to delete
    let index = this.designations.findIndex((e) => e.id === designation.id);

    // ckeck index is not -1, null and undefined
    if (index != -1 && index != null && index != undefined) {
      //delete designation
      this.designations.splice(index, 1);
      this.loader.stop();
    }
  }
}
