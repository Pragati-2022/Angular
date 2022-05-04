import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  isNoData = false;
  isUp = false;
  isStatus = 'all';

  p: number = 1;
  rowPerPage = 4;

  // decorator for send designation when click on edit
  @Output() sendDesignation = new EventEmitter();

  constructor(
    public designationService: DesignationService,
    private notificationService: NotificationService,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {}

  // method to edit
  onEdit(designation: IDesignation) {
    //emit designation
    this.sendDesignation.emit(designation);
  }

  //method to delete
  onDelete(designation: IDesignation) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this designation details!",
      icon: "warning",
      dangerMode: true,
    }).then((result: any) => {
      if (result.value) {
        this.loader.start();

        //call method from service to delete designation
        this.designationService.deleteDesignation(designation);
      this.designationService.designations = [...this.designationService.designations]
        //toaster notification on success from notificationService
        this.notificationService.onSuccess(
          'Designation deleted successfully',
          'Notification'
        );

        if (this.designationService.designations.length === 0)
          this.isNoData = true;
      } else {
        this.notificationService.onError(
          'Designation is safe :)',
          'Notification'
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
  
  getDropDowmValue(event : any){
    this.isStatus = event.target.value;
    console.log(this.isStatus);
  }
}
