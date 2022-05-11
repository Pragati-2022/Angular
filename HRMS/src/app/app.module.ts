import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CandidateModule } from './modules/candidate/candidate.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { SharedModule } from './modules/shared/shared.module';
import { MasterModule } from './modules/master/master.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HolidayModule } from './modules/holiday/holiday.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxUiLoaderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      closeButton: true,
      timeOut : 1000,
    }),
    RouterModule,
    AppRoutingModule,
    CandidateModule,
    EmployeeModule,
    SharedModule,
    MasterModule,
    HolidayModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
