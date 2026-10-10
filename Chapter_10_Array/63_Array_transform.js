// When ever we want to transform the array of the same size we use array.map function
let Score = [36, 47, 89, 92, 89];
let Grades = Score.map(S => S > 70 ? "Pass" : "Fail");
console.log(Grades);

// Filter - when ever we want to filter the array based on some condition
let passing = Score.filter(S => S > 70);
console.log(passing);

// Reduce - when ever we want to reduce the array to a single value
let total = Score.reduce((sum,S)=> sum + S, 0);
console.log(total);
