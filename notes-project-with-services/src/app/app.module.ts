import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteMainComponent } from './note/note-main/note-main.component';
import { NoteModule } from './note/note.module';

@NgModule({
  declarations: [
    AppComponent,
    NoteMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
