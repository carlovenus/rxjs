import { of } from 'rxjs';
import { count } from 'rxjs/operators';

let all_nums = of(1, 7, 5, 10, 10, 20);
let final_val = all_nums.pipe(count());
final_val.subscribe(x => console.log("The count is "+x));


let all_nums_2 = of(1, 7, 5, 10, 10, 20);
let final_val_2 = all_nums_2.pipe(count());
let test = final_val_2.subscribe(x => console.log("The count is "+x));
test.unsubscribe();

