let fruit = []
let broswer = ['chrome', 'firefox', 'edge', 'webkit']
console.log(broswer[0]);
// for -ve indexaation use at
// if we use -1 in [] it will return undefined
// if we use at(-1) it will return last element
console.log(broswer.at(-1));
console.log(broswer.at(0));

// to add an element at last index we use push()
broswer.push('safari');
console.log(broswer);

// to remove an element from last index we use pop()
browser.pop();
console.log(broswer);

// to add an element at start index we use unshift()
browser.unshift('safari');
console.log(broswer);

// to remove an element from start index we use shift()
browser.shift();
console.log(broswer);

// to remove, insert in middle we use splice()
// syntax: splice(index, deleteCount, item1, item2, ...)

// to sort 
// to reverse

