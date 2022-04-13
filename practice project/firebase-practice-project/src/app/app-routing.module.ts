import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/user/about/about.component';
import { ContactComponent } from './modules/user/contact/contact.component';
import { HomeComponent } from './modules/user/home/home.component';
import { PageNotFoundComponent } from './modules/user/page-not-found/page-not-found.component';
import { ProductsComponent } from './modules/user/products/products.component';
import { RegitserComponent } from './modules/user/register/register.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/');

const routes: Routes = [
  {
    path: '',
    redirectTo : 'register',
    pathMatch : 'full',
  },
  {
    path: 'register',
    component : RegitserComponent,
  },
  {
    path: 'home',
    component : HomeComponent,
  },
  {
    path: 'about',
    component : AboutComponent,
  },
  {
    path: 'contact',
    component : ContactComponent,
    data: {
      authOnly: true,
      authGuardPipe : redirectUnauthorizedToHome
    },
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'products',
    component : ProductsComponent,
    data: {
      authOnly: true,
      authGuardPipe : redirectUnauthorizedToHome
    },
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
