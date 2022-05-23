import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './list-product/add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowProductByCategoryComponent } from './list-product/show-product-by-category/show-product-by-category.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListProductComponent,
    AddProductComponent,
    ShowProductByCategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
