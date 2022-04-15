import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './modules/shared/nav/nav.component';
import { RegitserComponent } from './modules/user/register/register.component';
import { HomeComponent } from './modules/user/home/home.component';
import { AboutComponent } from './modules/user/about/about.component';
import { ProductsComponent } from './modules/user/products/products.component';
import { ContactComponent } from './modules/user/contact/contact.component';
import { PageNotFoundComponent } from './modules/user/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegitserComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
