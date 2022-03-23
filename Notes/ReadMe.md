### phone number validation with nqx-mask

npm install ngx-mask

#### Arrow function

(param1, param2, ..., paramN) => expression

let sum = (x: number, y: number): number => {
    return x + y;
}

let fun = () => console.log('thia is arrow function')


#### Anonymous function

// Anonymous function
let myAdd = function(x, y) { return x + y; };

// You can call it like this
console.log(myAdd(5,10));

// But definitely more common
console.log ((function(x , y) {
  return x + y;
})(5,10));

setTimeout(function() {
  alert('hello');
}, 1000);
Or call it with parameter:

(function(message) {
  alert(message);
}('foo'));


#### service

A reusable Angular service is designed to encapsulate business logic and data with different components of Angular. It is basically a class that has a well-defined purpose to do something. You can create a service class for data or logic that is not associated with any specific view to share across components.

-> Why Services Are Needed
If you write all the business logic in components, you will have the following problems:

You will not be able to reuse that logic anywhere else and you will have to re-code the entire logic in the target component.
Your components will become hard to maintain as you will have to maintain two copies of the same code.
So, if you wrap your business logic in a reusable Angular service, you will not only keep your components clean but also get the benefits of reusability and maintainability.

-> encapsulate : By definition, encapsulation describes the idea of bundling data and methods that work on that data within one unit, like a class in Java.

-> services in Angular let you define code or functionalities that are then accessible and reusable in many other components in your Angular project. Services help you with the abstraction of logic and data that is hosted independently but can be shared across other components.


#### Pipe

They are a simple way to transform values in an Angular template.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prependName',
})
export class PrependNamePipe implements PipeTransform {
  transform(gender?: any): any {
    if (gender.toLowerCase() == 'm' || gender.toLowerCase() == 'male')
      return 'Mr.';
    else if (gender.toLowerCase() == 'f' || gender.toLowerCase() == 'female')
      return 'Ms.';
    else return '-';
  }
}


#### Directives

Directives are classes that add additional behavior to elements in your Angular applications.

The different types of Angular directives are as follows:

1. Attribute directives—directives that change the appearance or behavior of an element, component, or another directive.
2. Structural directives—directives that change the DOM layout by adding and removing DOM elements.
    -> The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

1. attribute directives

Attribute directives listen to and modify the behavior of other HTML elements, attributes, properties, and components.

NgClass—adds and removes a set of CSS classes.
NgStyle—adds and removes a set of HTML styles.

2. structural directives

Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, and manipulating the host elements to which they are attached.

NgIf—conditionally creates or disposes of subviews from the template.
NgFor—repeat a node for each item in a list.
NgSwitch—a set of directives that switch among alternative views.


#### Property binding

Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.


#### event binding

Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.


#### Reactive form

Model-Driven Form (Reactive Form).
It is suitable for complex scenarios.
big form and more validation , at that time we prefer this.

Reactive forms are forms where we define the structure of the form in the component class. I,e we create the form model with Form Groups, Form Controls, and Form Arrays. We also define the validation rules in the component class. Then, we bind it to the HTML form in the template.

Reactive forms include a set of validator functions for common use cases. These functions receive a control to validate against and return an error object or a null value based on the validation check. Import the Validators class from the @angular/forms package.


#### Decorator

It is a function, using which we attach metadat to a class, method, accessar, property, or parameter.
It is function for extending business logic or adding metadata.



#### for loop example

-> for loop : string , array
-> forEach : array
-> for in : array object
-> for of :  string , array

const numbers = [45, 4, 9, 16, 25];
    const numberObj = { 1: 20, 2: 39, 3: 56 };
    const name = 'pragati';
    let txt = '';
    // for (let i in numbers) {
    //   txt += numbers[i];
    // }

    // for (let j in numberObj) {
    //   txt += numberObj[j];
    // }

    // for (let i of numbers) {
    //   txt += i;
    // }

    // for (let i of name) {
    //   txt += i;
    // }

    // let i = 0;
    // for (; i < 5; ) {
    //   txt += numbers[i];
    //   i++;
    // }

    // for (let i = 0; i < numbers.length; i++) {
    //   txt += numbers[i];
    // }

    // for (let i = 0; i < name.length; i++) {
    //   txt += name[i];
    // }

    // numbers.forEach(function (number) {
    //   txt += number;
    // });

    console.log(txt);

var employee = new Object();
var books = new Array("C++", "Perl", "Java");