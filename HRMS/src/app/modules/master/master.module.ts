import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { DesignationListComponent } from './designation/designation-add/designation-list/designation-list.component';
import { DesignationAddComponent } from './designation/designation-add/designation-add.component';
import { ExternalDesignationAddComponent } from './external-designation/external-designation-add/external-designation-add.component';
import { ExternalDesignationListComponent } from './external-designation/external-designation-add/external-designation-list/external-designation-list.component';


@NgModule({
  declarations: [
    DesignationAddComponent,
    DesignationListComponent,
    ExternalDesignationAddComponent,
    ExternalDesignationListComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, NgxUiLoaderModule],
  exports: [
    DesignationAddComponent,
    DesignationListComponent,
    ExternalDesignationAddComponent,
    ExternalDesignationListComponent,
  ],
})
export class MasterModule {}
