import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DesignationService } from 'src/app/core/services/master/designation.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { CustomValidators } from 'src/app/modules/shared/custom-validators/custom.validators';
import { IDesignation } from 'src/app/modules/shared/models/master';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-designation-add',
  templateUrl: './designation-add.component.html',
  styleUrls: ['./designation-add.component.css'],
})
export class DesignationAddComponent implements OnInit {
  addDesignationForm: FormGroup;
  isFormSubmitted = false;
  designation: IDesignation;
  editDesignationId: string;

  constructor(
    public formBuilder: FormBuilder,
    public designationService: DesignationService,
    private notificationService: NotificationService,
    private loader: NgxUiLoaderService
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
            this.designationService.designations,
            this.editDesignationId
          ),
          Validators.maxLength(256),
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
      console.log(this._addDesignationForm['designationTitle'].value);

      // condition for editDesignationId is available
      if (this.editDesignationId) {

        //edited value store in object
        this.designation = {
          id: this.editDesignationId,
          dateTime: new Date(),
          title: this._addDesignationForm['designationTitle'].value,
          status: this._addDesignationForm['status'].value,
        };

        swal({
          title: 'Are you sure want to edit?',
          icon: 'warning',
          buttons: ['No', 'Yes'],
          dangerMode: true,
        }).then((result: any) => {
          if (result) {
            this.loader.start();

            // call editDesignation method from service
            this.designationService.editDesignation(this.designation);
            this.designationService.designations = [
              ...this.designationService.designations,
            ];

            // do editDesignationId blank
            this.editDesignationId = '';

            //toaster notification from notificationservice
            this.notificationService.onSuccess(
              'Designation edited successfully',
              'Notification'
            );
          }
        });
      } else {
        console.log(this._addDesignationForm['designationTitle'].value);

        // store designation details in object
        this.designation = {
          id: uuidv4(),
          dateTime: new Date(),
          title: this._addDesignationForm['designationTitle'].value,
          status: this._addDesignationForm['status'].value,
        };
        swal({
          title: 'Are you sure want to add?',
          icon: 'warning',
          buttons: ['No', 'Yes'],
          dangerMode: true,
        }).then((result: any) => {
          if (result) {
            this.loader.start();

            // call method from service
            this.designationService.addDesignation(this.designation);
            this.designationService.designations = [
              ...this.designationService.designations,
            ];
            //toaster notification on success from notificationService
            this.notificationService.onSuccess(
              'Designation added successfully',
              'Notification'
            );
          }
        });
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
