import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExternalDesignationService } from 'src/app/core/services/master/external-designation.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { IDesignation } from 'src/app/modules/shared/models/master';
import {
  faToggleOn,
  faToggleOff,
  faEdit,
  faTrash,
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

  isNoData = false;

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
}
