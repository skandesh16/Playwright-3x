# JavaScript Hoisting & Temporal Dead Zone (TDZ) — Complete Reference

## 1. What Is Hoisting?

**Hoisting** is JavaScript's default behavior of moving **declarations** (not initializations) to the top of their scope during the **compilation phase**, before code execution begins.

```
What you write:                     What JavaScript sees:
┌───────────────────────────┐      ┌───────────────────────────┐
│ console.log(a);           │      │ var a;          ← hoisted │
│ var a = "Skandesh";       │      │ console.log(a); → undefined│
│ console.log(a);           │      │ a = "Skandesh"; ← assigned│
│                           │      │ console.log(a); → Skandesh│
└───────────────────────────┘      └───────────────────────────┘
```

> 💡 Only the **declaration** (`var a`) is hoisted. The **assignment** (`= "Skandesh"`) stays in place.

---

## 2. How Hoisting Works — Step by Step

JavaScript processes code in **two phases**:

| Phase | What Happens | Example |
|---|---|---|
| **1. Creation Phase** | Engine scans code, finds declarations, allocates memory | `var a` → memory slot created with `undefined` |
| **2. Execution Phase** | Code runs line by line, assignments happen | `a = "Skandesh"` → value assigned |

```
Creation Phase:
┌─────────────────────────────────────────┐
│  Memory                                │
│  ┌───────────┬──────────────┐          │
│  │ Variable  │ Value        │          │
│  ├───────────┼──────────────┤          │
│  │ a         │ undefined    │  ← var   │
│  │ greet()   │ [Function]   │  ← function │
│  └───────────┴──────────────┘          │
│                                        │
│  let/const → TDZ (not initialized)     │
└─────────────────────────────────────────┘

Execution Phase:
┌─────────────────────────────────────────┐
│  Code runs line by line...             │
│  a = "Skandesh"  → a is now "Skandesh" │
└─────────────────────────────────────────┘
```

---

## 3. `var` Hoisting

Variables declared with `var` are hoisted to the top of their **function scope** and initialized with `undefined`.

### Example 1: Basic `var` Hoisting

```js
console.log(greeting);    // undefined  ← hoisted, but not yet assigned
var greeting = "hello";
console.log(greeting);    // "hello"
```

**Behind the scenes:**

```js
var greeting;              // ← Declaration hoisted to top
console.log(greeting);    // undefined (exists but no value yet)
greeting = "hello";       // ← Assignment stays in place
console.log(greeting);    // "hello"
```

### Example 2: `var` Hoisting Inside a Function

```js
function getUserStatus() {
    console.log(Status_code);    // undefined
    var Status_code = "Active";
    console.log(Status_code);    // "Active"
}
getUserStatus();
```

**Behind the scenes:**

```js
function getUserStatus() {
    var Status_code;              // ← Hoisted to top of FUNCTION
    console.log(Status_code);    // undefined
    Status_code = "Active";      // ← Assignment stays
    console.log(Status_code);    // "Active"
}
```

### Example 3: `var` Inside an `if` Block (No Block Scope!)

```js
var a = "lumos";
if (true) {
    console.log(a);    // "lumos"
    var a = "sk";
    console.log(a);    // "sk"
}
// Output: lumos, sk
```

**Why `"lumos"` and not `undefined`?**

`var` is **function-scoped**, not block-scoped. The `var a` inside `if` is the **same variable** as the outer `var a`. Since `a` was already assigned `"lumos"` before the `if` block, it prints `"lumos"`.

```
Step-by-step execution:
┌──────────────────────────────────────────────────────────┐
│ 1. var a;                    ← Both "var a" are the     │
│                                 SAME variable (hoisted)  │
│ 2. a = "lumos";             ← a is now "lumos"          │
│ 3. if (true) {                                          │
│ 4.   console.log(a);        → "lumos" ✅                 │
│ 5.   a = "sk";              ← a is now "sk"             │
│ 6.   console.log(a);        → "sk" ✅                    │
│ 7. }                                                    │
└──────────────────────────────────────────────────────────┘
```

> ⚠️ `var` does NOT create a new variable inside `if`/`for`/`while` blocks — it's the same variable!

---

## 4. What Is the Temporal Dead Zone (TDZ)?

The **Temporal Dead Zone (TDZ)** is the period between the start of a scope and the point where a `let` or `const` variable is declared. During this zone, the variable **exists** (it is hoisted) but is **NOT initialized** — accessing it throws a `ReferenceError`.

```
┌──────────────────────────────────────────────────────┐
│  {                                                   │
│    // ┌─── TDZ starts here for 'b' ──────────┐      │
│    // │                                       │      │
│    // │  console.log(b);  ❌ ReferenceError    │      │
│    // │                                       │      │
│    // └─── TDZ ends here ────────────────────┘      │
│    let b = "temp";   ← Variable is now initialized   │
│    console.log(b);   ✅ "temp"                        │
│  }                                                   │
└──────────────────────────────────────────────────────┘
```

### TDZ vs `undefined` — The Key Difference

| Scenario | `var` | `let` / `const` |
|---|---|---|
| Variable before declaration | ✅ `undefined` (hoisted + initialized) | ❌ `ReferenceError` (hoisted but in TDZ) |
| Variable after declaration | ✅ Assigned value | ✅ Assigned value |

```js
// var — hoisted with undefined
{
    console.log(a);    // undefined ✅
    var a = "temp";
}

// let — hoisted but in TDZ
{
    console.log(b);    // ❌ ReferenceError: Cannot access 'b' before initialization
    let b = "temp";
}
```

> 💡 `let` and `const` **are hoisted** (the engine knows they exist), but they are placed in the TDZ until the declaration line is reached. This is different from "not hoisted at all."

---

## 5. TDZ in Block Scope — The Tricky Part 🧠

This is where TDZ gets confusing. When you declare a `let` variable inside a block (`if`, `for`, `{}`), it **shadows** the outer variable — and the TDZ applies from the **start of that block**.

### Example: `let` Shadowing + TDZ

```js
let a = 10;
console.log(a);       // 10 ✅
if (true) {
    console.log(a);   // ❌ ReferenceError: Cannot access 'a' before initialization
    let a = "SK";
    console.log(a);   // (never reached)
}
```

**Output:** `10`, then `ReferenceError`

**Why does this happen?** Let's trace it:

```
Step-by-step execution:
┌──────────────────────────────────────────────────────────────┐
│ OUTER SCOPE:                                                │
│   let a = 10;             ← outer 'a' = 10                  │
│   console.log(a);         → 10 ✅                            │
│                                                              │
│ BLOCK SCOPE (if block):                                     │
│   ┌─── TDZ for inner 'a' starts here ────────────────┐     │
│   │                                                   │     │
│   │  JavaScript sees "let a" exists in this block     │     │
│   │  So 'a' in this block refers to the INNER 'a'    │     │
│   │  But inner 'a' is not yet initialized → TDZ!     │     │
│   │                                                   │     │
│   │  console.log(a);   ❌ ReferenceError               │     │
│   │  (tries to access inner 'a' which is in TDZ)     │     │
│   │                                                   │     │
│   └─── TDZ ends here ────────────────────────────────┘     │
│   let a = "SK";           ← inner 'a' = "SK"               │
│   console.log(a);         → "SK" (never reached due to error)│
└──────────────────────────────────────────────────────────────┘
```

> ⚠️ The inner `let a` **shadows** the outer `a`. JavaScript does NOT fall back to the outer `a` — it sees the inner `let a` declaration, puts it in TDZ, and blocks access until the declaration line.

### Compare with `var` (No TDZ, No Block Scope)

```js
var a = "lumos";
if (true) {
    console.log(a);    // "lumos" ✅  ← same variable, already assigned
    var a = "sk";
    console.log(a);    // "sk" ✅
}
```

With `var`, there's NO block scope and NO TDZ — the inner `var a` is the **same** `a` as the outer one.

---

## 6. Function Hoisting

Function **declarations** are **fully hoisted** — both the name and the body are moved to the top. You can call a function before its declaration.

```js
sayHello();   // ✅ "Hello!" — works because function is fully hoisted

function sayHello() {
    console.log("Hello!");
}
```

### Function Expression — NOT Fully Hoisted

Function **expressions** follow the hoisting rules of the variable keyword used (`var`, `let`, `const`):

```js
greet();   // ❌ TypeError: greet is not a function

var greet = function() {
    console.log("Hello!");
};
```

**Behind the scenes:**

```js
var greet;          // ← hoisted with undefined
greet();            // ❌ undefined is not a function!
greet = function() {
    console.log("Hello!");
};
```

### Function Hoisting Summary

| Declaration Type | Hoisted? | Callable Before Declaration? |
|---|---|---|
| `function fn() {}` | ✅ Fully (name + body) | ✅ Yes |
| `var fn = function() {}` | ⚠️ Partially (`var` hoisted as `undefined`) | ❌ No — `TypeError` |
| `let fn = function() {}` | ⚠️ TDZ | ❌ No — `ReferenceError` |
| `const fn = () => {}` | ⚠️ TDZ | ❌ No — `ReferenceError` |

---

## 7. Complete Hoisting Comparison Table

| Feature | `var` | `let` | `const` | `function` declaration |
|---|---|---|---|---|
| **Hoisted?** | ✅ Yes | ✅ Yes (to TDZ) | ✅ Yes (to TDZ) | ✅ Yes (fully) |
| **Initialized at hoist?** | `undefined` | ❌ No (TDZ) | ❌ No (TDZ) | ✅ Full function body |
| **Access before declaration** | `undefined` | ❌ `ReferenceError` | ❌ `ReferenceError` | ✅ Works |
| **Scope** | Function | Block | Block | Function |
| **TDZ?** | ❌ No | ✅ Yes | ✅ Yes | ❌ No |

```
Hoisting Behavior Visualized:

var:       ──── undefined ────────────┬── assigned value ────→
                                      │
                                  declaration

let/const: ──── TDZ (❌ error) ───────┬── assigned value ────→
                                      │
                                  declaration

function:  ──── fully available ✅ ────────────────────────→
```

---

## 8. IQ Practice Questions

### IQ 1: `var` Hoisting in Block

```js
var a = "lumos";
if (true) {
    console.log(a);    // ?
    var a = "sk";
    console.log(a);    // ?
}
```

<details>
<summary>Answer</summary>

**Output:** `lumos`, `sk`

`var` is function-scoped, so both `var a` declarations refer to the **same variable**. By the time the `if` block runs, `a` is already `"lumos"`. Then it gets reassigned to `"sk"`.

</details>

---

### IQ 2: `let` TDZ in Block

```js
let a = 10;
console.log(a);       // ?
if (true) {
    console.log(a);   // ?
    let a = "SK";
    console.log(a);   // ?
}
```

<details>
<summary>Answer</summary>

**Output:** `10`, then `ReferenceError: Cannot access 'a' before initialization`

- Line 2: Prints `10` (outer `a`)
- Line 4: ❌ `ReferenceError` — The inner `let a` on line 5 shadows the outer `a`, and creates a TDZ from the start of the `if` block. Accessing `a` on line 4 hits the TDZ.
- Line 6: Never reached

</details>

---

### IQ 3: `var` Inside Function

```js
function getUserStatus() {
    console.log(Status_code);    // ?
    var Status_code = "Active";
    console.log(Status_code);    // ?
}
getUserStatus();
```

<details>
<summary>Answer</summary>

**Output:** `undefined`, `Active`

`var Status_code` is hoisted to the top of the function with `undefined`. Then assigned `"Active"`.

</details>

---

### IQ 4: `let` in Bare Block

```js
{
    console.log(b);    // ?
    let b = "temp";
}
```

<details>
<summary>Answer</summary>

**Output:** `ReferenceError: Cannot access 'b' before initialization`

`let b` is hoisted to the top of the block but placed in TDZ. Accessing it before the declaration line throws an error.

</details>

---

### IQ 5: `var` in Bare Block

```js
{
    console.log(a);    // ?
    var a = "temp";
}
```

<details>
<summary>Answer</summary>

**Output:** `undefined`

`var a` is hoisted (not block-scoped), so `a` exists as `undefined` before the assignment.

</details>

---

### IQ 6: Why Does This NOT Print the Outer Value?

```js
let a = "playwright";
if (true) {
    console.log(a);    // Why not "playwright"?
    let a = "temp";
}
```

<details>
<summary>Answer</summary>

**Output:** `ReferenceError`

You might expect it to print `"playwright"` (the outer value). But it doesn't because:

1. JavaScript sees `let a` exists inside the `if` block
2. So it creates a **new `a`** scoped to this block (shadowing the outer `a`)
3. This inner `a` is in the **TDZ** from the start of the block until `let a = "temp"`
4. `console.log(a)` tries to access the **inner `a`** (not the outer one), which is still in TDZ

**Key insight:** Once a `let`/`const` is declared in a block, all references to that name in the block point to the inner variable — even before the declaration line.

</details>

---

## 9. TDZ — Common Misconceptions

| Misconception | Reality |
|---|---|
| "`let` is not hoisted" | ❌ Wrong — `let` IS hoisted, but to the TDZ (not initialized) |
| "TDZ means the variable doesn't exist" | ❌ Wrong — it exists, but accessing it is forbidden |
| "Using outer variable works inside block" | ❌ Wrong — if there's a `let`/`const` with same name in the block, it shadows the outer one from the start |
| "`var` has TDZ too" | ❌ Wrong — `var` is initialized to `undefined` immediately, no TDZ |

---

## 10. TL;DR

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  HOISTING = Declarations moved to top of scope                │
│                                                                │
│  var    →  Hoisted + initialized as undefined                 │
│            ✅ Access before declaration = undefined             │
│                                                                │
│  let    →  Hoisted + NOT initialized (TDZ)                    │
│            ❌ Access before declaration = ReferenceError        │
│                                                                │
│  const  →  Hoisted + NOT initialized (TDZ)                    │
│            ❌ Access before declaration = ReferenceError        │
│                                                                │
│  function → Fully hoisted (name + body)                       │
│            ✅ Callable before declaration                       │
│                                                                │
│  TDZ = The zone between scope start and declaration line      │
│        where let/const exist but can't be accessed            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 📂 Related Files

| File | Topic |
|---|---|
| `82_Hoisting.js` | Basic `var` hoisting demo |
| `82_var_hoisting.js` | `var` hoisting — behind the scenes |
| `83_fn_hoisting.js` | `var` hoisting inside a function |
| `84_let_hoisting.js` | `let` hoisting — TDZ ReferenceError |
| `85_let.js` | `let` shadowing inside `if` block — TDZ |
| `86_TDZ.js` | `var` vs `let` in bare blocks — TDZ comparison |
| `87_IQ.js` | IQ: `var` hoisting inside `if` block |
| `88_IQ.js` | IQ: `let` TDZ inside `if` block |
