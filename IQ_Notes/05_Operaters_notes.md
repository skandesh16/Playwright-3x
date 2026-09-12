# JavaScript Operators — Complete Reference

## 1. Data Types in JavaScript

Before diving into operators, it's essential to understand the data types they work on.

### Primitive Data Types (Cannot be further broken down)

| # | Type | Description | Example |
|---|---|---|---|
| 1 | `String` | Collection of characters | `'hello'`, `"Skandesh"` |
| 2 | `Number` | Integer or floating-point numbers | `10`, `3.14` |
| 3 | `Boolean` | Logical value — true or false | `true`, `false` |
| 4 | `Undefined` | Variable declared but not assigned | `let x;` → `undefined` |
| 5 | `Null` | Intentional absence of any value | `let y = null;` |
| 6 | `BigInt` | Numbers larger than `Number.MAX_SAFE_INTEGER` | `123456789012345678901234567890n` |
| 7 | `Symbol` | Unique and immutable identifier (rarely used) | `Symbol('id')` |

### Reference / Non-Primitive Data Types (Can be broken down further)

| # | Type | Description | Example |
|---|---|---|---|
| 1 | `Array` | Ordered collection of values | `[1, 2, 3]` |
| 2 | `Function` | Reusable block of code | `function greet() {}` |
| 3 | `Object` | Key-value pairs | `{ name: 'Skandesh' }` |
| 4 | `NaN` | "Not-a-Number" — result of invalid math | `'abc' * 2` → `NaN` |

> 💡 **String** is a **collection of characters** — e.g., `'hello'` is made up of `'h','e','l','l','o'`.

### Primitive vs Reference — Key Difference

| Feature | Primitive | Reference |
|---|---|---|
| Stored as | Actual value | Memory address (reference) |
| Mutable? | ❌ Immutable | ✅ Mutable |
| Compared by | Value | Reference |
| Copy behavior | Creates a new copy | Copies the reference (both point to same data) |

```js
// Primitive — independent copies
let a = 10;
let b = a;   // b gets its own copy
b = 20;
console.log(a); // 10 (unchanged)

// Reference — shared reference
let arr1 = [1, 2, 3];
let arr2 = arr1;     // arr2 points to same array
arr2.push(4);
console.log(arr1);   // [1, 2, 3, 4] (changed!)
```

---

## 2. What Are Operators?

Operators are **special symbols** or **keywords** that perform operations on values (operands) and produce a result.

```
operand1   operator   operand2   →   result
  10          +          5       →     15
```

### Types of Operators in JavaScript

| # | Operator Type | Symbols | Purpose |
|---|---|---|---|
| 1 | Assignment | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` | Assign values to variables |
| 2 | Arithmetic | `+`, `-`, `*`, `/`, `%`, `**` | Perform math calculations |
| 3 | Comparison | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` | Compare values → returns Boolean |
| 4 | Logical | `&&`, `\|\|`, `!` | Combine/invert Boolean expressions |
| 5 | String | `+` (concatenation), `` ` ` `` (template literals) | Combine strings |
| 6 | Ternary | `condition ? val1 : val2` | Shorthand for if-else |
| 7 | Type | `typeof`, `instanceof` | Check data type |
| 8 | Bitwise | `&`, `\|`, `^`, `~`, `<<`, `>>` | Bit-level operations |

---

## 3. Assignment Operators

Assignment operators **assign** (store) a value into a variable.

### Example Used

```js
// Basic assignment
let Skandesh = 'Automation Test Engineer';
console.log(Skandesh); // Automation Test Engineer

// Compound assignment
let x = 10;
x += 5;
console.log(x); // 15
```

### All Assignment Operators

| Operator | Name | Example | Equivalent To | Result (if `x = 10`) |
|---|---|---|---|---|
| `=` | Assign | `x = 10` | — | `10` |
| `+=` | Add and assign | `x += 5` | `x = x + 5` | `15` |
| `-=` | Subtract and assign | `x -= 3` | `x = x - 3` | `7` |
| `*=` | Multiply and assign | `x *= 2` | `x = x * 2` | `20` |
| `/=` | Divide and assign | `x /= 4` | `x = x / 4` | `2.5` |
| `%=` | Modulus and assign | `x %= 3` | `x = x % 3` | `1` |
| `**=` | Exponent and assign | `x **= 2` | `x = x ** 2` | `100` |

> 💡 **Compound assignment operators** are shorthand — they perform an operation AND assign the result in one step.

---

## 4. Arithmetic Operators

Arithmetic operators perform **mathematical calculations** on numbers.

### Example Used

```js
let a = 10;
let b = 3;

sum        = a + b;    // 13
difference = a - b;    // 7
product    = a * b;    // 30
division   = a / b;    // 3.3333...
modulus    = a % b;    // 1
power      = a ** b;   // 1000

console.log("Sum of a and b is: " + sum);            // 13
console.log("Difference of a and b is: " + difference); // 7
console.log("Product of a and b is: " + product);       // 30
console.log("Division of a and b is: " + division);     // 3.333...
console.log("Modulus of a and b is: " + modulus);        // 1
console.log("Power of a and b is: " + power);           // 1000
```

### All Arithmetic Operators

| Operator | Name | Example | Result | Description |
|---|---|---|---|---|
| `+` | Addition | `10 + 3` | `13` | Adds two values |
| `-` | Subtraction | `10 - 3` | `7` | Subtracts right from left |
| `*` | Multiplication | `10 * 3` | `30` | Multiplies two values |
| `/` | Division | `10 / 3` | `3.333...` | Divides left by right |
| `%` | Modulus (Remainder) | `10 % 3` | `1` | Returns the **remainder** of division |
| `**` | Exponentiation (Power) | `10 ** 3` | `1000` | Raises left to the power of right (10³) |

### Modulus (`%`) — Deep Dive

The modulus operator returns the **remainder** after division. It's commonly used to:

```js
// Check if a number is even or odd
console.log(14 % 7);  // 0 → 14 is divisible by 7
console.log(14 % 3);  // 2 → remainder is 2
console.log(15 % 2);  // 1 → odd number
console.log(16 % 2);  // 0 → even number
```

| Use Case | Expression | Logic |
|---|---|---|
| Even/Odd check | `n % 2 === 0` | Even → remainder 0 |
| Divisibility check | `n % d === 0` | n is divisible by d |
| Wrap-around (cycling) | `index % array.length` | Keeps index within bounds |

### Exponentiation (`**`) — Deep Dive

```js
console.log(2 ** 3);   // 8    → 2 × 2 × 2
console.log(5 ** 2);   // 25   → 5 × 5
console.log(10 ** 3);  // 1000 → 10 × 10 × 10
console.log(9 ** 0.5); // 3    → square root of 9
```

> 💡 `**` was introduced in **ES2016 (ES7)** as a cleaner alternative to `Math.pow(base, exp)`.

### Increment & Decrement Operators

| Operator | Name | Example | Description |
|---|---|---|---|
| `++x` | Pre-increment | Increments **first**, then returns value | |
| `x++` | Post-increment | Returns value **first**, then increments | |
| `--x` | Pre-decrement | Decrements **first**, then returns value | |
| `x--` | Post-decrement | Returns value **first**, then decrements | |

```js
let x = 5;
console.log(++x); // 6 → incremented first, then printed
console.log(x++); // 6 → printed first, then incremented (x is now 7)
console.log(x);   // 7
```

### Operator Precedence (BODMAS / PEMDAS)

| Priority | Operator | Name |
|---|---|---|
| 1 (highest) | `()` | Parentheses / Brackets |
| 2 | `**` | Exponentiation |
| 3 | `*`, `/`, `%` | Multiplication, Division, Modulus |
| 4 (lowest) | `+`, `-` | Addition, Subtraction |

```js
console.log(2 + 3 * 4);       // 14 (not 20) → multiplication first
console.log((2 + 3) * 4);     // 20 → parentheses force addition first
console.log(2 ** 3 * 2);      // 16 → exponent first (8 * 2)
```

---

## 5. Comparison Operators

Comparison operators **compare two values** and always return a **Boolean** (`true` or `false`).

### The Big Three: `=` vs `==` vs `===`

| Operator | Name | What It Does | Example | Result |
|---|---|---|---|---|
| `=` | Assignment | **Assigns** a value to a variable | `let x = 10` | `x` is now `10` |
| `==` | Loose Equality | Compares **value only** (type coercion) | `5 == '5'` | `true` ✅ |
| `===` | Strict Equality | Compares **value AND data type** (no coercion) | `5 === '5'` | `false` ❌ |

> ⚠️ **This is the most asked interview question about operators!** Always prefer `===` over `==`.

### Example Used

```js
// == Loose comparison (type coercion happens)
console.log(5 == '5');   // true  → JS converts '5' to 5, then compares

// === Strict comparison (no type coercion)
console.log(5 === '5');  // false → number ≠ string (different types)

// != Loose inequality
console.log(5 != '5');   // false → after coercion, 5 equals 5

// !== Strict inequality
console.log(5 !== '5');  // true  → different types, so not equal

// More examples
console.log(4 == '4');   // true  → loose comparison, value matches
console.log(5 != '5');   // false → loose comparison, values are equal
```

### All Comparison Operators

| Operator | Name | Example | Result | Description |
|---|---|---|---|---|
| `==` | Loose Equality | `5 == '5'` | `true` | Compares values after type coercion |
| `===` | Strict Equality | `5 === '5'` | `false` | Compares value **and** type — no coercion |
| `!=` | Loose Inequality | `5 != '5'` | `false` | Not equal (with type coercion) |
| `!==` | Strict Inequality | `5 !== '5'` | `true` | Not equal (checks type too) |
| `>` | Greater Than | `10 > 5` | `true` | Left is greater than right? |
| `<` | Less Than | `10 < 5` | `false` | Left is less than right? |
| `>=` | Greater Than or Equal | `10 >= 10` | `true` | Left is greater than or equal to right? |
| `<=` | Less Than or Equal | `5 <= 10` | `true` | Left is less than or equal to right? |

### `==` vs `===` — Type Coercion Table

| Expression | `==` (Loose) | `===` (Strict) | Why? |
|---|---|---|---|
| `5 == '5'` | ✅ `true` | ❌ `false` | `==` converts `'5'` → `5` |
| `0 == false` | ✅ `true` | ❌ `false` | `==` converts `false` → `0` |
| `'' == false` | ✅ `true` | ❌ `false` | Both coerce to `0` |
| `null == undefined` | ✅ `true` | ❌ `false` | Special JS rule for `==` |
| `1 == true` | ✅ `true` | ❌ `false` | `true` coerces to `1` |
| `[] == false` | ✅ `true` | ❌ `false` | `[]` → `''` → `0` → `false` |
| `NaN == NaN` | ❌ `false` | ❌ `false` | `NaN` is not equal to anything, including itself! |

> ⚠️ **Best Practice:** Always use `===` and `!==` to avoid unexpected type coercion bugs.

---

## 6. Logical Operators

Logical operators combine or invert Boolean expressions.

| Operator | Name | Example | Result | Description |
|---|---|---|---|---|
| `&&` | AND | `true && false` | `false` | Returns `true` only if **both** are true |
| `\|\|` | OR | `true \|\| false` | `true` | Returns `true` if **at least one** is true |
| `!` | NOT | `!true` | `false` | Inverts the Boolean value |

### Truth Table — AND (`&&`)

| A | B | A && B |
|---|---|---|
| `true` | `true` | `true` |
| `true` | `false` | `false` |
| `false` | `true` | `false` |
| `false` | `false` | `false` |

### Truth Table — OR (`||`)

| A | B | A \|\| B |
|---|---|---|
| `true` | `true` | `true` |
| `true` | `false` | `true` |
| `false` | `true` | `true` |
| `false` | `false` | `false` |

### Short-Circuit Evaluation

```js
// AND → stops at the first falsy value
console.log(false && "hello");  // false (doesn't evaluate "hello")
console.log(true && "hello");   // "hello" (both are truthy)

// OR → stops at the first truthy value
console.log(true || "hello");   // true (doesn't evaluate "hello")
console.log(false || "hello");  // "hello" (first is falsy, checks second)
```

---

## 7. Ternary Operator

The ternary operator is a **shorthand for `if-else`** — it's the only operator that takes **three operands**.

```
condition ? valueIfTrue : valueIfFalse
```

```js
let age = 18;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status); // "Adult"

// Equivalent if-else
if (age >= 18) {
    status = 'Adult';
} else {
    status = 'Minor';
}
```

---

## 8. Type Operators

| Operator | Description | Example | Result |
|---|---|---|---|
| `typeof` | Returns the data type as a string | `typeof 42` | `"number"` |
| `instanceof` | Checks if an object is an instance of a class | `[] instanceof Array` | `true` |

### `typeof` Results Reference

| Value | `typeof` Returns |
|---|---|
| `42` | `"number"` |
| `"hello"` | `"string"` |
| `true` | `"boolean"` |
| `undefined` | `"undefined"` |
| `null` | `"object"` ⚠️ (known JS bug) |
| `[]` | `"object"` |
| `{}` | `"object"` |
| `function(){}` | `"function"` |
| `Symbol()` | `"symbol"` |
| `10n` | `"bigint"` |

> ⚠️ `typeof null === "object"` is a **historical bug** in JavaScript that was never fixed for backward compatibility.

---

## 9. String Concatenation with `+`

The `+` operator behaves differently based on data types:

```js
// Number + Number → Addition
console.log(10 + 5);        // 15

// String + String → Concatenation
console.log("Hello" + " " + "World"); // "Hello World"

// String + Number → Concatenation (number is coerced to string)
console.log("Sum is: " + 10); // "Sum is: 10"

// Template Literals (ES6) — preferred for combining strings and variables
let name = "Skandesh";
console.log(`Hello, ${name}!`); // "Hello, Skandesh!"
```

> 💡 **Template literals** (backticks `` ` ``) are the modern, cleaner way to concatenate strings and variables.

---

## Operator Precedence — Complete Order

| Priority | Operator(s) | Description |
|---|---|---|
| 1 (highest) | `()` | Grouping |
| 2 | `!`, `typeof`, `++`, `--` | Unary operators |
| 3 | `**` | Exponentiation |
| 4 | `*`, `/`, `%` | Multiplication, Division, Remainder |
| 5 | `+`, `-` | Addition, Subtraction |
| 6 | `<`, `<=`, `>`, `>=` | Relational comparison |
| 7 | `==`, `!=`, `===`, `!==` | Equality comparison |
| 8 | `&&` | Logical AND |
| 9 | `\|\|` | Logical OR |
| 10 | `? :` | Ternary |
| 11 (lowest) | `=`, `+=`, `-=`, etc. | Assignment |

---

## Pipeline Diagram

```
Operators in JavaScript — Overview
──────────────────────────────────

  Assignment          Arithmetic           Comparison            Logical
  ──────────          ──────────           ──────────            ───────
  =  (assign)         +  (add)             ==  (loose equal)     &&  (AND)
  += (add+assign)     -  (subtract)        === (strict equal)    ||  (OR)
  -= (sub+assign)     *  (multiply)        !=  (loose not eq)    !   (NOT)
  *= (mul+assign)     /  (divide)          !== (strict not eq)
  /= (div+assign)     %  (modulus)         >   (greater than)
  %= (mod+assign)     ** (power)           <   (less than)
  **=(pow+assign)     ++ (increment)       >=  (greater or eq)
                      -- (decrement)       <=  (less or eq)
```

---

## 🔥 Top Interview Questions

### Q1: What is the difference between `==` and `===`?
**A:** `==` (loose equality) compares **values only** with type coercion. `===` (strict equality) compares **both value AND data type** without coercion. Always prefer `===`.

### Q2: What does `typeof null` return and why?
**A:** It returns `"object"` — this is a **known bug** in JavaScript from its original implementation that was never fixed for backward compatibility.

### Q3: What is the difference between `++x` and `x++`?
**A:** `++x` (pre-increment) increments first, then returns the value. `x++` (post-increment) returns the value first, then increments.

### Q4: What is short-circuit evaluation?
**A:** `&&` stops evaluating at the **first falsy** value. `||` stops at the **first truthy** value. This improves performance and enables patterns like default values: `let name = input || 'Guest'`.

### Q5: What will `console.log(NaN === NaN)` output?
**A:** `false` — `NaN` is **not equal to anything**, including itself. Use `Number.isNaN()` to check for NaN.

### Q6: What is the modulus operator used for?
**A:** `%` returns the **remainder** of a division. Common uses: checking even/odd (`n % 2`), divisibility, and cycling through array indices.

---

## TL;DR

- **Assignment (`=`)** → stores a value; compound versions (`+=`, `-=`, etc.) combine operation + assignment.
- **Arithmetic (`+`, `-`, `*`, `/`, `%`, `**`)** → math operations; `%` gives remainder, `**` gives power.
- **Comparison (`==`, `===`, `!=`, `!==`, `>`, `<`)** → always returns Boolean; **use `===` over `==`**.
- **Logical (`&&`, `||`, `!`)** → combine/invert Booleans; support short-circuit evaluation.
- **Ternary (`? :`)** → shorthand if-else in one line.
- **`typeof`** → returns data type as string; beware `typeof null` returns `"object"`.

> **Rule of thumb:** Use `===` instead of `==`, use template literals instead of `+` for strings, and always remember operator precedence (BODMAS/PEMDAS)!
