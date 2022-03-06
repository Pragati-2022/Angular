# lifecycle hooks

Angular gives us 8 hooks to allow us to tap into the lifecycle of our components and trigger actions at specific points in the lifecycle.

1. ngOnChanges
2. ngOnInit
3. ngDoCheck
4. ngAfterContentInit
5. ngAfterContentChecked
6. ngAfterViewInit
7. ngAfterViewChecked
8. ngOnDestroy

ngOnChanges
ngOnChanges triggers following the modification of @Input bound class members. Data bound by the @Input() decorator come from an external source. When the external source alters that data in a detectable manner, it passes through the @Input property again.

With this update, ngOnChanges immediately fires. It also fires upon initialization of input data. The hook receives one optional parameter of type SimpleChanges. This value contains information on the changed input-bound properties.

Summary: ParentComponent binds input data to the ChildComponent. The component receives this data through its @Input property. ngOnChanges fires. After five seconds, the setTimeout callback triggers. ParentComponent mutates the data source of ChildComponent’s input-bound property. The new data flows through the input property. ngOnChanges fires yet again.

ngOnInit
ngOnInit fires once upon initialization of a component’s input-bound (@Input) properties. The next example will look similar to the last one. The hook does not fire as ChildComponent receives the input data. Rather, it fires right after the data renders to the ChildComponent template.

Summary: ParentComponent binds input data to the ChildComponent. ChildComponent receives this data through its @Input property. The data renders to the template. ngOnInit fires. After five seconds, the setTimeout callback triggers. ParentComponent mutates the data source of ChildComponent’s input-bound property. ngOnInit DOES NOT FIRE.

ngOnInit is a one-and-done hook. Initialization is its only concern.

ngDoCheck
ngDoCheck fires with every change detection cycle. Angular runs change detection frequently. Performing any action will cause it to cycle. ngDoCheck fires with these cycles. Use it with caution. It can create performance issues when implemented incorrectly. ngDoCheck lets developers check their data manually. 

ngAfterContentInit
Invoked after Angular performs any content projection into the component’s view (see the previous lecture on Content Projection for more info).

ngAfterContentChecked
Invoked each time the content of the given component has been checked by the change detection mechanism of Angular.

ngAfterViewInit
Invoked when the component’s view has been fully initialized.

ngAfterViewChecked
Invoked each time the view of the given component has been checked by the change detection mechanism of Angular.

ngOnDestroy
ngOnDestroy fires upon a component’s removal from the view and subsequent DOM. This hook provides a chance to clean up any loose ends before a component’s deletion.