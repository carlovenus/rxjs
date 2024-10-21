// An observable in JavaScript is a pattern used to represent and handle asynchronous streams of data. It allows you to model events, values, or other data that happen over time, and enables reactive programming techniques where you can observe and react to data changes or events as they occur.
//
//     The concept of observables is most commonly associated with RxJS (Reactive Extensions for JavaScript), a popular library that implements the observable pattern. Observables are similar to Promises, but they offer more flexibility, as they can handle multiple values over time, whereas promises can only resolve or reject once.
//
//     Key Concepts of Observables:
//     Observable: Represents a source of data that can emit values over time (e.g., user input, HTTP requests, etc.).
// Observer: An object that subscribes to an observable to receive data. It defines how to handle:
//     Next: The next value in the stream.
//     Error: If something goes wrong.
//     Complete: When the observable stream completes.
//     Subscription: The process of observing an observable by "subscribing" to it. Once subscribed, the observable starts emitting data to the observer.

// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';
//
// map(x => x * x)(of(1, 2, 3))
//     .subscribe((v) => console.log(`Output is: ${v}`));


//
//
// Key Features of Observables:
//     Multiple Emissions: Unlike promises, observables can emit multiple values over time. You can think of them as asynchronous event streams.
//     Lazy Execution: Observables are lazy, meaning they don’t start emitting values until there’s at least one active subscription (i.e., until an observer subscribes).
// Cancellation: You can cancel (or unsubscribe from) an observable stream, which stops it from emitting any further values. This is useful for cleaning up resources like network requests or event listeners.
//     Use Cases:
//     Event handling: Observables are commonly used for handling DOM events, such as mouse clicks or keyboard input.
//     HTTP Requests: You can model network requests with observables, especially when you need to handle responses over time or retry them if needed.
//     Streams of Data: Observables can handle continuous streams of data, such as WebSocket connections, where data keeps arriving over time.
//     Reactive UI: Observables are a core part of reactive programming paradigms like ReactiveX and are often used in frameworks such as Angular for building responsive, event-driven applications.
//


// Observable vs Promise:
//     Feature	    Observable	                                     Promise
//     Emission	    Emits multiple values over time	                 Emits a single value (or error) once
//     Laziness	    Does not start until subscribed	                 Executes immediately when created
//     Cancelation	Can be unsubscribed	                             Cannot be canceled
//     Operators	Has powerful operators like map, filter, etc.    Limited chaining with then, catch



// An observable is a function that creates an observer and attaches it to the source
// where values are expected from, for example, clicks, mouse events from a dom element or an Http request, etc.
// Observer is an object with callback functions, that will get called when there is interaction to the Observable,
// i.e., the source has interacted for an example button click, Http request, etc.

import { Observable } from 'rxjs';

const observer = new Observable(
    function subscribe(subscriber) {
        subscriber.next("My First Observable")
    }
);

observer.subscribe(x => console.log(x)); // When the observer is subscribed, it will start the execution of the Observable.

//
// Execute Observable
// An observable gets executed when it is subscribed. An observer is an object with three methods that are notified,
// next() − This method will send values like a number, string, object etc.
// complete() − This method will not send any value and indicates the observable as completed.
// error() − This method will send the error if any.


const observer2 = new Observable(
    function subscribe(subscriber) {
        try {
            subscriber.next("My Second Observable");
            subscriber.next("Testing Observable");
            subscriber.complete();
        } catch(e){
            subscriber.error(e);
        }
    }
);
observer2.subscribe(
    x => console.log(x),
    (e)=>console.log(e),
    ()=>console.log("Observable is complete")
);