import { NgModule } from "@angular/core";
import { Demo1Component } from "./demo1/demo1.component";
import { CommonModule } from "@angular/common";
import { Demo2Component } from "./demo2/demo2.component";
import { Demo3Component } from "./demo3/demo3.component";
import { Demo4Component } from "./demo4/demo4.component";
import { Demo5Component } from "./demo5/demo5.component";
import { Demo6Component } from "./demo6/demo6.component";
import { AttributeDemoComponent } from "./directive-demo/attribute-directive/attribute-demo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StructuralDemoComponent } from './directive-demo/structural-directive/structural-demo.component';
import { ToggleComponent } from "./memory-leak-demo/toggle-component/toggle.component";
import { ClockComponent } from "./memory-leak-demo/toggle-component/clock/clock.component";
import { ContactFormComponent } from "./template-driven-form-demo/contact-form/contact-form.component";
import { RegistrationFormComponent } from "./reactive-form-demo/registration-form/registration-form.component";
import { ToDoListModule } from "./to do list demo/to-do-list.module";
import { BankDetailsModule } from './decorators-demo/bank-details/bank-details.module';
import { ApiCallComponent } from './api-call-demo/api-call/api-call.component'

@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    AttributeDemoComponent,
    StructuralDemoComponent,
    ToggleComponent,
    ClockComponent,
    ContactFormComponent,
    RegistrationFormComponent,
    ApiCallComponent,
    ApiCallComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ToDoListModule, BankDetailsModule],
  exports: [
    ToDoListModule,
    BankDetailsModule,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    AttributeDemoComponent,
    StructuralDemoComponent,
    ToggleComponent,
    ClockComponent,
    ContactFormComponent,
    RegistrationFormComponent,
    ApiCallComponent
  ],
})
export class DemoModule {}
