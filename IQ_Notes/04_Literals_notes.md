# JavaScript Literals — Complete Reference

## Example Used

```js
let age = 'How old it is';         // String Literal
let isPrinciple = true;            // Boolean Literal
let pi = 3.14;                     // Numeric Literal
let nullvalue = null;              // Null Literal
let not_defined = undefined;       // Undefined Literal

console.log(typeof(age));          // string
console.log(typeof(isPrinciple));  // boolean
console.log(typeof(pi));           // number
console.log(typeof(nullvalue));    // object ⚠️ (JS bug)
console.log(typeof(not_defined));  // undefined
```

## What happens with literals (example walkthrough)

1. **`'How old it is'`** — A **String literal**: text enclosed in single or double quotes.
2. **`true`** — A **Boolean literal**: one of only two possible values (`true` / `false`).
3. **`3.14`** — A **Numeric literal**: whether integer or float, JavaScript treats all numbers the same (`number` type).
4. **`null`** — A **Null literal**: the developer **intentionally** assigns "no value" / "empty".
5. **`undefined`** — An **Undefined literal**: the variable exists but **no value has been assigned yet** — JavaScript sets this automatically.

---

## What is a Literal?

A **literal** is a **fixed value** written directly in your code. It is the actual data you assign to a variable.

```
keyword  identifier  =  literal
  let      age      =  'How old it is'
  └─────────────────────┘     └──────────┘
     Declaration part          The Literal (fixed value)
```

> 💡 **Identifier** = the name of the variable. **Literal** = the value assigned to it.

---

## Types of Literals

| # | Literal Type | Example | `typeof` Returns | Description |
|---|---|---|---|---|
| 1 | **String** | `'hello'`, `"world"`, `` `hi` `` | `"string"` | Collection of characters enclosed in quotes |
| 2 | **Numeric** | `42`, `3.14`, `0xFF`, `1e5` | `"number"` | Integer or floating-point — JS treats both as `number` |
| 3 | **Boolean** | `true`, `false` | `"boolean"` | Logical value — only two possible values |
| 4 | **Null** | `null` | `"object"` ⚠️ | Intentional absence of any value |
| 5 | **Undefined** | `undefined` | `"undefined"` | Variable exists but no value assigned |
| 6 | **Array** | `[1, 2, 3]` | `"object"` | Ordered list of values |
| 7 | **Object** | `{ name: 'SK' }` | `"object"` | Collection of key-value pairs |
| 8 | **BigInt** | `123n` | `"bigint"` | Arbitrary precision integer |
| 9 | **RegExp** | `/pattern/g` | `"object"` | Regular expression pattern |

---

## Null vs Undefined — Deep Dive

This is one of the **most asked interview questions** in JavaScript.

### The Baby Name Analogy 👶

| Scenario | Analogy | JS Equivalent |
|---|---|---|
| **Undefined** | A baby is born but **name not yet given** | `let userName;` → JS sets it to `undefined` |
| **Null** | Parents say "**name yet to be given**" (intentional) | `let profilePicture = null;` → Developer sets it |

### Example Used

```js
// Undefined — variable declared, no value assigned
let userName;
console.log(userName);          // undefined
console.log(typeof(userName));  // "undefined"

// Null — developer intentionally assigns "no value"
let profilepicture = null;
console.log(profilepicture);          // null
console.log(typeof(profilepicture));  // "object" ⚠️
```

### Comparison Table

| Aspect | `undefined` | `null` |
|---|---|---|
| **Meaning** | Variable exists, but **no value assigned** | Developer **intentionally** assigns "no value" |
| **Set by** | **JavaScript** automatically | **Developer** explicitly |
| **`typeof`** | `"undefined"` | `"object"` ⚠️ (known JS bug) |
| **In math** | `undefined + 1` → `NaN` | `null + 1` → `1` (null coerces to 0) |
| **Boolean** | `false` (falsy) | `false` (falsy) |
| **`==` comparison** | `null == undefined` → `true` | `undefined == null` → `true` |
| **`===` comparison** | `null === undefined` → `false` | `undefined === null` → `false` |
| **Use case** | Uninitialized variables, missing function args | Reset a variable, empty API response |

### Tricky Interview Question

```js
let Spetember_OKR_Credits = undefined;

console.log(typeof(Spetember_OKR_Credits)); // "undefined"
console.log(Spetember_OKR_Credits);          // undefined
```

> ⚠️ While you **can** explicitly assign `undefined`, it's **not recommended**. Use `null` instead to indicate "intentionally empty".

---

## Numeric Literals — Integer vs Float

In JavaScript, there is **no separate integer and float type** — everything is just `number`.

| Format | Example | Value | Description |
|---|---|---|---|
| Integer | `42` | `42` | Whole number |
| Float | `3.14` | `3.14` | Decimal number |
| Exponential | `1e5` | `100000` | Scientific notation |
| Hex | `0xFF` | `255` | Hexadecimal |
| Octal | `0o77` | `63` | Octal |
| Binary | `0b1010` | `10` | Binary |

```js
let integer = 42;
let float = 3.14;

console.log(typeof(integer)); // "number"
console.log(typeof(float));   // "number"
// Both are the same type!
```

---

## String Literals — Three Ways to Write

| Syntax | Example | Supports Variables? | Multi-line? |
|---|---|---|---|
| Single quotes `' '` | `'hello'` | ❌ | ❌ |
| Double quotes `" "` | `"hello"` | ❌ | ❌ |
| Template literals `` ` ` `` | `` `hello ${name}` `` | ✅ Yes | ✅ Yes |

```js
let name = 'Skandesh';

// All three produce valid strings
let s1 = 'Hello';
let s2 = "Hello";
let s3 = `Hello, ${name}!`; // Template literal — can embed variables
```

---

## Pipeline Diagram

```
Literals in JavaScript — Overview
──────────────────────────────────

  Primitive Literals              Reference Literals
  ──────────────────              ──────────────────
  String   → 'hello'             Array   → [1, 2, 3]
  Number   → 42, 3.14            Object  → { key: 'val' }
  Boolean  → true, false         Function → function() {}
  Null     → null                RegExp  → /pattern/
  Undefined → undefined
  BigInt   → 123n

        ┌─────────────────────────────────────┐
        │        typeof checks the type       │
        ├─────────────────────────────────────┤
        │  'hello'    → "string"              │
        │  42         → "number"              │
        │  true       → "boolean"             │
        │  undefined  → "undefined"           │
        │  null       → "object" ⚠️ (bug)     │
        │  [1,2]      → "object"              │
        │  {}         → "object"              │
        └─────────────────────────────────────┘
```

---

## 🔥 Top Interview Questions

### Q1: What is the difference between `null` and `undefined`?
**A:** `undefined` means a variable exists but **JS hasn't assigned a value yet**. `null` means the **developer intentionally** set "no value". Think: undefined = "not yet named baby", null = "name to be decided".

### Q2: Why does `typeof null` return `"object"`?
**A:** It's a **historical bug** in JavaScript from 1995 that was never fixed for backward compatibility.

### Q3: What is `null + 1`?
**A:** `1` — because `null` coerces to `0` in numeric context. But `undefined + 1` gives `NaN`.

### Q4: Is there a difference between integer and float in JavaScript?
**A:** **No.** JavaScript has only one number type (`number`). Both `42` and `3.14` are `typeof "number"`.

### Q5: What is a literal vs an identifier?
**A:** A **literal** is the actual fixed value (`'hello'`, `42`, `true`). An **identifier** is the name that holds it (`userName`, `age`, `pi`).

---

## TL;DR

- **Literal** = a fixed value written directly in code (`'hello'`, `42`, `true`, `null`).
- **String** → text in quotes; use template literals (`` ` ` ``) for embedding variables.
- **Number** → JS has no int/float distinction — everything is `number`.
- **Boolean** → only `true` or `false`.
- **Null** → developer says "intentionally empty" → `typeof` returns `"object"` (bug).
- **Undefined** → JS says "no value assigned yet" → `typeof` returns `"undefined"`.
- **Null vs Undefined** → `null == undefined` is `true`, but `null === undefined` is `false`.

> **Rule of thumb:** Use `null` when you intentionally want "no value". Let `undefined` be set by JavaScript automatically. Never explicitly assign `undefined` to a variable.
