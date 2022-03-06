# Pipe

## Transforming Data Using Pipes

Use pipes to transform strings, currency amounts, dates, and other data for display. Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application, while only declaring each pipe once. For example, you would use a pipe to show a date as April 15, 1988 rather than the raw string format.

DatePipe: Formats a date value according to locale rules.
UpperCasePipe: Transforms text to all upper case.
LowerCasePipe: Transforms text to all lower case.
CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.
DecimalPipe: Transforms a number into a string with a decimal point, formatted according to locale rules.
PercentPipe: Transforms a number to a percentage string, formatted according to locale rules.

Ex. <p>The hero's birthday is {{ birthday | date }}</p>

or 
<p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>

## Custom Pipes

Format :

import { Pipe, PipeTransform } from '@angular/core';  
@Pipe({name: 'Pipename'}) 

export class Pipeclass implements PipeTransform { 
   transform(parameters): returntype { } 
} 

Where,

'Pipename' − This is the name of the pipe.

Pipeclass − This is name of the class assigned to the custom pipe.

Transform − This is the function to work with the pipe.

Parameters − This are the parameters which are passed to the pipe.

Returntype − This is the return type of the pipe.



import { 
   Pipe, 
   PipeTransform 
} from '@angular/core';  

@Pipe ({ 
   name: 'Multiplier' 
}) 

export class MultiplierPipe implements PipeTransform { 
   transform(value: number, multiply: string): number { 
      let mul = parseFloat(multiply); 
      return mul * value 
   } 
} 
Following points need to be noted about the above code.

We are first importing the Pipe and PipeTransform modules.

Then, we are creating a Pipe with the name 'Multiplier'.

Creating a class called MultiplierPipe that implements the PipeTransform module.

The transform function will then take in the value and multiple parameter and output the multiplication of both numbers.
