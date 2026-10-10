// Slicing and Combining

// Slice [Start End ]-> Returns new array
// Dose not mutate original array -> start, end -1 index start from 0
// if end is not given then it will take last index
// Take from start to end
// Always it go right side

let fruits = ["watermelon", "muskmelon", "apple", "cherry", "banana"];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(1));
console.log(fruits.slice());
console.log(fruits.slice(-3, -5));

