import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExternalDesignationService } from 'src/app/core/services/master/external-designation.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { IDesignation } from 'src/app/modules/shared/models/master';
import {
  faToggleOn,
  faToggleOff,
  faEdit,
  faTrash,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-external-designation-list',
  templateUrl: './external-designation-list.component.html',
  styleUrls: ['./external-designation-list.component.css'],
})
export class ExternalDesignationListComponent implements OnInit {
  //properties for icons
  faToggleOn = faToggleOn;
  faToggleOff = faToggleOff;
  faEdit = faEdit;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  isNoData = false;
  isUp = false;
  isStatus = false;

  p: number = 1;
  rowPerPage = 4;

  // decorator for send designation for edit
  @Output() sendExternalDesignation = new EventEmitter();

  constructor(
    public _externalDesignationService: ExternalDesignationService,
    private _notificationService: NotificationService,
    private loaderService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {}

  // method to edit
  onEdit(externalDesignation: IDesignation) {
    // emit designation when click on edit
    this.sendExternalDesignation.emit(externalDesignation);
  }

  // method to delete
  onDelete(externalDesignation: IDesignation) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        // Swal.fire(
        //   'Deleted!',
        //   'External designation has been deleted.',
        //   'success'
        // );
        this.loaderService.start();

        // call method for delete designation
        this._externalDesignationService.deleteExternalDesignation(
          externalDesignation
        );
        this._externalDesignationService.externalDesignations = [
          ...this._externalDesignationService.externalDesignations,
        ];
        // toaster notification on success
        this._notificationService.onSuccess(
          'External designation deleted successfully ',
          'notification'
        );

        if (this._externalDesignationService.externalDesignations.length === 0)
          this.isNoData = true;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire('Cancelled', 'External designation is safe :)', 'error');
        this._notificationService.onError(
          'External designation is safe :)',
          'notification'
        );
      }
    });
  }

  SetRowPerPage(rowPerPage: any) {
    this.rowPerPage = rowPerPage.target.value;
    console.log(this.rowPerPage);
    this.p = 1;
  }

  onSort() {
    // Ascending

    if (this._externalDesignationService.externalDesignations) {
      this.p = 1;
      if (this.isUp) {
        function compare(a: any, b: any) {
          // Use toUpperCase() to ignore character casing
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();

          let comparison = 0;
          if (titleA > titleB) {
            comparison = 1;
          } else if (titleA < titleB) {
            comparison = -1;
          }
          return comparison;
        }

        this._externalDesignationService.externalDesignations.sort(compare);
        this._externalDesignationService.externalDesignations = [
          ...this._externalDesignationService.externalDesignations,
        ];
        console.log('up');
      } else {
        function compare(a: any, b: any) {
          // Use toUpperCase() to ignore character casing
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();

          let comparison = 0;
          if (titleA < titleB) {
            comparison = 1;
          } else if (titleA > titleB) {
            comparison = -1;
          }
          return comparison;
        }

        this._externalDesignationService.externalDesignations.sort(compare);
        this._externalDesignationService.externalDesignations = [
          ...this._externalDesignationService.externalDesignations,
        ];
        console.log('down');
      }
    }

    console.log(this._externalDesignationService.externalDesignations);
  }

  filterStatus() {
    this.p = 1;
  }

  onChangeStatus(externalDesignation: IDesignation) {
    if (externalDesignation.status) {
      externalDesignation.status = false;
      this._externalDesignationService.externalDesignations = [
        ...this._externalDesignationService.externalDesignations,
      ];
    } else if (!externalDesignation.status) {
      externalDesignation.status = true;
      this._externalDesignationService.externalDesignations = [
        ...this._externalDesignationService.externalDesignations,
      ];
    }
  }
}
