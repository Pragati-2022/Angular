import { Component, OnInit } from '@angular/core';
import { DesignationService } from 'src/app/core/services/master/designation.service';
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
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  isUp = false;
  isStatus = 'all';
  editDesignation! : IDesignation;

  p: number = 1;
  rowPerPage = 4;

  constructor(
    public designationService: DesignationService,
    private notificationService: NotificationService,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {  }

  // method to edit
  onEdit(designation: IDesignation) {
    this.editDesignation = designation;
  }

  //method to delete
  onDelete(designation: IDesignation) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this designation details!",
      icon: "warning",
      dangerMode: true,
    }).then((result: any) => {
      if (result) {
        this.loader.start();

        //call method from service to delete designation
        this.designationService.deleteDesignation(designation);
      this.designationService.designations = [...this.designationService.designations]
        //toaster notification on success from notificationService
        this.notificationService.onSuccess(
          'Designation deleted successfully',
          'Notification'
        );
      } else {
        this.notificationService.onError(
          'Designation is safe :)',
          'Notification'
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
    if (this.designationService.designations) {
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

        this.designationService.designations.sort(compare);
        this.designationService.designations = [
          ...this.designationService.designations,
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

        this.designationService.designations.sort(compare);
        this.designationService.designations = [
          ...this.designationService.designations,
        ];
        console.log('down');
      }
    }

    console.log(this.designationService.designations);
  }

  filterStatus() {
    this.p = 1;
  }

  onChangeStatus(designation: IDesignation) {
    if (designation.status) {
      this.p = 1;
      designation.status = false;
      this.designationService.designations = [
        ...this.designationService.designations,
      ];
    } else if (!designation.status) {
      this.p = 1;
      designation.status = true;
      this.designationService.designations = [
        ...this.designationService.designations,
      ];
    }
  }
  
  onClickDropdown(value : any){
    this.isStatus = value;
    console.log(this.isStatus);
  }
}
