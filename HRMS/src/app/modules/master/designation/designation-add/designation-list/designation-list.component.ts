import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DesignationService } from 'src/app/core/services/master/designation.service';
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
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css'],
})
export class DesignationListComponent implements OnInit {
  //properties for icons
  faToggleOn = faToggleOn;
  faToggleOff = faToggleOff;
  faEdit = faEdit;
  faTrash = faTrash;

  isNoData = false;

  // decorator for send designation when click on edit
  @Output() sendDesignation = new EventEmitter();

  constructor(
    public _designationService: DesignationService,
    private _notificationService: NotificationService,
    private loaderService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {}

  // method to edit
  onEdit(designation: IDesignation) {
    //emit designation
    this.sendDesignation.emit(designation);
  }

  //method to delete
  onDelete(designation: IDesignation) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result: any) => {
      if (result.value) {
        // Swal.fire('Deleted!', 'Designation has been deleted.', 'success');
        this.loaderService.start();

        //call method from service to delete designation
        this._designationService.deleteDesignation(designation);

        //toaster notification on success from notificationService
        this._notificationService.onSuccess(
          'Designation deleted successfully',
          'Notification'
        );

        if (this._designationService.designations.length === 0)
          this.isNoData = true;

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire('Cancelled', 'Designation is safe :)', 'error');
        this._notificationService.onError(
          'Designation is safe :)',
          'Notification'
        );
      }
    });
  }
}
