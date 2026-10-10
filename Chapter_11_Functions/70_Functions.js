// What Is a Function?
// A Function is a resuable block of code that perform specific task.
// Instead of repeating logic, you define it once and call it whenever needed.

// Define/Defination of a Function
// Calling a Function

// Difining is parementer calling is argument

let score1 = 85
let result1 = score1 => 70 ? "Pass" : "Fail"
console.log(result1(score1));

let score2 = 45
let result2 = score2 => 70 ? "Pass" : "Fail"
console.log(result2(score2));

function getResult(Score) {
    return Score >= 70 ? "Pass" : "Fail"
}

console.log(getResult(90));
console.log(getResult(18));

