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
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {}

  // method to edit
  onEdit(externalDesignation: IDesignation) {

    // emit designation when click on edit
    this.sendExternalDesignation.emit(externalDesignation);
  }

  // method to delete
  onDelete(externalDesignation: IDesignation) {

    this.ngxService.start();
    
    // call method for delete designation
    this._externalDesignationService.deleteExternalDesignation(
      externalDesignation
    );

    // toaster notification on success
    this._notificationService.onSuccess(
      'External designation deleted successfully ',
      'notification'
    );

    if(this._externalDesignationService.externalDesignations.length === 0)
    this.isNoData = true;
  }
}
