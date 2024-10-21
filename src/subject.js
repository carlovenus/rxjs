// A subject is an observable that can multicast i.e. talk to many observers.

// import { Subject } from 'rxjs';
//
// const subject_test = new Subject();
//
// subject_test.subscribe({
//     next: (v) => console.log(`From Subject : ${v}`)
// });
// subject_test.subscribe({
//     next: (v) => console.log(`From Subject: ${v}`)
// });
// subject_test.next("A");
// subject_test.complete();
// subject_test.next("B");


// What is the Difference between Observable and Subject?
//     An observable will talk one to one, to the subscriber.
//     Anytime you subscribe to the observable the execution will start from scratch.
//     Take an Http call made using ajax, and 2 subscribers calling the observable.
//     You will see 2 HttpHttp requests in the browser network tab.

// Now, here the problem is, we want the same data to be shared, but not, at the cost of 2 Http calls. We want to make one Http call and share the data between subscribers.
//
//     This will be possible using Subjects. It is an observable that can multicast i.e. talk to many observers. It can share the value between subscribers.

// Behaviour Subject
// Behaviour subject will give you the latest value when called.

import { BehaviorSubject } from 'rxjs';
const behavior_subject = new BehaviorSubject("Testing Behaviour Subject");
// 0 is the initial value

behavior_subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
});

behavior_subject.next("Hello");
behavior_subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
});
behavior_subject.next("Last call to Behaviour Subject");

// Print:
// observerA: Testing Behaviour Subject
// observerA: Hello
// observerB: Hello
// observerA: Last call to Behaviour Subject
// observerB: Last call to Behaviour Subject



// Replay Subject
// A replaysubject is similar to behaviour subject, wherein, it can buffer the values and replay the same to the new subscribers.

import { ReplaySubject } from 'rxjs';
const replay_subject = new ReplaySubject(2);
// buffer 2 values but new subscribers

replay_subject.subscribe({
    next: (v) => console.log(`Testing Replay Subject A: ${v}`)
});

replay_subject.next(1);
replay_subject.next(2);
replay_subject.next(3);
replay_subject.subscribe({
    next: (v) => console.log(`Testing Replay Subject B: ${v}`)
});

replay_subject.next(5);

// The buffer value used is 2 on the replay subject. So the last two values will be buffered and used for the new subscribers called.
// Testing Replay Subject A: 1
// Testing Replay Subject A: 2
// Testing Replay Subject A: 3
// Testing Replay Subject B: 2
// Testing Replay Subject B: 3
// Testing Replay Subject A: 5
// Testing Replay Subject B: 5

//AsyncSubject
// In the case of AsyncSubject the last value called is passed to the subscriber and it will be done only after complete() method is called.
import { AsyncSubject } from 'rxjs';

const async_subject = new AsyncSubject();

async_subject.subscribe({
    next: (v) => console.log(`Testing Async Subject A: ${v}`)
});

async_subject.next(1);
async_subject.next(2);
async_subject.complete();
async_subject.subscribe({
    next: (v) => console.log(`Testing Async Subject B: ${v}`)
});

// Here, before complete is called the last value passed to the subject is 2 and the same it given to the subscribers.
// Testing Async Subject A: 2
// Testing Async Subject B: 2


