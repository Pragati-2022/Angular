import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/nav/nav.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about/about.component';
import { AddProductModule } from './modules/add-product/add-product.module';
import { ProductsComponent } from './modules/products/products.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LoginComponent } from './modules/login/login.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { LaptopComponent } from './modules/products/laptop/laptop.component';
import { MobileComponent } from './modules/products/mobile/mobile.component';
import { TvComponent } from './modules/products/tv/tv.component';
import { TablateComponent } from './modules/products/tablate/tablate.component';
import { LaptopDetailsComponent } from './modules/products/laptop/laptop-details/laptop-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    TablateComponent,
    LaptopDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
