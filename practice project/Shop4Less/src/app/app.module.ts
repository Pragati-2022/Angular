import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './modules/orders/orders.module';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    OrdersModule,
    AppRoutingModule,
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : LoggingInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
