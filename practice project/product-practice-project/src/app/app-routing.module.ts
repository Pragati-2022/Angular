  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { AboutComponent } from './modules/product/about/about.component';
  import { AddProductComponent } from './modules/product/add-product/add-product.component';
  import { HomeComponent } from './modules/product/home/home.component';
  import { LoginComponent } from './modules/product/login/login.component';
  import { PageNotFoundComponent } from './modules/product/page-not-found/page-not-found.component';
  import { RegisterComponent } from './modules/product/register/register.component';
  import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { ShowProductComponent } from './modules/product/add-product/show-product/show-product.component';
import { ShowIndividualProductComponent } from './modules/product/add-product/show-product/show-individual-product/show-individual-product.component';
import { RoleGuard } from './core/guard/role.guard';

  const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/');
  const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
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
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'add-product',
      component : AddProductComponent,
      data : {
        authOnly : true,
        authGuardPipe : redirectUnauthorizedToHome
      },
      canActivate: [AngularFireAuthGuard, RoleGuard]
    },
    {
      path: 'show-product',
      component : ShowProductComponent,
      data : {
        authOnly : true,
        authGuardPipe : redirectUnauthorizedToHome
      },
      canActivate: [AngularFireAuthGuard, RoleGuard]
    },
    {
      path: 'show-product/:id',
      component : ShowIndividualProductComponent,
      data : {
        authOnly : true,
        authGuardPipe : redirectUnauthorizedToHome
      },
      canActivate: [AngularFireAuthGuard, RoleGuard]
     },
      
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
