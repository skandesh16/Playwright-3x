# JavaScript Arrays — Complete Reference

## 1. What Are Arrays?

**Arrays** are ordered collections of values stored in a single variable. Instead of creating separate variables for each value, arrays let you group related data together.

```
Without Arrays:                     With Arrays:
┌─────────────────────────┐        ┌─────────────────────────────────┐
│ let b1 = 'chrome';      │        │ let browsers =                  │
│ let b2 = 'firefox';     │        │   ['chrome','firefox','edge'];  │
│ let b3 = 'edge';        │        │                                 │
│ (3 variables!)          │        │ (1 variable!)                   │
└─────────────────────────┘        └─────────────────────────────────┘
```

### Why Learn This?

| Reason | Explanation |
|---|---|
| Group related data | Store multiple values in a single variable |
| Dynamic size | Arrays can grow or shrink at runtime |
| Essential for Playwright | Iterating over locators, handling dropdowns, table rows |
| Built-in methods | JavaScript provides powerful methods to manipulate arrays |
| Interview must-know | Array operations are frequently asked in coding interviews |

---

## 2. Array Characteristics

| Feature | Description |
|---|---|
| **Ordered** | Elements maintain their insertion order |
| **Zero-indexed** | First element is at index `0`, second at `1`, etc. |
| **Dynamic** | Size is not fixed — elements can be added or removed |
| **Heterogeneous** | Can hold mixed data types (`string`, `number`, `boolean`, etc.) |
| **Mutable** | Elements can be changed after creation |
| **Reference type** | Arrays are objects — assigned by reference, not by value |

```
Index:     0          1          2          3
        ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
Value:  │  10  │  │  12  │  │  26  │  │ "Hi" │
        └──────┘  └──────┘  └──────┘  └──────┘
Length: 4
```

---

## 3. Creating Arrays

### Method 1: Array Literal (Preferred ✅)

The most common and recommended way to create arrays:

```js
let fruit = [];                                    // Empty array
let browsers = ['chrome', 'firefox', 'edge'];      // Array with values
```

### Method 2: Array Constructor (`new Array()`)

```js
let score = new Array(1, 2, 3, 4, 5);
console.log(score);          // [1, 2, 3, 4, 5]

let emptyArray = new Array();
console.log(emptyArray);     // []
```

> ⚠️ **Gotcha with single argument:**

```js
let arr = new Array(10);
console.log(arr);            // [ <10 empty items> ]  ← Creates 10 empty slots, NOT [10]!
```

| Constructor Call | Result | Why |
|---|---|---|
| `new Array(1, 2, 3)` | `[1, 2, 3]` | Multiple args → values become elements |
| `new Array(10)` | `[ <10 empty items> ]` | Single number arg → sets the **length**, not a value |
| `new Array()` | `[]` | No args → empty array |

> 💡 This is why **array literals** are preferred — `[10]` always means an array with the value `10`.

### Method 3: `Array.of()` — Creates Array from Arguments

Solves the single-argument ambiguity of `new Array()`:

```js
let arr = Array.of(1, 2, 3, 4, 5);
console.log(arr);            // [1, 2, 3, 4, 5]

let singleElement = Array.of(10);
console.log(singleElement);  // [10]  ← Correctly creates [10], not 10 empty slots!
```

### Method 4: `Array.from()` — Creates Array from Iterable/Array-Like Objects

```js
// From an array-like object (has indexed elements + length)
let arrayLikeObject = { 0: 1, 1: 2, 2: 3, length: 3 };
let fromObject = Array.from(arrayLikeObject);
console.log(fromObject);     // [1, 2, 3]

// From a string (strings are iterable)
let fromString = Array.from("hello");
console.log(fromString);     // ['h', 'e', 'l', 'l', 'o']

// With a map function
let mapped = Array.from({ length: 5 }, (value, index) => index + 1);
console.log(mapped);         // [1, 2, 3, 4, 5]
```

### All Creation Methods at a Glance

| Method | Syntax | Best For |
|---|---|---|
| **Array Literal** ✅ | `[1, 2, 3]` | Everyday use — simple and clear |
| **new Array()** | `new Array(1, 2, 3)` | Rarely needed — watch out for single-arg gotcha |
| **Array.of()** | `Array.of(1, 2, 3)` | When you need single-element arrays safely |
| **Array.from()** | `Array.from(iterable)` | Converting strings, NodeLists, or array-like objects |

---

## 4. Accessing Array Elements

### Bracket Notation `[]`

Access elements using their **zero-based index**:

```js
let statuses = ["Pass", "Fail", "Skip"];

console.log(statuses[0]);    // "Pass"   (first element)
console.log(statuses[1]);    // "Fail"   (second element)
console.log(statuses[2]);    // "Skip"   (third element)
console.log(statuses[3]);    // undefined (out of bounds!)
```

| Index | Value | Note |
|---|---|---|
| `0` | `"Pass"` | First element |
| `1` | `"Fail"` | Second element |
| `2` | `"Skip"` | Last element (length - 1) |
| `3` | `undefined` | ⚠️ No error, just `undefined` |

> ⚠️ Accessing an index beyond the array's length does **NOT** throw an error — it silently returns `undefined`.

### `.at()` Method — Supports Negative Indexing

The `at()` method works like `[]` but also supports **negative indices** to count from the end:

```js
let statuses = ["Pass", "Fail", "Skip"];

console.log(statuses.at(0));     // "Pass"     (same as statuses[0])
console.log(statuses.at(-1));    // "Skip"     (last element)
console.log(statuses.at(-2));    // "Fail"     (second from last)
console.log(statuses.at(-4));    // undefined  (out of bounds)
```

```
Positive Index:    0         1         2
                ┌───────┐ ┌───────┐ ┌───────┐
                │ Pass  │ │ Fail  │ │ Skip  │
                └───────┘ └───────┘ └───────┘
Negative Index:   -3        -2        -1
```

### `[]` vs `.at()` for Negative Indexing

```js
let browsers = ['chrome', 'firefox', 'edge', 'webkit'];

console.log(browsers[-1]);       // undefined  ❌ ([] does NOT support negative indexing)
console.log(browsers.at(-1));    // "webkit"   ✅ (.at() DOES support negative indexing)
```

| Method | Positive Index | Negative Index |
|---|---|---|
| `arr[n]` | ✅ Works | ❌ Returns `undefined` |
| `arr.at(n)` | ✅ Works | ✅ Counts from end |

> 💡 Use `.at(-1)` to get the **last element** of an array — it's cleaner than `arr[arr.length - 1]`.

### `.length` Property

Returns the total number of elements in the array:

```js
let arr = [1, 2, 3, 4];
console.log(arr.length);    // 4
console.log(arr[4]);        // undefined (last valid index is 3)
```

> 💡 **Last valid index** = `arr.length - 1`. Accessing `arr[arr.length]` always returns `undefined`.

---

## 5. Modifying Array Elements

You can change any element by assigning a new value to its index:

```js
let statuses = ["Pass", "Fail", "Skip"];

statuses[1] = "Error";
console.log(statuses);   // ["Pass", "Error", "Skip"]

statuses[0] = "Success";
console.log(statuses);   // ["Success", "Error", "Skip"]
```

> 💡 You can also assign to an index **beyond** the current length — this creates "holes" (sparse array):

```js
let arr = [1, 2, 3];
arr[5] = 99;
console.log(arr);        // [1, 2, 3, <2 empty items>, 99]
console.log(arr.length); // 6
```

---

## 6. Adding & Removing Elements

### Overview — The Big Four Methods

```
                    ← unshift()    Array    push() →
                    ← shift()      Array    pop()  →
                   ┌─────────────────────────────────┐
   START side      │  [elem1, elem2, ..., elemN]     │      END side
                   └─────────────────────────────────┘
```

| Method | Action | Side | Returns |
|---|---|---|---|
| `push()` | **Add** element(s) | End | New length |
| `pop()` | **Remove** element | End | Removed element |
| `unshift()` | **Add** element(s) | Start | New length |
| `shift()` | **Remove** element | Start | Removed element |

### `push()` — Add to End

```js
let arr = [10, 12, 26];
arr.push("Skandesh");
console.log(arr);    // [10, 12, 26, "Skandesh"]
```

### `pop()` — Remove from End

```js
let arr = [10, 12, 26, "Skandesh"];
let removed = arr.pop();
console.log(removed);  // "Skandesh"
console.log(arr);      // [10, 12, 26]
```

### `unshift()` — Add to Start

```js
let arr = [10, 12, 26];
arr.unshift("Sai Aakanksha");
console.log(arr);    // ["Sai Aakanksha", 10, 12, 26]

arr.unshift(0);
console.log(arr);    // [0, "Sai Aakanksha", 10, 12, 26]
```

### `shift()` — Remove from Start

```js
let arr = [0, "Sai Aakanksha", 10, 12, 26];
let removed = arr.shift();
console.log(removed);  // 0
console.log(arr);      // ["Sai Aakanksha", 10, 12, 26]
```

### Execution Trace — Full Example

```js
let arr = [10, 12, 26];
```

| Step | Operation | Array After | Returned Value |
|---|---|---|---|
| 1 | `arr.push("Skandesh")` | `[10, 12, 26, "Skandesh"]` | `4` (new length) |
| 2 | `arr.unshift("Sai Aakanksha")` | `["Sai Aakanksha", 10, 12, 26, "Skandesh"]` | `5` |
| 3 | `arr.unshift(0)` | `[0, "Sai Aakanksha", 10, 12, 26, "Skandesh"]` | `6` |
| 4 | `arr.shift()` | `["Sai Aakanksha", 10, 12, 26, "Skandesh"]` | `0` |

> 💡 **Memory trick:** Methods with **"sh"** (`shift`, `unshift`) operate on the **start**. Methods without (`push`, `pop`) operate on the **end**.

---

## 7. `splice()` — The Swiss Army Knife

`splice()` can **remove**, **insert**, and **replace** elements at any position in the array. It **mutates** the original array.

### Syntax

```js
array.splice(startIndex, deleteCount, item1, item2, ...);
```

| Parameter | Description |
|---|---|
| `startIndex` | Index to start changes at |
| `deleteCount` | Number of elements to remove (0 = remove nothing) |
| `item1, item2, ...` | New elements to insert at `startIndex` (optional) |

### Use Case 1: Remove Elements

```js
let arr = ["Sai Aakanksha", 10, 12, 26, "Skandesh"];

// Remove 1 element at index 2
arr.splice(2, 1);
console.log(arr);    // ["Sai Aakanksha", 10, 26, "Skandesh"]
```

```
Before: ["Sai Aakanksha", 10, 12, 26, "Skandesh"]
                                ↑
                          splice(2, 1) → removes 12

After:  ["Sai Aakanksha", 10, 26, "Skandesh"]
```

### Use Case 2: Insert Elements (Without Removing)

```js
let arr = ["Sai Aakanksha", 10, 26, "Skandesh"];

// Insert "Pavan" at index 2, remove 0 elements
arr.splice(2, 0, "Pavan");
console.log(arr);    // ["Sai Aakanksha", 10, "Pavan", 26, "Skandesh"]
```

```
Before: ["Sai Aakanksha", 10, 26, "Skandesh"]
                              ↑
                        splice(2, 0, "Pavan") → insert here

After:  ["Sai Aakanksha", 10, "Pavan", 26, "Skandesh"]
```

### Use Case 3: Replace Elements

```js
let arr = [10, 20, 30, 40, 50];

// At index 1, remove 2 elements, insert "A" and "B"
arr.splice(1, 2, "A", "B");
console.log(arr);    // [10, "A", "B", 40, 50]
```

### splice() Quick Reference

| Operation | Syntax | Example |
|---|---|---|
| **Remove** | `splice(index, count)` | `arr.splice(2, 1)` — remove 1 at index 2 |
| **Insert** | `splice(index, 0, items...)` | `arr.splice(2, 0, "X")` — insert "X" at index 2 |
| **Replace** | `splice(index, count, items...)` | `arr.splice(1, 2, "A", "B")` — replace 2 with A, B |

> 💡 `splice()` **returns** an array of the **removed** elements. If nothing was removed, it returns an empty array `[]`.

---

## 8. Other Useful Array Methods

| Method | Description | Mutates? | Example |
|---|---|---|---|
| `concat()` | Merge two or more arrays | ❌ No | `[1,2].concat([3,4])` → `[1,2,3,4]` |
| `slice()` | Extract a section (start, end) | ❌ No | `[1,2,3,4].slice(1,3)` → `[2,3]` |
| `indexOf()` | Find first index of a value | ❌ No | `[10,20,30].indexOf(20)` → `1` |
| `includes()` | Check if value exists | ❌ No | `[1,2,3].includes(2)` → `true` |
| `reverse()` | Reverse the array | ✅ Yes | `[1,2,3].reverse()` → `[3,2,1]` |
| `sort()` | Sort the array | ✅ Yes | `[3,1,2].sort()` → `[1,2,3]` |
| `join()` | Join elements into a string | ❌ No | `['a','b','c'].join('-')` → `"a-b-c"` |
| `flat()` | Flatten nested arrays | ❌ No | `[1,[2,[3]]].flat(Infinity)` → `[1,2,3]` |
| `fill()` | Fill with a static value | ✅ Yes | `[1,2,3].fill(0)` → `[0,0,0]` |

### `slice()` vs `splice()` — Don't Confuse Them!

| Feature | `slice()` | `splice()` |
|---|---|---|
| **Purpose** | Extract a copy | Add / Remove / Replace |
| **Mutates original?** | ❌ No (returns new array) | ✅ Yes (modifies in place) |
| **Parameters** | `(start, end)` | `(start, deleteCount, items...)` |
| **Returns** | New sub-array | Array of removed elements |

```js
let arr = [10, 20, 30, 40, 50];

// slice — non-destructive
let sliced = arr.slice(1, 3);
console.log(sliced);  // [20, 30]
console.log(arr);     // [10, 20, 30, 40, 50]  ← unchanged!

// splice — destructive
let spliced = arr.splice(1, 2);
console.log(spliced); // [20, 30]
console.log(arr);     // [10, 40, 50]  ← modified!
```

---

## 9. Iterating Over Arrays

### For Loop

```js
let browsers = ['chrome', 'firefox', 'edge'];
for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
}
```

### For...of Loop (Preferred for values)

```js
for (let browser of browsers) {
    console.log(browser);
}
```

### forEach Method

```js
browsers.forEach((browser, index) => {
    console.log(`${index}: ${browser}`);
});
```

| Method | Access Index? | Access Value? | Break Early? |
|---|---|---|---|
| `for` loop | ✅ Yes | ✅ Yes (`arr[i]`) | ✅ Yes |
| `for...of` | ❌ Not directly | ✅ Yes | ✅ Yes |
| `forEach` | ✅ Yes (2nd param) | ✅ Yes (1st param) | ❌ No |

---

## 10. Common Mistakes & Best Practices

### ❌ Mistake 1: Confusing `new Array(5)` with `[5]`

```js
let a = new Array(5);    // Creates 5 empty slots — NOT [5]!
let b = [5];             // Creates [5] — an array with the value 5
```

### ❌ Mistake 2: Using `[]` for Negative Indexing

```js
let arr = [10, 20, 30];
console.log(arr[-1]);        // undefined ❌
console.log(arr.at(-1));     // 30 ✅
```

### ❌ Mistake 3: Confusing `slice()` and `splice()`

```js
// slice() — does NOT modify original
let copy = arr.slice(1, 3);

// splice() — MODIFIES original
arr.splice(1, 2);
```

### ❌ Mistake 4: Forgetting `push()` / `pop()` Modify the Original Array

```js
let arr = [1, 2, 3];
arr.push(4);              // arr is now [1, 2, 3, 4] — mutated!
```

### Best Practices Summary

| Practice | Description |
|---|---|
| Use array literals `[]` | Preferred over `new Array()` — avoids single-arg gotcha |
| Use `.at(-1)` for last element | Cleaner than `arr[arr.length - 1]` |
| Know mutating vs non-mutating | `push/pop/shift/unshift/splice/sort/reverse` mutate; `slice/concat/map/filter` don't |
| Use `for...of` for values | Cleaner syntax when you don't need the index |
| Use `splice()` for middle ops | The only built-in way to insert/remove at arbitrary positions |

---

## 🔥 Top Interview Questions

### Q1: What is an array in JavaScript?
**A:** An array is an ordered, zero-indexed collection of values stored in a single variable. Arrays are dynamic (can grow/shrink), heterogeneous (can hold mixed types), and are reference types (objects).

### Q2: What are the different ways to create an array?
**A:** Four ways: (1) **Array literal** `[1,2,3]` (preferred), (2) **Array constructor** `new Array(1,2,3)`, (3) **Array.of()** `Array.of(1,2,3)`, and (4) **Array.from()** to convert iterables or array-like objects.

### Q3: What happens with `new Array(5)` vs `new Array(1, 2, 3)`?
**A:** `new Array(5)` creates an array with 5 **empty slots** (not the value 5). `new Array(1, 2, 3)` creates `[1, 2, 3]`. This single-argument gotcha is why `Array.of()` or array literals are preferred.

### Q4: What is the difference between `arr[n]` and `arr.at(n)`?
**A:** Both access elements by index, but `at()` supports **negative indexing** — `arr.at(-1)` returns the last element, while `arr[-1]` returns `undefined`.

### Q5: What is the difference between `push()` and `unshift()`?
**A:** `push()` adds element(s) to the **end** of the array. `unshift()` adds element(s) to the **start**. Both return the new array length.

### Q6: What is the difference between `pop()` and `shift()`?
**A:** `pop()` removes the **last** element. `shift()` removes the **first** element. Both return the removed element.

### Q7: How does `splice()` work?
**A:** `splice(startIndex, deleteCount, ...items)` can remove, insert, or replace elements at any position. It **mutates** the original array and returns an array of removed elements. Use `deleteCount = 0` to insert without removing.

### Q8: What is the difference between `slice()` and `splice()`?
**A:** `slice(start, end)` **extracts** a portion and returns a new array — it does NOT modify the original. `splice(start, deleteCount, ...items)` **modifies** the original array by adding/removing elements.

### Q9: How do you check if a value exists in an array?
**A:** Use `arr.includes(value)` which returns `true` or `false`. Alternatively, `arr.indexOf(value)` returns the index or `-1` if not found.

### Q10: What does `Array.from()` do?
**A:** `Array.from()` creates a new array from an iterable (like a string) or an array-like object (like `{ 0: 'a', 1: 'b', length: 2 }`). It also accepts an optional map function as the second argument.

---

## TL;DR

- **Create** → Use `[]` literals (preferred), `new Array()`, `Array.of()`, or `Array.from()`
- **Access** → `arr[0]` for positive index, `arr.at(-1)` for last element
- **Add to end** → `push()` | **Remove from end** → `pop()`
- **Add to start** → `unshift()` | **Remove from start** → `shift()`
- **Middle operations** → `splice(index, deleteCount, ...newItems)`
- **Non-destructive copy** → `slice(start, end)`
- **`slice` vs `splice`** → slice = copy, splice = modify
- **Iterate** → `for`, `for...of`, or `forEach()`
- **Arrays are zero-indexed** → First element at `0`, last at `length - 1`
- **Arrays are mutable** → `push/pop/shift/unshift/splice/sort/reverse` change the original

> **Rule of thumb:** Use `push/pop` for stack-like operations (end), `unshift/shift` for queue-like operations (start), and `splice` for anything in the middle.
