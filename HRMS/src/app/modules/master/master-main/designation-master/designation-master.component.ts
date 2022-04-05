import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DesignationService } from 'src/app/core/services/master/designation.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { CustomValidators } from 'src/app/modules/shared/custom-validators/custom.validators';
import { IDesignation } from 'src/app/modules/shared/models/master';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-designation-master',
  templateUrl: './designation-master.component.html',
})
export class DesignationMasterComponent implements OnInit {
  addDesignationForm!: FormGroup;
  isFormSubmitted = false;
  designation!: IDesignation;
  editDesignationId!: string;

  constructor(
    public formBuilder: FormBuilder,
    public _designationService: DesignationService,
    private _notificationService: NotificationService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  //initialize form
  initializeForm() {
    this.addDesignationForm = this.formBuilder.group({
      designationTitle: [
        '',
        [
          Validators.required,
          CustomValidators.uniqueTitle(
            this._designationService.designations,
            this.editDesignationId
          ),
        ],
      ],
      status: [false],
    });
  }

  // get controls of form
  get _addDesignationForm() {
    return this.addDesignationForm.controls;
  }

  // method call on submit
  onSubmit() {
    this.isFormSubmitted = true;

    //condition for valid form
    if (this.addDesignationForm.valid) {
      // condition for editDesignationId is available
      if (this.editDesignationId) {
        this.ngxService.start();

        //edited value store in object
        this.designation = {
          id: this.editDesignationId,
          dateTime : new Date(),
          title: this._addDesignationForm['designationTitle'].value,
          status: this._addDesignationForm['status'].value,
        };

          // call editDesignation method from service
          this._designationService.editDesignation(this.designation);

          // do editDesignationId blank
          this.editDesignationId = '';

          //toaster notification from notificationservice
          this._notificationService.onSuccess(
            'Designation edited successfully',
            'Notification'
          );
      } else {
        this.ngxService.start();

        // store designation details in object
        this.designation = {
          id: uuidv4(),
          dateTime : new Date(),
          title: this._addDesignationForm['designationTitle'].value,
          status: this._addDesignationForm['status'].value,
        };

          // call method from service
          this._designationService.addDesignation(this.designation);

          //toaster notification on success from notificationService
          this._notificationService.onSuccess(
            'Designation added successfully',
            'Notification'
          );
      }

      //clear form once added or edited
      this.initializeForm();
      this.isFormSubmitted = false;
    }
  }

  //method to getDesignation when click on edit
  getDesignation(designation: IDesignation) {
    // condition to check designation
    if (designation) {
      //store designation id to specific property
      this.editDesignationId = designation.id;

      //initialize form for update validation for unique title
      this.initializeForm();

      //patch value in form
      this.addDesignationForm
        .get('designationTitle')
        ?.setValue(designation?.title);
      this.addDesignationForm.get('status')?.setValue(designation.status);
    }
  }
}
