import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuccessComponent } from './success/success.component';
import { DangerComponent } from './danger/danger.component';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations: [SuccessComponent, WarningComponent, DangerComponent],
  imports: [BrowserModule],
  exports: [SuccessComponent, WarningComponent, DangerComponent],
})
export class TestModule {}
