import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterMainComponent } from './master-main/master-main.component';
import { DesignationMasterComponent } from './master-main/designation-master/designation-master.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DesignationListComponent } from './master-main/designation-master/designation-list/designation-list.component';
import { ExternalDesignationMasterComponent } from './master-main/external-designation-master/external-designation-master.component';
import { ExternalDesignationListComponent } from './master-main/external-designation-master/external-designation-list/external-designation-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxUiLoaderModule } from "ngx-ui-loader";


@NgModule({
  declarations: [
    MasterMainComponent,
    DesignationMasterComponent,
    DesignationListComponent,
    ExternalDesignationMasterComponent,
    ExternalDesignationListComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, NgxUiLoaderModule],
  exports: [
    MasterMainComponent,
    DesignationMasterComponent,
    DesignationListComponent,
    ExternalDesignationMasterComponent,
    ExternalDesignationListComponent,
  ],
})
export class MasterModule {}
