import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ExternalDesignationService } from 'src/app/core/services/master/external-designation.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { CustomValidators } from 'src/app/modules/shared/custom-validators/custom.validators';
import { IDesignation } from 'src/app/modules/shared/models/master';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-external-designation-add',
  templateUrl: './external-designation-add.component.html',
  styleUrls: ['./external-designation-add.component.css'],
})
export class ExternalDesignationAddComponent implements OnInit, OnChanges {
  // @ts-ignore
  addExternalDesignationForm: FormGroup;
  isSubmittedForm = false;
  // @ts-ignore
  externalDesignation: IDesignation;
  
  @Input() onEditExternalDesignation! : IDesignation | null;

  constructor(
    public formBuilder: FormBuilder,
    public externalDesignationService: ExternalDesignationService,
    private notificationService: NotificationService,
    private loader: NgxUiLoaderService
  ) {  }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(): void {
    if(this.onEditExternalDesignation){
      //initialize form for update validation for unique title
      this.initializeForm();

      //patch value in form
      this.addExternalDesignationForm
        .get('title')
        ?.setValue(this.onEditExternalDesignation?.title);
      this.addExternalDesignationForm.get('status')?.setValue(this.onEditExternalDesignation.status);
    }
  }
  
  // initialize form
  initializeForm() {
    this.addExternalDesignationForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          CustomValidators.uniqueTitle(
            this.externalDesignationService.externalDesignations,
            this.onEditExternalDesignation?.id
          ),
          Validators.maxLength(256),
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
      if (this.onEditExternalDesignation) {
        // store edited value in object
        this.externalDesignation = {
          id: this.onEditExternalDesignation.id,
          dateTime: new Date(),
          title: this._addExternalDesignationForm['title'].value,
          status: this._addExternalDesignationForm['status'].value,
        };

        swal({
          title: 'Are you sure want to edit?',
          icon: 'warning',
          buttons: ['No', 'Yes'],
          dangerMode: true,
        }).then((result: any) => {
          if (result) {
            this.loader.start();

            //call editExternalDesignation method form service
            this.externalDesignationService.editExternalDesignation(
              this.externalDesignation
            );
            this.externalDesignationService.externalDesignations = [
              ...this.externalDesignationService.externalDesignations,
            ];

            // do edit id blank
            this.onEditExternalDesignation = null;

            // toaster notification on success
            this.notificationService.onSuccess(
              'External designation edited successfully ',
              'notification'
            );
          }
        });
      } else {
        // store designation details in object
        this.externalDesignation = {
          id: uuidv4(),
          dateTime: new Date(),
          title: this._addExternalDesignationForm['title'].value,
          status: this._addExternalDesignationForm['status'].value,
        };

        swal({
          title: 'Are you sure want to add?',
          icon: 'warning',
          buttons: ['No', 'Yes'],
          dangerMode: true,
        }).then((result: any) => {
          if (result) {
            // call method from service to add designation
            this.externalDesignationService.addExternalDesignation(
              this.externalDesignation
            );
            this.externalDesignationService.externalDesignations = [
              ...this.externalDesignationService.externalDesignations,
            ];

            //toaster notification on success
            this.notificationService.onSuccess(
              'External designation added successfully ',
              'notification'
            );
          }
        });
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
      // this.editExternalDesignationId = externalDesignation.id;

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
