let a = 10;
console.log(++a + a + a++);
console.log(a);


// ERT
// Line no || Expression       || a (before) || Value Used || a (after)
// --------||------------------||------------||------------||----------
//   2      || ++a              ||    10      ||    11      ||    11      (Pre-increment: a becomes 11 FIRST, then 11 is used)
//   2      ||  + a             ||    11      ||    11      ||    11      (No increment: just uses current value of a = 11)
//   2      ||  + a++           ||    11      ||    11      ||    12      (Post-increment: uses current value 11 FIRST, then a becomes 12)
//          || Result: 11 + 11 + 11 = 33
//   3      || console.log(a)   ||    12      ||    12      ||    12      (a is now 12 after the post-increment from line 2)

// NOTES:
// ++a  → Pre-Increment  → Increments a BEFORE using it  → a becomes 11, value used = 11
//  a   → No operator     → Just reads a as-is            → value used = 11
// a++  → Post-Increment → Uses a FIRST, then increments → value used = 11, a becomes 12
//
// Final expression: 11 + 11 + 11 = 33
// After the full expression, a = 12 (due to the post-increment)

let i = 1;
let Result = i++ + ++i;
console.log(Result, i);
// ERT
// Line no || Expression       || a (before) || Value Used || a (after)
// --------||------------------||------------||------------||----------
//   2      || i++              ||    1       ||    1       ||    2      (Post-increment: uses current value 1 FIRST, then i becomes 2)
//   2      || + ++i            ||    2       ||    3       ||    3      (Pre-increment: i becomes 3 FIRST, then 3 is used)
//          || Result: 1 + 3 = 4
//   3      || console.log(i)   ||    3       ||    3       ||    3      (i is now 3 after the pre-increment from line 2)

// NOTES:
// i++  → Post-Increment → Uses i FIRST, then increments → value used = 1, i becomes 2
// ++i  → Pre-Increment  → Increments i BEFORE using it  → i becomes 3, value used = 3
//
// Final expression: 1 + 3 = 4
// After the full expression, i = 3 (due to the pre-increment)

let m = 10;
console.log(++m + ++m);
console.log(m);

let n = 34;
let result = n++;
console.log(result);
console.log(n);

let k = 10;
console.log(k++);

let r = 100;
console.log(r++ + ++r + r++ + ++r);

let s = 35
console.log(--s + --s);
console.log(s);

let j = 1;
let sk = j++ > 1 ? j++ : ++j;
console.log(sk, j);






