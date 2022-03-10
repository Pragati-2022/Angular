# Ways of Data Binding or component to view(DOM) pass data

One-way and two-way data binding are two of the important ways by which we can exchange data from component to DOM and vice-versa. Data exchange between the component and the view will help us to build dynamic and interactive web applications.

## One-way Data Binding

One-way data binding will bind the data from the component to the view (DOM) or from view to the component. One-way data binding is unidirectional. You can only bind the data from component to the view or from view to the component.

Below are some of the techniques, which uses one-way data binding.

1. Interpolation Binding: Interpolation refers to binding expressions into marked up language.
2. Property Binding: Property binding is used to set a property of a view element. The binding sets the property to the value of a template expression.
3. Style Binding: Style binding is used to set a style of a view element.
4. Event Binding: Event binding isused to bind data from view to component.


import { Component } from "@angular/core";
@Component({
  selector: 'app-example',
  template: `
              <div>
              <!-- Interpolation Binding -->
              <strong>{{firstName}}</strong>
              <!-- Property Binding -->
              <span [innerHTML]='firstName'></span>
              <!-- Style Binding -->
              <h1 [style.color]="blue">This is a Blue Heading</h1>
              </div>
              <!-- Event Binding -->
              <button (click)="myFunction()">Show alert</button>

              `
})

export class AppComponent {
  firstName: string = "Pragati";
  myFunction(): void { 
       alert('Show alert!'); 
   } 
}

## Two-way Data Binding
Two-way data binding in Angular will help users to exchange data from the component to view and from view to the component. It will help users to establish communication bi-directionally.

Before using ngModel to achieve two-way data binding, it’s very important to import the FormsModule from @angular/forms in app.module.ts file as shown below. FormsModule will contain the ngModule directive.

import { Component } from '@angular/core'; 
 @Component({ 
   selector: 'app-example', 
   template: ` 
               Enter the value  : <input [(ngModel)] ='val'> 
               <br> 
                Entered value is:  {{val}} 
             ` 
}) 
export class AppComponent { 
   val: string = ''; 
}
