import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegitserComponent } from './user/regitser/regitser.component';

const routes: Routes = [
  {
    path: '',
    component: RegitserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
