# Inputs/Outputs
@Component({
   selector: 'parent',
   template: '
      <div>
         <child [dataArray]="parentArray"></child>
      </div>
   '
})
export class ParentComponent {
   parentArray: number[];
}
@Component({
   selector: 'child',
   templateUrl: './child.component.html'
})
export class ChildComponent {
   @Input() dataArray;
}
Angular inputs/outputs should be considered when the desire is to share data between child and parent. For example, if there is data in the parent that the child component needs to display, you should create an input on the child component so the parent can pass data through. As seen above, the parent is passing through the variable “parentArray” into the child, making it usable by the child component.

In the case that there is data in the child that the parent needs to use, then an Angular output can be used.

@Component({
   selector: 'parent',
   template: '
      <div>
         <child (childArray)="saveArray($event)"></child>
      </div>
   '
})
export class ParentComponent {
   childArray: number[];
   saveArray(array: number[]) {
      this.childArray = array;
   }
}
@Component({
   selector: 'child',
   templateUrl: './child.component.html'
})
export class ChildComponent {
   @Output() event: EventEmitter<any> = new EventEmitter();
   sendArray(array: number[]) {
      this.event.emit(array);
   }
}
When an Angular output is combined with an Event Emitter, the child component can send an array to the parent. This array is passed into the parent function saveArray() where it is then saved to its own variable. Angular inputs/outputs are great for sending data, but they are not intended to be used when trying to access a child’s properties and methods – that is what the ViewChild/ViewChildren property decorator is for.


# ViewChild/ViewChildren

@Component({
  selector: 'parent',
  template: `
    <div>
      <child #childSelector></child>
    </div>
  `
})
export class ParentComponent implements AfterViewInit {
   @ViewChild('childSelector', { static: false }) childComponent: ChildComponent
   ngAfterViewInit() {
      childComponent.foo();
   }
}
@Component({
   selector: 'child',
   templateUrl: './child.component.html'
})
export class ChildComponent {
   foo() {
      // Do Something
   }
}
ViewChild is a property decorator that selects a child component within the parent component’s template. As seen in the example above, the parent component uses the @ViewChild property decorator in order to select the child component (using the selector ‘#childSelector’) from it’s template. Once the child component is selected, it can call any of the child’s public methods. In this case, the parent component is calling the foo() method directly. Its important to point out that the parameter { static: false } used inside the decorator is a required parameter as of Angular 9. This parameter, if true, allows the child component to be selected during NgOnInit().