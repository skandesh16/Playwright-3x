let fruits = ["watermelon", "muskmelon", "apple", "cherry", "banana"];
fruits.sort();
console.log(fruits);

// natural Sorting
let score = [27, 35, 18, 9, 32, 27]
score.sort();
console.log(score);

let vnums = [1,2,6, 10, 100];
vnums.sort(); // Natural Sorting (lexicographical sorting)
console.log(vnums);

// Proper sorting Asc | Dsc
vnums.sort((a,b)=>a-b); // Ascending order
console.log(vnums);

vnums.sort((a,b)=>b-a); // Descending order
console.log(vnums);

