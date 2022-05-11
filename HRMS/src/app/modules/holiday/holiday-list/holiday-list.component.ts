import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HolidayService } from 'src/app/core/services/holiday/holiday.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { IHoliday } from '../../shared/models/holiday';
import swal from 'sweetalert';

@Component({
  selector: '[app-holiday-list]',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css'],
})
export class HolidayListComponent implements OnInit, AfterViewInit {
  editHoliday!: IHoliday;
  displayedColumns: string[] = ['Title', 'Start Date', 'End Date', 'Actions'];
  pageEvent: any;
  pageSize = 2;
  isTitleAsc = false;
  isDateAsc = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public holidayService: HolidayService,
    private notificationService: NotificationService,
    private loader: NgxUiLoaderService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.holidayService.dataSource.paginator = this.paginator;
  }

  onEdit(holiday: IHoliday) {
    this.editHoliday = holiday;
  }

  onDelete(holiday: IHoliday) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this holiday details!',
      buttons: ['No', 'Yes'],
      icon: 'warning',
      dangerMode: true,
    }).then((result: any) => {
      if (result) {
        console.log(this.holidayService.holidays);
        this.loader.start();

        this.holidayService.deleteHoliday(holiday);
        this.holidayService.dataSource.data = [
          ...this.holidayService.dataSource.data,
        ];

        console.log(this.holidayService.holidays);

        this.notificationService.onSuccess(
          'Holiday deleted successfully',
          'Notification'
        );
      } else {
        this.notificationService.onError('Holiday is safe :)', 'Notification');
      }
    });
  }

  onAsc() {
    console.log('up');

    this.paginator.firstPage();

    this.holidayService.dataSource.data.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      let comparison = 0;
      if (titleA > titleB) {
        comparison = 1;
      } else if (titleA < titleB) {
        comparison = -1;
      }
      return comparison;
    });

    console.log(this.holidayService.dataSource.data);

    this.holidayService.dataSource.data = [
      ...this.holidayService.dataSource.data,
    ];
  }

  onDesc() {
    console.log('down');

    this.holidayService.dataSource.data.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      let comparison = 0;
      if (titleA < titleB) {
        comparison = 1;
      } else if (titleA > titleB) {
        comparison = -1;
      }
      return comparison;
    });

    console.log(this.holidayService.dataSource.data);

    this.holidayService.dataSource.data = [
      ...this.holidayService.dataSource.data,
    ];
  }

  onAscDate(date: string) {
    if (date === 'startDate') {
      this.holidayService.dataSource.data.sort((a, b) => {
        const c: any = new Date(a.startDate);
        const d: any = new Date(b.startDate);
        return c - d;
      });
    } else {
      this.holidayService.dataSource.data.sort((a, b) => {
        const c: any = new Date(a.endDate);
        const d: any = new Date(b.endDate);
        return c - d;
      });
    }

    console.log(this.holidayService.dataSource.data);

    this.holidayService.dataSource.data = [
      ...this.holidayService.dataSource.data,
    ];
  }

  onDescDate(date: string) {
    if (date === 'startDate') {
      this.holidayService.dataSource.data.sort((a, b) => {
        const c: any = new Date(a.startDate);
        const d: any = new Date(b.startDate);
        return d - c;
      });
    } else {
      this.holidayService.dataSource.data.sort((a, b) => {
        const c: any = new Date(a.startDate);
        const d: any = new Date(b.startDate);
        return d - c;
      });
    }

    console.log(this.holidayService.dataSource.data);

    this.holidayService.dataSource.data = [
      ...this.holidayService.dataSource.data,
    ];
  }

  onPaginateChange($event: PageEvent) {
    if (this.pageSize != $event.pageSize) {
      this.paginator.firstPage();
      this.pageSize = $event.pageSize;
    }
  }
}
