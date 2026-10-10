# JavaScript Functions — Complete Reference

## 1. What Is a Function?

A **function** is a reusable block of code that performs a specific task. Instead of repeating logic, you define it once and call it whenever needed.

```
Without Functions:                      With Functions:
┌──────────────────────────────┐       ┌──────────────────────────────────┐
│ let score1 = 85;             │       │ function getResult(score) {      │
│ let r1 = score1 >= 70        │       │   return score >= 70             │
│   ? "Pass" : "Fail";        │       │     ? "Pass" : "Fail";           │
│                              │       │ }                                │
│ let score2 = 45;             │       │                                  │
│ let r2 = score2 >= 70        │       │ getResult(85);  // "Pass"        │
│   ? "Pass" : "Fail";        │       │ getResult(45);  // "Fail"        │
│ (Repeated logic!)            │       │ (Defined once, reused!)          │
└──────────────────────────────┘       └──────────────────────────────────┘
```

### Key Terminology

| Term | Description |
|---|---|
| **Function Definition** | The block where you write the function's logic |
| **Function Call** | Executing the function by its name with `()` |
| **Parameter** | Variable name in the function **definition** (placeholder) |
| **Argument** | Actual value passed when **calling** the function |
| **Return Value** | The value a function sends back to the caller |

```
function greet(name) {        ← "name" is the PARAMETER
    return `Hello ${name}`;
}

greet("Skandesh");            ← "Skandesh" is the ARGUMENT
```

> 💡 **Memory trick:** **P**arameter = **P**laceholder (in definition), **A**rgument = **A**ctual value (in call).

---

## 2. Four Types of Functions

Functions are categorized based on whether they accept **arguments** and whether they **return** a value:

| Type | Arguments | Return | Description |
|---|---|---|---|
| **Type 1** | ❌ No | ❌ No | Just performs an action (e.g., logging) |
| **Type 2** | ✅ Yes | ❌ No | Takes input, performs action, no output |
| **Type 3** | ❌ No | ✅ Yes | No input, but produces output |
| **Type 4** | ✅ Yes | ✅ Yes | Takes input and produces output |

### Type 1: No Arguments, No Return

```js
function greet() {
    console.log("Hello Skandesh");
}
greet();             // "Hello Skandesh"

let output = greet();
console.log(output); // undefined  ← no return statement!
```

> ⚠️ A function without a `return` statement returns `undefined` by default.

### Type 2: With Arguments, No Return

```js
function greetByName(name) {
    console.log(`Hello ${name}`);
}

greetByName("Skandesh");     // "Hello Skandesh"
greetByName("Balaji");       // "Hello Balaji"
greetByName("Ajith");        // "Hello Ajith"

let name1 = greetByName("Koustubha");   // "Hello Koustubha"
console.log(name1);                      // undefined ← no return!
```

### Type 3: No Arguments, With Return

```js
function sayHello() {
    console.log("Hello Skandesh");
    return "Aakanksha";
}

let name = sayHello();  // Logs: "Hello Skandesh"
console.log(name);      // "Aakanksha"  ← returned value
```

### Type 4: With Arguments, With Return ✅ (Most Common)

```js
function sumOfTwoNumbers(a, b) {
    return a + b;
}

let result = sumOfTwoNumbers(10, 20);
console.log(result);                      // 30
console.log(sumOfTwoNumbers(20, 30));     // 50
```

### Return vs No Return — Visual Comparison

```
Without return:                         With return:
┌───────────────────────────┐          ┌───────────────────────────┐
│ function add(a, b) {      │          │ function addReturn(a, b) {│
│   console.log(a + b);     │          │   return a + b;           │
│ }                         │          │ }                         │
│                           │          │                           │
│ let x = add(3, 6);        │          │ let y = addReturn(3, 7); │
│ // Logs: 9                │          │ console.log(y);           │
│ console.log(x);           │          │ // 10                    │
│ // undefined ❌            │          │ // value captured ✅      │
└───────────────────────────┘          └───────────────────────────┘
```

---

## 3. Function Expression

A **function expression** stores a function in a variable. The function can be named or anonymous.

```js
// Named function (function declaration)
function greet1(name1) {
    return `Hello. ${name1}`;
}
let output = greet1("Skandesh");
console.log(output);   // "Hello. Skandesh"

// Function expression (anonymous function stored in a variable)
const Tester = function(testing) {
    return `Testing is ${testing}`;
}
console.log(Tester("Playwright"));   // "Testing is Playwright"
```

### Function Declaration vs Function Expression

| Feature | Declaration | Expression |
|---|---|---|
| **Syntax** | `function name() {}` | `const name = function() {}` |
| **Hoisted?** | ✅ Yes (can call before definition) | ❌ No (must define first) |
| **Name** | Always named | Can be anonymous |
| **Use case** | General-purpose functions | Callbacks, assigning to variables |

---

## 4. Template Literals in Functions

Template literals (backtick strings) allow embedding expressions inside strings using `${}`:

```js
function greet(name) {
    return `hello ${name}`;
}

let output = greet("Sai Aakanksha");
console.log(output);   // "hello Sai Aakanksha"
```

> 💡 Template literals use **backticks** `` ` `` not regular quotes `'` or `"`.

---

## 5. Arrow Functions (`=>`)

Arrow functions provide a **shorter syntax** for writing functions. Introduced in ES6.

### Syntax Comparison

```
Regular Function:                       Arrow Function:
┌─────────────────────────────┐        ┌─────────────────────────────────┐
│ function add(a, b) {        │        │ const add = (a, b) => a + b;    │
│   return a + b;             │        │                                 │
│ }                           │        │                                 │
└─────────────────────────────┘        └─────────────────────────────────┘
```

### Single-Line Arrow Function (Implicit Return)

When the body is a single expression, the `return` keyword and `{}` are optional:

```js
const bike = (twowheels) => `${twowheels} has two wheels`;

console.log(bike("Honda"));   // "Honda has two wheels"
```

### Multi-Line Arrow Function (Explicit Return)

When the body has multiple statements, use `{}` and an explicit `return`:

```js
const getResult = (score) => {
    if (score >= 60) return "Pass";
    return "Fail";
}

console.log(getResult(68));   // "Pass"
console.log(getResult(18));   // "Fail"
```

### Arrow Function Rules

| Scenario | Syntax | Example |
|---|---|---|
| Single param | Parentheses optional | `x => x * 2` |
| No params | Parentheses required | `() => "hello"` |
| Multiple params | Parentheses required | `(a, b) => a + b` |
| Single expression | Implicit return (no `{}`) | `x => x * 2` |
| Multiple statements | Explicit `return` + `{}` | `(x) => { ... return x; }` |

---

## 6. Spread Operator (`...`) in Functions

The spread operator `...` expands an array into individual arguments, or collects multiple arguments into an array.

### Spreading Arguments

```js
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3));   // 6

let num = [1, 2, 3];
add(...num);                  // Spreads [1,2,3] into add(1, 2, 3)
```

### Rest Parameters (Collecting Arguments)

```js
function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404, 500];
let result = hasError(...responseCodes);
console.log(result);   // true  (404 and 500 are >= 400)
```

```
Spread vs Rest:
┌──────────────────────────────────────────────────────────┐
│ SPREAD (...) — Expands array into individual values      │
│   let nums = [1, 2, 3];                                 │
│   add(...nums)  →  add(1, 2, 3)                         │
│                                                          │
│ REST (...) — Collects individual values into an array    │
│   function fn(...args)  →  args = [1, 2, 3]             │
└──────────────────────────────────────────────────────────┘
```

---

## 7. Return Values — Practical Example

Functions with return values can produce different outputs based on input logic:

```js
function getStatus(code) {
    if (code >= 200 && code < 300) return "OK";
    if (code >= 400 && code < 500) return "Client error";
    if (code >= 500) return "Server Error";
}

console.log(getStatus(200));   // "OK"
console.log(getStatus(404));   // "Client error"
console.log(getStatus(503));   // "Server Error"
```

> 💡 This pattern is very common in API testing — mapping HTTP status codes to readable descriptions.

---

## 8. `var` vs `let` vs `const`

### 8.1 Redeclaration

| Keyword | Redeclaration Allowed? |
|---|---|
| `var` | ✅ Yes |
| `let` | ❌ No — `SyntaxError` |
| `const` | ❌ No — `SyntaxError` |

```js
var a = 10;
var a = 20;      // ✅ Allowed
console.log(a);  // 20

let b = 10;
// let b = 20;   // ❌ SyntaxError: Identifier 'b' has already been declared

const c = 10;
// const c = 20; // ❌ SyntaxError: Identifier 'c' has already been declared
```

### 8.2 Reassignment

| Keyword | Reassignment Allowed? |
|---|---|
| `var` | ✅ Yes |
| `let` | ✅ Yes |
| `const` | ❌ No — `TypeError` |

```js
var l = 1;
l = 10;          // ✅ Allowed
console.log(l);  // 10

let m = 1;
m = 10;          // ✅ Allowed
console.log(m);  // 10

const n = 1;
// n = 10;       // ❌ TypeError: Assignment to constant variable
```

### 8.3 Scope

| Keyword | Scope |
|---|---|
| `var` | **Function-scoped** — visible throughout the entire function |
| `let` | **Block-scoped** — visible only within `{}` |
| `const` | **Block-scoped** — visible only within `{}` |

```
var (Function Scope):              let / const (Block Scope):
┌─────────────────────────┐       ┌─────────────────────────┐
│ function test() {       │       │ function test() {       │
│   if (true) {           │       │   if (true) {           │
│     var x = 50;         │       │     let y = 50;         │
│   }                     │       │   }                     │
│   console.log(x); // 50 │       │   console.log(y); // ❌ │
│ }                       │       │ }  ReferenceError       │
└─────────────────────────┘       └─────────────────────────┘
```

#### Scope Example with `if` Block

```js
var x = 10;
if (x > 5) {
    var x = 50;
    console.log("Inside IF block:", x);   // 50
}
console.log("Outside IF block:", x);      // 50 ← var leaked out!

let y = 10;
if (y > 5) {
    let y = 50;
    console.log("Inside IF block:", y);   // 50
}
console.log("Outside IF block:", y);      // 10 ← let stayed in block!

const z = 10;
if (z > 5) {
    const z = 50;
    console.log("Inside IF block:", z);   // 50
}
console.log("Outside IF block:", z);      // 10 ← const stayed in block!
```

#### Scope Example Inside Functions

```js
var i = 1;
function testVar() {
    if (true) {
        var i = 2;
        console.log("var inside if:", i);   // 2
    }
    console.log("var outside if:", i);      // 2 ← overwritten!
}
testVar();

let j = 1;
function testLet() {
    if (true) {
        let j = 2;
        console.log("let inside if:", j);   // 2
    }
    console.log("let outside if:", j);      // 1 ← block-scoped!
}
testLet();

const k = 1;
function testConst() {
    if (true) {
        const k = 2;
        console.log("const inside if:", k); // 2
    }
    console.log("const outside if:", k);    // 1 ← block-scoped!
}
testConst();
```

### 8.4 Complete Comparison Table

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| **Scope** | Function | Block | Block |
| **Redeclaration** | ✅ Allowed | ❌ Error | ❌ Error |
| **Reassignment** | ✅ Allowed | ✅ Allowed | ❌ Error |
| **Hoisting** | ✅ Hoisted (`undefined`) | ⚠️ Hoisted (TDZ) | ⚠️ Hoisted (TDZ) |
| **Best for** | Legacy code | Variables that change | Constants / fixed values |

> 💡 **Best Practice:** Use `const` by default. Use `let` only when you need to reassign. Avoid `var`.

---

## 9. Hoisting

**Hoisting** is JavaScript's behavior of moving declarations to the top of their scope **before** code execution. Only the **declaration** is hoisted, not the **initialization**.

### 9.1 `var` Hoisting

Variables declared with `var` are hoisted to the top with a default value of `undefined`:

```js
console.log(a);       // undefined  ← hoisted, but not yet assigned
var a = 'Skandesh';
console.log(a);       // "Skandesh"
```

**Behind the scenes**, JavaScript sees it as:

```js
var a;                // ← Declaration hoisted to top
console.log(a);       // undefined
a = 'Skandesh';       // ← Assignment stays in place
console.log(a);       // "Skandesh"
```

#### Another `var` Hoisting Example

```js
console.log(greeting);    // undefined
var greeting = "hello";
console.log(greeting);    // "hello"

// Behind the Scenes:
// var greeting;              ← Hoisted with undefined
// console.log(greeting);    → undefined
// greeting = "hello";       ← Assignment stays
// console.log(greeting);    → "hello"
```

### 9.2 Function Hoisting (with `var` inside)

`var` hoisting also applies **inside functions**:

```js
function getUserStatus() {
    console.log(Status_code);    // undefined  ← var hoisted inside function
    var Status_code = "Active";
    console.log(Status_code);    // "Active"
}

getUserStatus();
```

**Behind the scenes:**

```js
function getUserStatus() {
    var Status_code;              // ← Hoisted to top of function
    console.log(Status_code);    // undefined
    Status_code = "Active";
    console.log(Status_code);    // "Active"
}
```

### 9.3 `let` and `const` Hoisting — Temporal Dead Zone (TDZ)

`let` and `const` **are technically hoisted**, but they are NOT initialized. Accessing them before their declaration throws a `ReferenceError`. The period between the start of the scope and the declaration is called the **Temporal Dead Zone (TDZ)**.

```js
console.log(username);          // ❌ ReferenceError: Cannot access 'username' before initialization
let username = "Skandesh.lumos";
console.log(username);
```

```
Temporal Dead Zone (TDZ):
┌──────────────────────────────────────────────┐
│  // ← TDZ starts here for 'username'        │
│  console.log(username);  // ❌ ReferenceError │
│  // ← TDZ ends here                         │
│  let username = "Skandesh.lumos";            │
│  console.log(username);  // ✅ Works          │
└──────────────────────────────────────────────┘
```

### 9.4 Hoisting Summary

| Declaration | Hoisted? | Initialized? | Access Before Declaration |
|---|---|---|---|
| `var` | ✅ Yes | `undefined` | ✅ Returns `undefined` |
| `let` | ✅ Yes (to TDZ) | ❌ No | ❌ `ReferenceError` |
| `const` | ✅ Yes (to TDZ) | ❌ No | ❌ `ReferenceError` |
| `function` declaration | ✅ Yes (fully) | ✅ Yes | ✅ Works perfectly |
| `function` expression | Depends on `var`/`let`/`const` | Same as variable | Same as variable |

```
Hoisting Behavior:

var:    ┌─── declaration hoisted ──→  var x;        (undefined)
        │    ...
        └─── assignment stays    ──→  x = 10;

let:    ┌─── TDZ starts ──────────→  ❌ ReferenceError
        │    ...
        └─── declaration + init  ──→  let x = 10;   ✅ accessible

const:  ┌─── TDZ starts ──────────→  ❌ ReferenceError
        │    ...
        └─── declaration + init  ──→  const x = 10;  ✅ accessible

function: ┌── fully hoisted ───────→  ✅ callable immediately
           │   ...
           └── definition          →  function fn() { ... }
```

---

## 10. Quick Reference — All Topics

| Topic | Key Takeaway |
|---|---|
| **Function basics** | Reusable code blocks; define once, call many times |
| **4 Types** | No args/no return, args/no return, no args/return, args/return |
| **Function expression** | `const fn = function() {}` — stored in a variable |
| **Template literals** | Use backticks `` ` `` with `${}` for embedded expressions |
| **Arrow functions** | `(params) => expression` — shorter syntax, implicit return |
| **Spread operator** | `...arr` expands array; `...params` collects arguments |
| **Return values** | `return` sends a value back; no return → `undefined` |
| **var vs let vs const** | `var` = function-scoped; `let`/`const` = block-scoped |
| **Hoisting** | `var` → `undefined`; `let`/`const` → TDZ (ReferenceError) |

---

## 📂 Chapter Files Reference

| File | Topic |
|---|---|
| `70_Functions.js` | What is a function — introduction & basic example |
| `71_fn.js` | Function with parameter — 4 types overview |
| `72_basic_fn.js` | Type 1 & Type 4 — return vs no return comparison |
| `73_type2_basicfun.js` | Type 2 — with parameter, without return |
| `74_Type3_basic_fn.js` | Type 3 — without parameter, with return |
| `75_type4_fn.js` | Type 4 — with parameter, with return |
| `76_Template_litral.js` | Template literals inside functions |
| `77_fn_ex.js` | Function expression (anonymous function) |
| `78_Arrow_fn.js` | Arrow function — single-line & multi-line |
| `79_Spread_fn.js` | Spread operator & rest parameters |
| `80_Return_fn.js` | Return values — HTTP status code example |
| `81_var_let_const.js` | var vs let vs const — scope, redeclaration, reassignment |
| `82_Hoisting.js` | Basic var hoisting demo |
| `82_var_hoisting.js` | var hoisting — behind the scenes |
| `83_fn_hoisting.js` | var hoisting inside a function |
| `84_let_hoisting.js` | let hoisting — Temporal Dead Zone (ReferenceError) |
