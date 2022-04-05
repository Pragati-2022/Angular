import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ExternalDesignationService } from 'src/app/core/services/master/external-designation.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { CustomValidators } from 'src/app/modules/shared/custom-validators/custom.validators';
import { IDesignation } from 'src/app/modules/shared/models/master';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-external-designation-master',
  templateUrl: './external-designation-master.component.html',
  styleUrls: ['./external-designation-master.component.css'],
})
export class ExternalDesignationMasterComponent implements OnInit {
  addExternalDesignationForm!: FormGroup;
  isSubmittedForm = false;
  externalDesignation!: IDesignation;
  editExternalDesignationId!: string;

  constructor(
    public formBuilder: FormBuilder,
    public _externalDesignationService: ExternalDesignationService,
    private _notificationService: NotificationService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // initialize form
  initializeForm() {
    this.addExternalDesignationForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          CustomValidators.uniqueTitle(
            this._externalDesignationService.externalDesignations,
            this.editExternalDesignationId
          ),
        ],
      ],
      status: [false],
    });
  }

  // get controls of form
  get _addExternalDesignationForm() {
    return this.addExternalDesignationForm.controls;
  }

  // method to submit added or edited value
  onSubmit() {
    this.isSubmittedForm = true;

    // check validation
    if (this.addExternalDesignationForm.valid) {
      // check for editExternalDesignationId
      if (this.editExternalDesignationId) {

        this.ngxService.start();

        // store edited value in object
        this.externalDesignation = {
          id: this.editExternalDesignationId,
          dateTime : new Date(),
          title: this._addExternalDesignationForm['title'].value,
          status: this._addExternalDesignationForm['status'].value,
        };

          //call editExternalDesignation method form service
          this._externalDesignationService.editExternalDesignation(
            this.externalDesignation
          );

          // do edit id blank
          this.editExternalDesignationId = '';

          // toaster notification on success
          this._notificationService.onSuccess(
            'External designation edited successfully ',
            'notification'
          );

      } else {
        this.ngxService.start();

        // store designation details in object
        this.externalDesignation = {
          id: uuidv4(),
          dateTime : new Date(),
          title: this._addExternalDesignationForm['title'].value,
          status: this._addExternalDesignationForm['status'].value,
        };
        
          // call method from service to add designation
          this._externalDesignationService.addExternalDesignation(
            this.externalDesignation
          );

          //toaster notification on success
          this._notificationService.onSuccess(
            'External designation added successfully ',
            'notification'
          );
      }

      //clear form
      this.initializeForm();
      this.isSubmittedForm = false;
    }
  }

  //get externalDesignation for edit
  getExternalDesignation(externalDesignation: IDesignation) {
    //check for externalDesignation
    if (externalDesignation) {
      // store id on specific property
      this.editExternalDesignationId = externalDesignation.id;

      // call initializeForm for update validation for unique title
      this.initializeForm();

      //patch value in form
      this.addExternalDesignationForm
        .get('title')
        ?.setValue(externalDesignation.title);
      this.addExternalDesignationForm
        .get('status')
        ?.setValue(externalDesignation.status);
    }
  }
}
