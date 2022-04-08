import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { LaptopDetailsComponent } from './modules/products/laptop/laptop-details/laptop-details.component';
import { LaptopComponent } from './modules/products/laptop/laptop.component';
import { MobileComponent } from './modules/products/mobile/mobile.component';
import { ProductsComponent } from './modules/products/products.component';
import { TablateComponent } from './modules/products/tablate/tablate.component';
import { TvComponent } from './modules/products/tv/tv.component';

const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: 'home',component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login',component: LoginComponent},
  { path: 'contact',component: ContactComponent},
  {
    path: 'product',
    component: ProductsComponent,
    children : [
      {path: 'laptop', component: LaptopComponent},
      {path: 'laptop/:id', component: LaptopDetailsComponent},
      {path: 'mobile', component: MobileComponent},
      {path: 'tv', component: TvComponent},
      {path: 'tablate', component: TablateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
