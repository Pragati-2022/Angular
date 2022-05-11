import { Component, OnInit } from '@angular/core';
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
import swal from 'sweetalert';

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

  isUp = false;
  isStatus = 'all';
  editDesignation! : IDesignation;

  p: number = 1;
  rowPerPage = 4;

  constructor(
    public externalDesignationService: ExternalDesignationService,
    private notificationService: NotificationService,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {}

  // method to edit
  onEdit(externalDesignation: IDesignation) {
    this.editDesignation = externalDesignation;
  }

  // method to delete
  onDelete(externalDesignation: IDesignation) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this designation details!",
      icon: "warning",
      dangerMode: true,
    }).then((result: any) => {
      if (result) {
        this.loader.start();

        // call method for delete designation
        this.externalDesignationService.deleteExternalDesignation(
          externalDesignation
        );
        this.externalDesignationService.externalDesignations = [
          ...this.externalDesignationService.externalDesignations,
        ];
        // toaster notification on success
        this.notificationService.onSuccess(
          'External designation deleted successfully ',
          'notification'
        );
      } else {
        this.notificationService.onError(
          'External designation is safe :)',
          'notification'
        );
      }
    });
  }

  onClickRowPerPage(rowPerPage: number) {
    // this.rowPerPage = rowPerPage.target.value;
    this.rowPerPage = rowPerPage;
    console.log(this.rowPerPage);
    this.p = 1;
  }

  onSort() {
    // Ascending

    if (this.externalDesignationService.externalDesignations) {
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

        this.externalDesignationService.externalDesignations.sort(compare);
        this.externalDesignationService.externalDesignations = [
          ...this.externalDesignationService.externalDesignations,
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

        this.externalDesignationService.externalDesignations.sort(compare);
        this.externalDesignationService.externalDesignations = [
          ...this.externalDesignationService.externalDesignations,
        ];
        console.log('down');
      }
    }

    console.log(this.externalDesignationService.externalDesignations);
  }

  filterStatus() {
    this.p = 1;
  }

  onChangeStatus(externalDesignation: IDesignation) {
    if (externalDesignation.status) {
      externalDesignation.status = false;
      this.externalDesignationService.externalDesignations = [
        ...this.externalDesignationService.externalDesignations,
      ];
    } else if (!externalDesignation.status) {
      externalDesignation.status = true;
      this.externalDesignationService.externalDesignations = [
        ...this.externalDesignationService.externalDesignations,
      ];
    }
  }

  onClickDropdown(value : any){
    this.isStatus = value;
    console.log(this.isStatus);
  }
}
