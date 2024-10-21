// A scheduler controls the execution of when the subscription has to start and notified.

import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

let observable = new Observable(function subscribe(subscriber) {
    subscriber.next("My First Observable");
    subscriber.next("Testing Observable");
    subscriber.complete();
}).pipe(
    observeOn(asyncScheduler)
);
console.log("Observable Created");
observable.subscribe(
    x => console.log(x),
    (e)=>console.log(e),
    ()=>console.log("Observable is complete")
);

console.log('Observable Subscribed');

// with scheduler:
// Observable Created
// Observable Subscribed
// My First Observable
// Testing Observable
// Observable is complete

// without scheduler:
// Observable Created
// My First Observable
// Testing Observable
// Observable is complete
// Observable Subscribed


