# JavaScript Loops — Complete Reference

## 1. What Are Loops?

**Loops** are used to execute a block of code **multiple times**. Instead of writing the same code again and again, loops let you repeat it automatically.

```
Without Loops:                     With Loops:
┌─────────────────────┐           ┌─────────────────────┐
│ console.log(1);     │           │ for (i=1; i<=5; i++)│
│ console.log(2);     │           │ {                   │
│ console.log(3);     │           │   console.log(i);   │
│ console.log(4);     │           │ }                   │
│ console.log(5);     │           │                     │
│ (5 lines!)          │           │ (3 lines!)          │
└─────────────────────┘           └─────────────────────┘
```

### Why Learn This?

| Reason | Explanation |
|---|---|
| Reduces code duplication | Write once, run many times |
| Dynamic iteration | Loop count can depend on variables or conditions |
| Essential for Playwright | Iterating over elements, retrying actions, polling |
| Interview must-know | Frequently asked in coding interviews |

---

## 2. Types of Loops

| Loop | When to Use | Keyword |
|---|---|---|
| **For Loop** | When you **know the count** of iterations | `for` |
| **While Loop** | When iteration depends on a **condition**, not a count | `while` |
| **Do-While Loop** | When the code must run **at least once** before checking condition | `do...while` |
| **For...in Loop** | Iterating over **object keys** | `for...in` |
| **For...of Loop** | Iterating over **iterable values** (arrays, strings) | `for...of` |

---

## 3. For Loop (ICU Pattern)

The `for` loop follows the **ICU** pattern:

```
I — Initialization   → Starting point
C — Condition         → When to stop
U — Update            → How to move forward
```

### Syntax

```js
for (initialization; condition; update) {
    // code to repeat
}
```

### Execution Flow

```
┌──────────────────────────────────────────────┐
│  1. Initialization  → Runs ONCE at the start │
│  2. Condition Check  → true? Continue ✅      │
│                       → false? EXIT loop ❌   │
│  3. Execute Body    → Run the code block      │
│  4. Update          → Increment / decrement   │
│  5. Go to Step 2   → Repeat the cycle         │
└──────────────────────────────────────────────┘
```

### Example — Print 1 to 10

```js
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

| Step | `i` | Condition `i <= 10` | Action |
|---|---|---|---|
| Init | 1 | `1 <= 10` → ✅ | Print `1` |
| Update | 2 | `2 <= 10` → ✅ | Print `2` |
| ... | ... | ... | ... |
| Update | 10 | `10 <= 10` → ✅ | Print `10` |
| Update | 11 | `11 <= 10` → ❌ | **Exit loop** |

### Example — Print "Hello World" 10 Times

```js
for (i = 0; i <= 9; i++) {
    console.log("Hello world");
}
```

### Example — Countdown (Decrement)

```js
for (k = 10; k >= 0; k--) {
    console.log(k);
}
```

> 💡 Loops can count **up** (`i++`) or **down** (`k--`). The update expression controls the direction.

### Example — Pre-Increment vs Post-Increment in Loops

```js
// Post-increment (i++) — most common
for (j = 0; j <= 10; j++) {
    console.log(j);
}

// Pre-increment (++j) — same result in for loops
for (j = 0; j <= 10; ++j) {
    console.log(j);
}
```

> 💡 In a `for` loop, `i++` and `++i` produce the **same result** because the update runs as a standalone statement (the return value is ignored).

---

## 4. Pre-Increment vs Post-Increment (Outside Loops)

When used **outside** a loop update, the difference matters:

```js
a = 10;
b = ++a;    // Pre: increment FIRST, then assign
// a = 11, b = 11

c = 20;
d = c++;    // Post: assign FIRST, then increment
// c = 21, d = 20
```

| Type | Expression | Order | Result |
|---|---|---|---|
| **Pre-increment** | `b = ++a` | Increment → Assign | `a` and `b` are both incremented |
| **Post-increment** | `d = c++` | Assign → Increment | `d` gets the OLD value, `c` gets incremented |

---

## 5. For Loop with Conditions Inside

You can combine `for` loops with `if/else` statements:

```js
for (let skandesh = 0; skandesh < 25; skandesh++) {
    if (skandesh >= 21) {
        console.log("Skandesh is learning Automation Testing.");
    } else {
        console.log("Skandesh is too young for the opportunity.");
    }
}
```

> 💡 This prints the "too young" message for ages 0–20, and the "learning" message for ages 21–24.

---

## 6. For Loop Edge Cases — When It Doesn't Run

### Condition False from the Start

```js
let count = 0;
for (let i = 5; i < 5; i++) {
    count++;
}
console.log(count); // 0
```

| Step | `i` | Condition `i < 5` | Action |
|---|---|---|---|
| Init | 5 | `5 < 5` → ❌ | **Skip loop entirely** |

> ⚠️ The loop body **never executes** because the condition is `false` on the very first check. `<` is strict — `5` is NOT less than `5`.

### Negative Condition Trick

```js
for (let tools = 0; tools < -5; tools++) {
    console.log("Playwright");
}
// Nothing prints! 0 < -5 is false
```

> 💡 Always check: is the initial value already past the condition? If yes, the loop runs **zero** iterations.

---

## 7. For Loop — Sum Accumulator Pattern

A common pattern is using a loop to **accumulate** a value:

```js
var sum = 0;
for (var i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum); // 15
```

| Iteration | `i` | `sum += i` | `sum` |
|---|---|---|---|
| 1st | 1 | 0 + 1 | **1** |
| 2nd | 2 | 1 + 2 | **3** |
| 3rd | 3 | 3 + 3 | **6** |
| 4th | 4 | 6 + 4 | **10** |
| 5th | 5 | 10 + 5 | **15** |

> 💡 The formula for sum of 1 to N is: `N × (N+1) / 2`. For N=5: `5 × 6 / 2 = 15` ✅

---

## 8. While Loop

The `while` loop is the **sister of the for loop**. Use it when iteration depends on a **condition**, not a fixed count.

### Syntax

```js
// Initialization (outside the loop)
let i = 0;

while (condition) {
    // code to repeat
    // update (inside the loop)
    i++;
}
```

### Execution Flow

```
┌──────────────────────────────────────────────┐
│  1. Check Condition  → true? Continue ✅      │
│                       → false? EXIT loop ❌   │
│  2. Execute Body    → Run the code block      │
│  3. Update          → Modify the variable     │
│  4. Go to Step 1   → Repeat                   │
└──────────────────────────────────────────────┘
```

### Example — Print 1 to 6

```js
let j = 0;
while (j <= 5) {
    j++;
    console.log(j);  // Prints 1, 2, 3, 4, 5, 6
}
```

### Example — Retry Pattern (Common in Playwright!)

```js
let attempts = 0;
while (attempts < 3) {
    console.log("attempts", attempts);
    attempts++;
}
```

| Iteration | `attempts` | Condition `< 3` | Action |
|---|---|---|---|
| 1st | 0 | ✅ | Print `0`, increment to `1` |
| 2nd | 1 | ✅ | Print `1`, increment to `2` |
| 3rd | 2 | ✅ | Print `2`, increment to `3` |
| 4th | 3 | ❌ | **Exit loop** |

### Example — `while (true)` with `break`

```js
let age = 7;
while (true) {
    if (age > 10) {
        break;
    }
    console.log("Age is less than 10", age);
    age++;
}
```

> 💡 `while (true)` creates an **infinite loop**. You MUST use `break` to exit it, otherwise your program will hang forever!

---

## 9. Do-While Loop

The **big sister of the while loop**. The key difference: the code body runs **at least once**, even if the condition is `false` from the start.

### Syntax

```js
do {
    // code to repeat (runs AT LEAST ONCE)
} while (condition);
```

### Execution Flow

```
┌──────────────────────────────────────────────┐
│  1. Execute Body    → Run the code FIRST ✅   │
│  2. Check Condition  → true? Repeat ✅        │
│                       → false? EXIT loop ❌   │
└──────────────────────────────────────────────┘
```

### Example — Retry with Do-While

```js
let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying......", retry);
    retry++;
} while (retry < 3);
```

| Iteration | `retry` | Body Runs? | Condition `< 3` |
|---|---|---|---|
| 1st | 0 | ✅ Yes (always) | `1 < 3` → ✅ |
| 2nd | 1 | ✅ | `2 < 3` → ✅ |
| 3rd | 2 | ✅ | `3 < 3` → ❌ Exit |

---

## 10. Do-While vs While — The Critical Difference

### When the condition is `false` from the start:

```js
// while — body NEVER runs
let a = 10;
while (a < 10) {
    console.log(a);  // ❌ Never prints
    a++;
}

// do-while — body runs ONCE
let b = 10;
do {
    console.log(b);  // ✅ Prints 10 (once!)
    b++;
} while (b < 10);
```

### Comparison

```
While Loop:                        Do-While Loop:
┌─────────────────────┐           ┌─────────────────────┐
│ Check condition FIRST│           │ Run body FIRST      │
│   ↓                 │           │   ↓                 │
│ condition = false?  │           │ Then check condition │
│   ↓                 │           │   ↓                 │
│ SKIP body entirely  │           │ condition = false?   │
│                     │           │   ↓                 │
│ Output: (nothing)   │           │ EXIT (ran once!) ✅  │
└─────────────────────┘           └─────────────────────┘
```

| Feature | `while` | `do-while` |
|---|---|---|
| Condition check | **Before** body | **After** body |
| Minimum runs | **0** (may never run) | **1** (always runs at least once) |
| Use case | Skip if condition is false | Must execute at least once |
| Semicolon | No `;` after `}` | **Requires `;`** after `while(condition);` |

---

## 11. While Loop with NaN — Edge Case

```js
let n = 0;
while (n < NaN) {
    n++;
}
console.log(n); // 0
```

> ⚠️ **Any comparison with `NaN` returns `false`!** So `0 < NaN` is `false`, and the loop body **never executes**.

| Expression | Result | Why |
|---|---|---|
| `0 < NaN` | `false` | NaN is "Not a Number" — all comparisons with NaN are false |
| `NaN === NaN` | `false` | NaN is not even equal to itself! |
| `NaN > 0` | `false` | — |
| `NaN < 0` | `false` | — |
| `NaN == NaN` | `false` | — |

> 💡 To check if a value is `NaN`, use `isNaN(value)` or `Number.isNaN(value)`.

---

## 12. For Loop vs While Loop — Comparison

```js
// For Loop — all three parts in one line
for (let i = 0; i < 5; i++) {
    console.log("hello world");
}

// While Loop — initialization separate, update inside body
let i = 0;
while (i < 5) {
    console.log("hello world");
    i++;
}
```

| Feature | `for` | `while` |
|---|---|---|
| Structure | ICU in one line | Initialization outside, update inside |
| Best for | **Known count** iterations | **Condition-based** iterations |
| Variable scope | `let i` stays inside loop | `let i` exists outside loop |
| Readability | All loop logic in one place | Logic spread across lines |

### When to Use Which?

```
Known count?          → for loop
  "Print 1 to 100"
  "Repeat 5 times"

Condition-based?      → while loop
  "Keep trying until success"
  "Read until EOF"

Must run at least once? → do-while loop
  "Show menu, then ask again"
  "Execute, then retry if failed"
```

---

## 13. Common Mistakes & Best Practices

### ❌ Mistake 1: Infinite Loop (Missing Update)

```js
// ❌ WRONG — forgot to increment i
let i = 0;
while (i < 5) {
    console.log(i);  // Prints 0 forever! 💀
}

// ✅ CORRECT — always update the loop variable
let i = 0;
while (i < 5) {
    console.log(i);
    i++;  // Don't forget this!
}
```

### ❌ Mistake 2: Off-by-One Error (`<` vs `<=`)

```js
// Runs 4 times (i = 0, 1, 2, 3)
for (let i = 0; i < 4; i++) { ... }

// Runs 5 times (i = 0, 1, 2, 3, 4)
for (let i = 0; i <= 4; i++) { ... }
```

| Condition | Iterations | Values |
|---|---|---|
| `i < 5` (starting at 0) | 5 | 0, 1, 2, 3, 4 |
| `i <= 5` (starting at 0) | 6 | 0, 1, 2, 3, 4, 5 |
| `i < 5` (starting at 1) | 4 | 1, 2, 3, 4 |
| `i <= 5` (starting at 1) | 5 | 1, 2, 3, 4, 5 |

### ❌ Mistake 3: Condition Already False

```js
// ❌ Loop never runs — 5 is NOT less than 5
for (let i = 5; i < 5; i++) { count++; }

// ✅ Use <= to include the boundary value
for (let i = 5; i <= 5; i++) { count++; }  // Runs once
```

### Best Practices Summary

| Practice | Description |
|---|---|
| Always include an update | Prevent infinite loops by ensuring the loop variable changes |
| Use `let` in for loops | Keeps the variable scoped to the loop block |
| Be careful with `<` vs `<=` | Off-by-one errors are the most common loop bug |
| Use `break` to exit early | Useful in `while(true)` patterns |
| Avoid comparing with `NaN` | Any comparison with `NaN` returns `false` |

---

## 🔥 Top Interview Questions

### Q1: What are the types of loops in JavaScript?
**A:** JavaScript has 5 types of loops: `for`, `while`, `do-while`, `for...in` (for object keys), and `for...of` (for iterable values like arrays and strings).

### Q2: What is the difference between `while` and `do-while`?
**A:** A `while` loop checks the condition **before** executing the body — it may run **zero** times. A `do-while` loop executes the body **first**, then checks the condition — it always runs **at least once**.

### Q3: What happens if you use `for (let i = 5; i < 5; i++)`?
**A:** The loop runs **zero** times. The condition `5 < 5` is `false` on the first check, so the body is never executed.

### Q4: What is the difference between `i++` and `++i` in a for loop?
**A:** In a `for` loop's update expression, there is **no difference** — both increment `i` by 1. The difference only matters when the result is used in an assignment: `b = ++a` increments first then assigns, while `d = c++` assigns first then increments.

### Q5: What happens when you compare a value with `NaN`?
**A:** **Any comparison with `NaN` returns `false`**, including `NaN === NaN`. This means `while (n < NaN)` never executes because the condition is always `false`. Use `isNaN()` or `Number.isNaN()` to check for `NaN`.

### Q6: How do you stop an infinite loop?
**A:** Use the `break` statement inside the loop with a conditional check. For example: `while (true) { if (condition) break; }`. In the terminal, press `Ctrl+C` to forcefully kill a stuck program.

### Q7: What is the accumulator pattern?
**A:** The accumulator pattern uses a variable (initialized before the loop) that gets updated in each iteration. Example: `let sum = 0; for (let i = 1; i <= 5; i++) { sum += i; }` — `sum` accumulates the total (1+2+3+4+5 = 15).

### Q8: When should you use `for` vs `while` vs `do-while`?
**A:** Use `for` when you know the exact iteration count. Use `while` when iteration depends on a condition that may be false initially. Use `do-while` when the code must run at least once before checking (e.g., displaying a menu, then asking if the user wants to continue).

---

## TL;DR

- **For Loop** → Use when you **know the count** → `for (init; condition; update) { }`
- **While Loop** → Use for **condition-based** iteration → `while (condition) { }`
- **Do-While Loop** → Runs **at least once** → `do { } while (condition);`
- **ICU** → For loop = **I**nitialization, **C**ondition, **U**pdate
- **`i++` vs `++i`** → Same in for loop update; different in assignments
- **`<` vs `<=`** → Watch out for off-by-one errors!
- **`NaN` comparisons** → Always return `false`
- **`break`** → Exit a loop early; essential for `while(true)` patterns
- **Accumulator pattern** → Initialize before loop, update inside loop

> **Rule of thumb:** If you can count the iterations, use `for`. If you're waiting for a condition, use `while`. If it must run at least once, use `do-while`.
