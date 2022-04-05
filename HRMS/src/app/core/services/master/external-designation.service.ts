import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { IDesignation } from 'src/app/modules/shared/models/master';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class ExternalDesignationService {
  // externalDesignations array
  externalDesignations!: IDesignation[];

  constructor(
    private _notificationService: NotificationService,
    private ngxService: NgxUiLoaderService
  ) {}
  // method to add externalDesignation
  addExternalDesignation(externalDesignation: IDesignation) {
    if (!this.externalDesignations) {
      this.externalDesignations = [];
    }

    this.externalDesignations.push(externalDesignation);

    this.externalDesignations.sort(function (a, b) {
      var c: any = new Date(a.dateTime);
      var d: any = new Date(b.dateTime);
      return d - c;
    });

    this.ngxService.stop();
  }

  //method to edit externalDesignation
  editExternalDesignation(externalDesignation: IDesignation) {
    // find index which we want to edit
    let index = this.externalDesignations.findIndex(
      (e) => e.id === externalDesignation.id
    );

    // ckeck index is not -1, null and undefined
    if (index != -1 && index != null && index != undefined) {
      //edit externalDesignation
      this.externalDesignations[index] = externalDesignation;
      this.externalDesignations.sort(function (a, b) {
        var c: any = new Date(a.dateTime);
        var d: any = new Date(b.dateTime);
        return d - c;
      });
    } else {
      this._notificationService.onWarning(
        'Data not found for edit !!',
        'notification'
      );
    }
    this.ngxService.stop();
  }

  deleteExternalDesignation(externalDesignation: IDesignation) {
    // find index which we want to delete
    let index = this.externalDesignations.findIndex(
      (e) => e === externalDesignation
    );

    // ckeck index is not -1, null and undefined
    if (index != -1 && index != null && index != undefined) {
      //delete externalDesignation
      this.externalDesignations.splice(index, 1);
      this.ngxService.stop();
    }
  }
}
