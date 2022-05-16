import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './modules/orders/list-orders/list-orders.component';
import { CreateProductComponent } from './modules/products/create-product/create-product.component';
import { UpdateProductComponent } from './modules/products/update-product/update-product.component';
import { ViewAllProductComponent } from './modules/products/view-all-product/view-all-product.component';
import { ViewProductComponent } from './modules/products/view-product/view-product.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path : 'orders',
    component : ListOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
