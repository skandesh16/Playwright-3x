let a = ["skandesh"];
let b = ["Aakanksha"];
let c = a.concat(b);
console.log(c);

let love = [22];
let month = [11];

let year = [2018];

let LoveYear = love.concat(month, year);
console.log(LoveYear);

// Using Spread Operator ...
let LoveYear1 = [...love, ...month, ...year];
console.log(LoveYear1);
