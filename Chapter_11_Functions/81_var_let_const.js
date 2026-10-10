// Var Allow you to redeclaration.
// let won't allow you yo redeclaration.
// const won't allow you yo redeclaration.

var a = 10;
var a = 20;
console.log(a);

let b = 10;
// let b = 20;
console.log(b);

const c = 10;
// const c = 20;
console.log(c);


var x = 10;
if(x>5){
    var x = 50; 
    console.log("Inside IF block: ", x);
}
console.log("Outside IF block: ", x);


let y = 10;
if(y>5){
    let y = 50; 
    console.log("Inside IF block: ", y);
}
console.log("Outside IF block: ", y);

const z = 10;
if(z>5){
    const z = 50; 
    console.log("Inside IF block: ", z);
}
console.log("Outside IF block: ", z);


var i = 1;
function testVar() {
  if (true) {
    var i = 2;
    console.log("var inside if:", i); // 2
  }
  console.log("var outside if:", i); // 2
}
testVar();


let j = 1;
function testLet() {
  if (true) {
    let j = 2;
    console.log("let inside if:", j); // 2
  }
  console.log("let outside if:", j); // 1 (blocked)
}
testLet();


const k = 1;
function testConst() {
  if (true) {
    const k = 2;
    console.log("const inside if:", k); // 2
  }
  console.log("const outside if:", k); // 1 (blocked)
}
testConst();


// Re-assigning
var l = 1;
l = 10;      // Allowed
console.log("var re-assign:", l); // 10

let m = 1;
m = 10;      // Allowed
console.log("let re-assign:", m); // 10

const n = 1;
// n = 10;   // ERROR: Assignment to constant variable



// Hoisting
console.log("var hoisted:", p); // undefined
var p = 10;

// console.log("let hoisted:", q); // ReferenceError (not hoisted)
let q = 10;

// console.log("const hoisted:", r); // ReferenceError (not hoisted)
const r = 10;

