import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSizePipe } from './pipe/image-size.pipe';
import { SharedModule } from './module/shared/shared.module';
import { TestService } from './services/test.service';
import { SharedService } from './services/shared.service';
import { NumlistService } from './services/numlist.service';
import { Demo1Component } from './module/demo1/demo1.component';
import { Demo2Component } from './module/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSizePipe,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [TestService, SharedService],
  // providers: [TestService, SharedService,NumlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
