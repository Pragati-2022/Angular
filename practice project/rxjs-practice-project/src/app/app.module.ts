import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerOpratorComponent } from './timer-oprator.component';
import { FromEventPracticeComponent } from './module/from-event-practice/from-event-practice.component';
import { IntervalComponent } from './module/interval-practice/interval/interval.component';
import { OfFromComponent } from './module/of-from-oprators-practice/of-from/of-from.component';
import { ToArrayComponent } from './module/toArray-operator-practice/to-array/to-array.component';
import { TakeComponent } from './module/take-operator-practice/take/take.component';
import { MapComponent } from './module/map-operator-practice/map/map.component';
import { PluckComponent } from './module/pluck-operator-practice/pluck/pluck.component';
import { SwitchAllComponent } from './module/switch-all/switch-all.component';
import { SwitchMapComponent } from './module/switch-map-practice/switch-map/switch-map.component';
import { FormsModule } from '@angular/forms';
import { DebounceTimeComponent } from './module/debounce-time-practice/debounce-time/debounce-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerOpratorComponent,
    FromEventPracticeComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    TakeComponent,
    MapComponent,
    PluckComponent,
    SwitchAllComponent,
    SwitchMapComponent,
    DebounceTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
