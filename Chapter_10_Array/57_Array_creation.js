// Array literal (perffered way)

let broswer = ['chrome', 'edge', 'safari'];

// Array Constructor
let score = new Array(1, 2, 3, 4, 5);
console.log(score);

let emptyArray = new Array();
console.log(emptyArray);

// if array is created with one element, it will be treated as value
let arraywithOneElement = new Array(10);
console.log(arraywithOneElement);

// Array.of() - creates array of given elements
let arrayOfElements = Array.of(1, 2, 3, 4, 5);
console.log(arrayOfElements);

// Array.from() - creates array from array-like or iterable object
let arrayLikeObject = { 0: 1, 1: 2, 2: 3, length: 3 };
let arrayFromObject = Array.from(arrayLikeObject);
console.log(arrayFromObject);

let iterableObject = "hello";
let arrayFromIterable = Array.from(iterableObject);
console.log(arrayFromIterable);

// Array.from() with map function
let arrayFromWithMap = Array.from({ length: 5 }, (value, index) => index + 1);
console.log(arrayFromWithMap);
