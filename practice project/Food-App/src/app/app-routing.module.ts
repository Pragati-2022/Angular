import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/user/home/home.component';
import { AddProductComponent } from './modules/user/list-product/add-product/add-product.component';
import { ListProductComponent } from './modules/user/list-product/list-product.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { ShowProductByCategoryComponent } from './modules/user/list-product/show-product-by-category/show-product-by-category.component';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('');

const routes: Routes = [
  {
    path: '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'list-product',
    component: ListProductComponent,
  },
  {
    path: 'list-product/add-product',
    component: AddProductComponent,
    data: {
      authOnly: true,
      authGuardPipe : redirectUnauthorizedToHome
    },
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'list-product/show-product-by-category',
    component: ShowProductByCategoryComponent,
    data: {
      authOnly: true,
      authGuardPipe : redirectUnauthorizedToHome
    },
    canActivate: [AngularFireAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
