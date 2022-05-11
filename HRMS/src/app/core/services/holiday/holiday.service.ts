import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { IHoliday } from 'src/app/modules/shared/models/holiday';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  holidays: IHoliday[] = [];
  dataSource = new MatTableDataSource<IHoliday>();

  constructor(
    private loader: NgxUiLoaderService,
    private notificationService: NotificationService
  ) {}

  addHoliday(holiday: IHoliday) {
    if (!this.holidays) {
      this.holidays = [];
    }

    this.holidays.push(holiday);

    this.holidays.sort(function (a, b) {
      var c: any = new Date(a.dateTime);
      var d: any = new Date(b.dateTime);
      return d - c;
    });

    this.dataSource.data = this.holidays;
    // console.log(this.dataSource.data);

    this.loader.stop();
  }

  editHoliday(holiday: IHoliday) {
    let index = this.holidays.findIndex((e) => e.id === holiday.id);

    if (index != -1 && index != null && index != undefined) {
      this.holidays[index] = holiday;

      this.holidays.sort(function (a, b) {
        var c: any = new Date(a.dateTime);
        var d: any = new Date(b.dateTime);
        return d - c;
      });

      this.dataSource.data = this.holidays;
    } else {
      this.notificationService.onWarning(
        'Data not found for edit !!',
        'notification'
      );
    }
    this.loader.stop();
  }

  deleteHoliday(holiday: IHoliday) {
    let index = this.holidays.findIndex((e) => e.id === holiday.id);

    if (index != -1 && index != null && index != undefined) {
      this.holidays.splice(index, 1);
      this.dataSource.data = this.holidays;
      this.loader.stop();
    }
  }
}
