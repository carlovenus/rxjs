// An operator is a pure function which takes in observable as input and the output is also an observable.

import { of } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators';

let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let case1 = test1.pipe(
    filter(x => x % 2 === 0),
    reduce((acc, one) => acc + one, 0)
)
case1.subscribe(x => console.log(x)); // 2 + 4 + 6 + 8 + 10 = 30

// Categories of operators

// - Creation
// - Mathematical
// - Join
// - Transformation
// - Filtering
// - Utility
// - Conditional
// - Multicasting
// - Error handling

// Example of usages

// let [varName] = operator(String | Array | Object | Number | Boolean).subscribe(function)
// let [varName] = pipe(listOfOperators.subscribe(function).subscribe(function)

