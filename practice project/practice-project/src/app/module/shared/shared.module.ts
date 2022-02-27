import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';
import { SharedComponent } from './shared.component';
import { TestService } from 'src/app/services/test.service';



@NgModule({
  declarations: [
    TestComponent,
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TestComponent,
    SharedComponent
  ],
  // providers:[
  //   TestService
  // ]
})
export class SharedModule { }
