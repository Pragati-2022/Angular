import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNotesComponent } from './notes/list-notes/add-notes/add-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListNotesComponent } from './notes/list-notes/list-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNotesComponent,
    ListNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
