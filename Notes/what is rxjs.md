# What is RxJS?

The reactive paradigm can be used in many different languages through the use of reactive libraries. These libraries are downloaded APIs that provide functionalities for reactive tools like observers and operators. Reactive Extensions for JavaScript, or RxJS, is a reactive library used to implement reactive programming to deal with async implementation, callbacks, and event-based programs. It can be used in your browser or with Node.js.

RxJS has some core features that help handle async implementation:

### Observable

RxJS observables allow you to publish events. Observables have two methods: subscribe and unsubscribe. You execute an observable by subscribing to it. Observables model a stream of events.

### Observer

An observer is an object with next(), error(), and complete() methods that is called when there’s an interaction with the observable. They are the objects that subscribe to observables.

### Subscription

A subscription to the observable will trigger the observable to execute.

### Operator

An operator is a function that allows us to perform certain actions on events executed by observables.

### Subject

A subject is the same as an EventEmitter. It is an observable that multicasts information to observers.

### Scheduler

A scheduler handles the execution of subscriptions.

The RxJS library is great for handling async tasks. It has a large collection of operators in filtering, error handling, conditional, creation, multicasting, and more. It is supported by JavaScript and TypeScript, and it works well with Angular.