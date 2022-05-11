import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayListComponent } from './modules/holiday/holiday-list/holiday-list.component';

const routes: Routes = [
  // { path: "", redirectTo: "holiday", pathMatch: "full" },
  {
    path: 'holiday',
    component : HolidayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
