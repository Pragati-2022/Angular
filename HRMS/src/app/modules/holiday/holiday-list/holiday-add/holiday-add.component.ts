import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HolidayService } from 'src/app/core/services/holiday/holiday.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { CustomValidators } from 'src/app/modules/shared/custom-validators/custom.validators';
import { IHoliday } from 'src/app/modules/shared/models/holiday';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-holiday-add',
  templateUrl: './holiday-add.component.html',
  styleUrls: ['./holiday-add.component.css'],
})
export class HolidayAddComponent implements OnInit {
  addHolidayForm!: FormGroup;
  isFormSubmitted = false;
  minDate: Date;
  maxDate: Date;
  holiday: IHoliday;

  @Input() onEditHoliday!: IHoliday | null;

  constructor(
    public formBuilder: FormBuilder,
    private holidayService: HolidayService,
    private notificationService: NotificationService,
    private loader: NgxUiLoaderService
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
  }

  ngOnChanges(): void {
    if (this.onEditHoliday) {
      this.initializeForm();

      this.addHolidayForm.get('title')?.setValue(this.onEditHoliday?.title);
      this.addHolidayForm
        .get('startDate')
        ?.setValue(this.onEditHoliday.startDate);
      this.addHolidayForm.get('endDate')?.setValue(this.onEditHoliday.endDate);
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  //initialize form
  initializeForm() {
    this.addHolidayForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          CustomValidators.uniqueTitle(
            this.holidayService.holidays,
            this.onEditHoliday?.id
          ),
          Validators.maxLength(256),
        ],
      ],
      startDate: [new Date(), [Validators.required]],
      endDate: [new Date(), [Validators.required]],
    });
  }

  // get controls of form
  get _addHolidayForm() {
    return this.addHolidayForm.controls;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.addHolidayForm.valid) {
      if (this.onEditHoliday) {
        this.holiday = {
          id: this.onEditHoliday.id,
          dateTime: new Date(),
          title: this._addHolidayForm['title'].value,
          startDate: this._addHolidayForm['startDate'].value,
          endDate: this._addHolidayForm['endDate'].value,
        };

        swal({
          title: 'Are you sure?',
          buttons: ['No', 'Yes'],
          dangerMode: true,
        }).then((result: any) => {
          if (result) {
            this.loader.start();

            this.holidayService.editHoliday(this.holiday);
            this.holidayService.dataSource.data = [
              ...this.holidayService.dataSource.data,
            ];

            this.onEditHoliday = null;

            this.notificationService.onSuccess(
              'Holiday edited successfully',
              'Notification'
            );
          }
        });
      } else {
        this.holiday = {
          id: uuidv4(),
          dateTime: new Date(),
          title: this._addHolidayForm['title'].value,
          startDate: this._addHolidayForm['startDate'].value,
          endDate: this._addHolidayForm['endDate'].value,
        };

        swal({
          title: 'Are you sure?',
          buttons: ['No', 'Yes'],
          dangerMode: true,
        }).then((result: any) => {
          if (result) {
            this.loader.start();

            this.holidayService.addHoliday(this.holiday);
            this.holidayService.holidays = [...this.holidayService.holidays];

            this.notificationService.onSuccess(
              'Holiday added successfully',
              'Notification'
            );
          }
        });
      }

      this.isFormSubmitted = false;
      this.initializeForm();
      // this.addHolidayForm.reset();
      // this.addHolidayForm.get('title')?.clearValidators();
      // this.addHolidayForm.get('title')?.updateValueAndValidity();
      // this.addHolidayForm.markAsUntouched();
      this.maxDate = new Date();
    }
  }

  date(e: any) {
    this.maxDate = this._addHolidayForm['startDate'].value;
  }
}
