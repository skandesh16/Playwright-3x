# JavaScript Statements — Complete Reference

## 1. What Are Statements?

A **statement** is an instruction that JavaScript executes to perform an action. Unlike expressions (which produce a value), statements **control the flow** of your program.

```
Expression → produces a value     →  5 + 3  →  8
Statement  → performs an action   →  if (x > 5) { ... }
```

### Types of Statements in JavaScript

| # | Statement Type | Keywords | Purpose |
|---|---|---|---|
| 1 | Conditional | `if`, `else`, `else if` | Execute code based on a condition |
| 2 | Switch | `switch`, `case`, `default` | Select one of many code blocks |
| 3 | Loop | `for`, `while`, `do...while`, `for...in`, `for...of` | Repeat code multiple times |
| 4 | Jump | `break`, `continue`, `return`, `throw` | Alter the flow of execution |
| 5 | Declaration | `let`, `const`, `var` | Declare variables |
| 6 | Try/Catch | `try`, `catch`, `finally` | Handle errors gracefully |

> 💡 This chapter focuses on **Conditional Statements** — the foundation of decision-making in code.

---

## 2. The `if` Statement

The `if` statement executes a block of code **only if** the condition evaluates to `true`.

### Syntax

```
if (condition) {
    // code runs ONLY when condition is true
}
```

### Flow Diagram

```
        ┌──────────────┐
        │  condition?   │
        └──────┬───────┘
               │
        ┌──────┴──────┐
        │             │
      true          false
        │             │
  ┌─────┴─────┐      │
  │ Execute   │      │
  │ code block│      │
  └─────┬─────┘      │
        │             │
        └──────┬──────┘
               │
        ┌──────┴───────┐
        │   Continue    │
        └──────────────┘
```

### Example

```js
let cars = 1200;
if (cars > 1200) {
    console.log("Proper SUV");
}
// Output: nothing (1200 is NOT greater than 1200)
```

> ⚠️ `>` means **strictly greater than**. `1200 > 1200` is `false`. Use `>=` if you want "greater than or equal to".

---

## 3. The `if...else` Statement

Adds an **alternative path** — when the condition is `false`, the `else` block runs instead.

### Syntax

```
if (condition) {
    // runs when condition is TRUE
} else {
    // runs when condition is FALSE
}
```

### Flow Diagram

```
        ┌──────────────┐
        │  condition?   │
        └──────┬───────┘
               │
        ┌──────┴──────┐
        │             │
      true          false
        │             │
  ┌─────┴─────┐  ┌───┴─────┐
  │ if block  │  │ else    │
  │           │  │ block   │
  └─────┬─────┘  └───┬─────┘
        │             │
        └──────┬──────┘
               │
        ┌──────┴───────┐
        │   Continue    │
        └──────────────┘
```

### Example Used

```js
// 31_IQ.js — Basic if/else
let cars = 1200;
if (cars > 1200) {
    console.log("Proper SUV");   // ❌ skipped (1200 is NOT > 1200)
} else {
    console.log("Mini SUV");     // ✅ this runs
}
// Output: Mini SUV
```

### String Comparison Example

```js
let suv = "4 meter long";
if (suv > "4 meter long") {
    console.log("SUV");              // ❌ skipped
} else {
    console.log("Sub 4 meter SUV");  // ✅ this runs
}
// Output: Sub 4 meter SUV
```

> 💡 **String comparison** in JavaScript uses **lexicographic (dictionary) order** based on Unicode values. `"4 meter long" > "4 meter long"` is `false` because they are equal.

### Equality Check Example

```js
let mr_pachipulusu = "had_son";
if (mr_pachipulusu == "had_son") {
    console.log("Balaji");           // ✅ this runs (values match)
} else {
    console.log("Nagavenkatesh");
}
// Output: Balaji
```

---

## 4. Nested `if...else`

You can place an `if...else` **inside another** `if` or `else` block to check multiple levels of conditions.

### Syntax

```
if (condition1) {
    // runs when condition1 is TRUE
    if (condition2) {
        // runs when BOTH condition1 AND condition2 are TRUE
    } else {
        // runs when condition1 is TRUE but condition2 is FALSE
    }
} else {
    // runs when condition1 is FALSE
}
```

### Flow Diagram

```
        ┌────────────────┐
        │  condition1?    │
        └──────┬─────────┘
               │
        ┌──────┴──────┐
        │             │
      true          false
        │             │
  ┌─────┴─────┐  ┌───┴─────┐
  │ if block  │  │ else    │
  │           │  │ block   │
  │  ┌────────┴──┐  │      │
  │  │condition2?│  │      │
  │  └──┬────┬──┘  │      │
  │   true  false  │      │
  │    │     │     │      │
  │  inner inner   │      │
  │   if   else    │      │
  └────┬─────┬─┘  └───┬───┘
       │     │         │
       └─────┴────┬────┘
                  │
           ┌──────┴───────┐
           │   Continue    │
           └──────────────┘
```

### Example Used

```js
// 32_IQ.js — Nested if/else
let car = 600;
if (car > 850) {
    console.log("maruthi alto");       // ❌ skipped (600 is NOT > 850)
    if (car > 1200) {
        console.log("Tata Altroz");    // ❌ skipped (never reached)
    } else {
        console.log("maruthi 1000");   // ❌ skipped (never reached)
    }
} else {
    console.log("BMW");                // ✅ this runs
}
// Output: BMW
```

### ERT (Execution Result Tracing)

| Line | Condition | Result | Action |
|---|---|---|---|
| `car > 850` | `600 > 850` | `false` | Jump to `else` block |
| `else` block | — | — | Execute `console.log("BMW")` |

> 💡 Since the **outer** `if` is `false`, the **entire inner `if/else`** is skipped — it's never even evaluated.

### What If `car = 1000`?

| Line | Condition | Result | Action |
|---|---|---|---|
| `car > 850` | `1000 > 850` | `true` | Print `"maruthi alto"`, enter inner `if` |
| `car > 1200` | `1000 > 1200` | `false` | Jump to inner `else` |
| Inner `else` | — | — | Print `"maruthi 1000"` |

Output: `maruthi alto` → `maruthi 1000`

### What If `car = 1500`?

| Line | Condition | Result | Action |
|---|---|---|---|
| `car > 850` | `1500 > 850` | `true` | Print `"maruthi alto"`, enter inner `if` |
| `car > 1200` | `1500 > 1200` | `true` | Print `"Tata Altroz"` |

Output: `maruthi alto` → `Tata Altroz`

---

## 5. `else if` — Multiple Conditions

When you have **more than two possibilities**, use `else if` to chain multiple conditions.

### Syntax

```
if (condition1) {
    // runs when condition1 is TRUE
} else if (condition2) {
    // runs when condition1 is FALSE and condition2 is TRUE
} else if (condition3) {
    // runs when condition1 & condition2 are FALSE and condition3 is TRUE
} else {
    // runs when ALL conditions above are FALSE (default/fallback)
}
```

### Flow Diagram

```
  ┌───────────────┐
  │  condition1?   │──── true ──→  Block 1
  └──────┬────────┘
       false
         │
  ┌──────┴────────┐
  │  condition2?   │──── true ──→  Block 2
  └──────┬────────┘
       false
         │
  ┌──────┴────────┐
  │  condition3?   │──── true ──→  Block 3
  └──────┬────────┘
       false
         │
  ┌──────┴────────┐
  │  else (default)│──────────→  Default Block
  └───────────────┘
```

### Example

```js
let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");       // ✅ this runs (85 >= 80)
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
// Output: Grade A
```

> ⚠️ **Order matters!** JavaScript evaluates conditions **top to bottom** and stops at the **first match**. Always put the most specific/strictest condition first.

---

## 6. `if...else` vs Ternary Operator

The ternary operator (`? :`) from Chapter 05 is a **shorthand for simple if...else** statements.

| Feature | `if...else` | Ternary (`? :`) |
|---|---|---|
| Syntax | Multi-line block | Single expression |
| Readability | Better for complex logic | Better for simple assignments |
| Multiple statements | ✅ Can have multiple lines in each block | ❌ Only one expression per branch |
| Nesting | ✅ Clean with proper indentation | ⚠️ Gets messy when nested |
| Return value | ❌ `if` is a statement (no return value) | ✅ Returns a value (can assign) |

### Side-by-Side Comparison

```js
// if...else — better for multiple actions
let age = 20;
if (age >= 18) {
    console.log("Adult");
    console.log("Can vote");
} else {
    console.log("Minor");
    console.log("Cannot vote");
}

// Ternary — better for simple value assignment
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);
```

> 💡 **Rule of thumb:** Use `ternary` for **simple value assignments**. Use `if...else` for **complex logic with multiple actions**.

---

## 7. Truthy and Falsy Values

JavaScript conditions don't require an explicit Boolean — any value is either **truthy** or **falsy**.

### Falsy Values (These evaluate to `false` in conditions)

| Value | Type | Example |
|---|---|---|
| `false` | Boolean | `if (false)` |
| `0` | Number | `if (0)` |
| `-0` | Number | `if (-0)` |
| `""` (empty string) | String | `if ("")` |
| `null` | Null | `if (null)` |
| `undefined` | Undefined | `if (undefined)` |
| `NaN` | Number | `if (NaN)` |

### Truthy Values (Everything else is truthy)

| Value | Why It's Truthy |
|---|---|
| `"hello"` | Non-empty string |
| `42` | Non-zero number |
| `[]` | Empty array (it's an object!) |
| `{}` | Empty object |
| `"0"` | String with "0" (not empty) |
| `"false"` | String with "false" (not empty) |
| `-1` | Non-zero number |

```js
// Surprising truthy values
if ("0")     console.log("truthy!");  // ✅ runs — "0" is a non-empty string
if ([])      console.log("truthy!");  // ✅ runs — [] is an object
if ("false") console.log("truthy!");  // ✅ runs — "false" is a non-empty string
```

> ⚠️ **Common mistake:** `"0"` and `"false"` are **truthy** because they are non-empty strings. Only the **empty string** `""` is falsy.

---

## 8. Common Mistakes & Best Practices

### ❌ Mistake 1: Using `=` instead of `==` or `===`

```js
let x = 10;

// ❌ WRONG — this ASSIGNS 5 to x (always truthy)
if (x = 5) {
    console.log("This always runs!");
}

// ✅ CORRECT — this COMPARES x with 5
if (x === 5) {
    console.log("x is 5");
}
```

### ❌ Mistake 2: Missing curly braces

```js
// ❌ RISKY — only the FIRST line is part of the if
if (true)
    console.log("inside if");
    console.log("this ALWAYS runs — it's NOT inside the if!");

// ✅ SAFE — always use curly braces
if (true) {
    console.log("inside if");
    console.log("also inside if");
}
```

### ❌ Mistake 3: Unreachable `else if` conditions

```js
let score = 95;

// ❌ WRONG — first condition catches everything >= 60
if (score >= 60) {
    console.log("Pass");     // This catches score = 95 too!
} else if (score >= 90) {
    console.log("Excellent"); // ❌ Never reached for 95!
}

// ✅ CORRECT — put the stricter condition first
if (score >= 90) {
    console.log("Excellent"); // ✅ Catches 95
} else if (score >= 60) {
    console.log("Pass");
}
```

### Best Practices Summary

| Practice | Description |
|---|---|
| Always use `{}` | Even for single-line blocks |
| Use `===` over `==` | Avoid type coercion bugs |
| Strictest condition first | In `else if` chains, put the most specific condition at the top |
| Avoid deep nesting | Use `else if` or early `return` to flatten nested conditions |
| Keep conditions simple | Extract complex conditions into named variables for readability |

---

## 🔥 Top Interview Questions

### Q1: What is the difference between `if...else` and the ternary operator?
**A:** `if...else` is a **statement** that can contain multiple lines of code in each block. The ternary operator (`? :`) is an **expression** that returns a value and works best for simple, single-value assignments. Use `if...else` for complex logic and ternary for concise value assignments.

### Q2: What are falsy values in JavaScript?
**A:** There are exactly **7 falsy values**: `false`, `0`, `-0`, `""` (empty string), `null`, `undefined`, and `NaN`. Everything else is truthy — including `"0"`, `"false"`, `[]`, and `{}`.

### Q3: Can you use `if` without `else`?
**A:** Yes. The `else` block is **optional**. If you only need to run code when a condition is true and do nothing otherwise, a standalone `if` is perfectly valid.

### Q4: What happens if you use `=` instead of `===` in an `if` condition?
**A:** `=` is the **assignment operator**, not a comparison. `if (x = 5)` assigns `5` to `x` and the condition evaluates to `5` (truthy), so the block **always runs**. This is a common bug.

### Q5: What is the difference between nested `if` and `else if`?
**A:** **Nested `if`** places an `if` inside another `if`/`else` block — used when the second condition only matters if the first is true. **`else if`** chains conditions at the same level — used when you have multiple mutually exclusive options.

```js
// Nested if — condition2 checked ONLY when condition1 is true
if (condition1) {
    if (condition2) { ... }
}

// else if — conditions checked sequentially until one matches
if (condition1) { ... }
else if (condition2) { ... }
else if (condition3) { ... }
```

### Q6: Is `[]` truthy or falsy?
**A:** `[]` (empty array) is **truthy** because it's an object. However, `[] == false` is `true` due to type coercion (`[]` → `""` → `0` → `false`). This is why you should always use `===`.

---

## TL;DR

- **`if`** → executes code **only when** a condition is `true`.
- **`if...else`** → provides a **fallback** when the condition is `false`.
- **`else if`** → chains **multiple conditions** (checked top to bottom, first match wins).
- **Nested `if`** → checks a **sub-condition** inside another condition; the inner block is skipped entirely if the outer condition is `false`.
- **Falsy values** → `false`, `0`, `-0`, `""`, `null`, `undefined`, `NaN` — everything else is truthy.
- **Best practices** → always use `{}`, prefer `===`, put strictest conditions first, avoid deep nesting.

> **Rule of thumb:** Use `if...else` when you need multiple statements per branch. Use ternary (`? :`) for quick, single-value decisions. Always use `===` in conditions!
