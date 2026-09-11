# JavaScript Keywords — Complete Reference

## Example used

```js
var name = "Alice";
let age = 25;
const PI = 3.14;

if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

function greet() {
  return "Hello " + name;
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

class Person extends Human {
  constructor(name) {
    super();
    this.name = name;
  }

  get info() { return this.name; }
  set info(val) { this.name = val; }

  async fetchData() {
    try {
      const res = await fetch("/api");
      yield res.json();      // in a generator context
    } catch (e) {
      throw new Error(e);
    } finally {
      console.log("done");
    }
  }
}

export default Person;
import Person from "./Person.js";
```

## What happens to this code (example walkthrough)

1. **`var`, `let`, `const`** declare variables with different scoping and mutability rules.
2. **`if` / `else`** branches execution based on a condition (`age > 18`).
3. **`function`** declares a callable block; **`return`** exits it with a value.
4. **`for`** loops through a block repeatedly using an index variable.
5. **`class` / `extends` / `constructor` / `super`** set up OOP-style inheritance.
6. **`this`** refers to the current object instance inside the class.
7. **`get` / `set`** define computed properties (accessors).
8. **`async` / `await`** handle promises in a synchronous-looking style.
9. **`try` / `catch` / `finally` / `throw`** manage errors.
10. **`yield`** pauses a generator function and emits a value.
11. **`export` / `import`** share code across ES modules.
12. **`new`** creates an instance from a class or constructor function.
13. **`typeof` / `instanceof` / `in` / `delete` / `void`** are operator-keywords used for type-checking, membership testing, property removal, and expression suppression.

---

## All JavaScript Keywords (ES2024)

### 1 — Variable Declaration Keywords

| Keyword | Scope | Hoisted? | Re-assignable? | Re-declarable? | Use When |
|---|---|---|---|---|---|
| `var` | Function scope | Yes (initialised as `undefined`) | ✅ Yes | ✅ Yes (same scope) | Legacy code only; avoid in modern JS |
| `let` | Block scope `{}` | Yes (but in **TDZ** — not accessible before declaration) | ✅ Yes | ❌ No | Value will change (counters, flags) |
| `const` | Block scope `{}` | Yes (but in **TDZ**) | ❌ No | ❌ No | Value should not be reassigned (default choice) |

> **TDZ** = Temporal Dead Zone — the period between entering the scope and the actual `let`/`const` declaration line. Accessing the variable during TDZ throws a `ReferenceError`.

---

### 2 — Control Flow Keywords

| Keyword | Purpose | Example |
|---|---|---|
| `if` | Executes block when condition is **truthy** | `if (x > 0) { ... }` |
| `else` | Fallback block when `if` condition is **falsy** | `else { ... }` |
| `switch` | Multi-branch selection on a single value | `switch (color) { case "red": ... }` |
| `case` | One branch inside `switch` | `case "red": ...` |
| `default` | Fallback branch inside `switch` (or `export default`) | `default: ...` |
| `break` | Exits `switch`, `for`, `while`, or `do...while` immediately | `break;` |
| `continue` | Skips rest of current loop iteration, jumps to next | `continue;` |
| `return` | Exits a function and optionally sends back a value | `return 42;` |

---

### 3 — Loop Keywords

| Keyword | Type | Best For | Syntax |
|---|---|---|---|
| `for` | Counter-based loop | Iterating a known number of times | `for (let i = 0; i < n; i++)` |
| `for...in` | Key enumeration | Iterating over **object keys** (enumerable properties) | `for (let key in obj)` |
| `for...of` | Value iteration | Iterating over **iterable values** (arrays, strings, Maps, Sets) | `for (let val of arr)` |
| `while` | Pre-condition loop | Loop when count is unknown; check **before** running | `while (cond) { ... }` |
| `do...while` | Post-condition loop | Guarantees body runs **at least once** | `do { ... } while (cond);` |

---

### 4 — Function & Generator Keywords

| Keyword | What It Does | Example |
|---|---|---|
| `function` | Declares a named/anonymous function (hoisted if declaration) | `function greet() {}` |
| `return` | Exits the function and sends a value back to the caller | `return x + y;` |
| `yield` | Pauses a **generator** function and emits a value | `function* gen() { yield 1; }` |
| `yield*` | Delegates to another generator or iterable | `yield* anotherGen();` |

---

### 5 — Async Keywords

| Keyword | What It Does | Works With |
|---|---|---|
| `async` | Marks a function as asynchronous; it always returns a `Promise` | `async function fetchData() {}` |
| `await` | Pauses execution until a `Promise` resolves; only valid inside `async` | `const data = await fetch(url);` |

---

### 6 — Class & OOP Keywords

| Keyword | Purpose | Example |
|---|---|---|
| `class` | Declares a class (syntactic sugar over prototypes) | `class Animal {}` |
| `extends` | Inherits from a parent class | `class Dog extends Animal {}` |
| `constructor` | Special method called when `new` creates an instance | `constructor(name) { this.name = name; }` |
| `super` | Calls the parent class constructor or methods | `super(); super.method();` |
| `this` | Refers to the current object context | `this.name = name;` |
| `new` | Creates an instance of a class/constructor | `const d = new Dog("Rex");` |
| `static` | Defines a method/property on the class itself, not instances | `static count = 0;` |
| `get` | Defines a getter (computed property read) | `get fullName() { return ...; }` |
| `set` | Defines a setter (computed property write) | `set fullName(v) { ... }` |

---

### 7 — Error Handling Keywords

| Keyword | Purpose | Example |
|---|---|---|
| `try` | Wraps code that might throw an error | `try { riskyCall(); }` |
| `catch` | Handles the error thrown inside `try` | `catch (e) { console.error(e); }` |
| `finally` | Runs **always** — whether error occurred or not | `finally { cleanup(); }` |
| `throw` | Manually raises an error/exception | `throw new Error("Oops");` |

---

### 8 — Module Keywords

| Keyword | Purpose | Example |
|---|---|---|
| `import` | Brings in bindings from another module | `import { foo } from "./mod.js";` |
| `export` | Exposes bindings for other modules to import | `export function foo() {}` |
| `default` | Marks the single default export of a module | `export default class {}` |
| `as` | Renames an import or export | `import { foo as bar } from "...";` |
| `from` | Specifies the module source path | `import x from "./x.js";` |

---

### 9 — Operator Keywords

| Keyword | Type | What It Does | Example | Returns |
|---|---|---|---|---|
| `typeof` | Unary | Returns the data type as a string | `typeof 42` | `"number"` |
| `instanceof` | Binary | Checks if an object is an instance of a class/constructor | `dog instanceof Animal` | `true` / `false` |
| `in` | Binary | Checks if a property exists in an object | `"name" in obj` | `true` / `false` |
| `delete` | Unary | Removes a property from an object | `delete obj.name` | `true` / `false` |
| `void` | Unary | Evaluates expression and returns `undefined` | `void 0` | `undefined` |
| `new` | Unary | Creates a new object instance | `new Date()` | new object |

---

### 10 — Logical & Value Keywords

| Keyword | What It Represents |
|---|---|
| `true` | Boolean true value |
| `false` | Boolean false value |
| `null` | Intentional absence of any value |
| `undefined` | Variable declared but not yet assigned (also default return) |

---

### 11 — Context & Miscellaneous Keywords

| Keyword | Purpose | Example |
|---|---|---|
| `this` | Current execution context (object, class, or global) | `this.x = 5;` |
| `debugger` | Triggers a breakpoint in browser/Node dev tools | `debugger;` |
| `with` | Extends the scope chain (⚠️ **deprecated**, forbidden in strict mode) | `with (obj) { ... }` |

---

### 12 — Strict Mode & Reserved Keywords

| Keyword | Purpose |
|---|---|
| `"use strict"` | Enables strict mode — catches silent errors, disables unsafe features |
| `enum` | Reserved for future use (not implemented yet) |
| `implements` | Reserved in strict mode (future interfaces) |
| `interface` | Reserved in strict mode |
| `package` | Reserved in strict mode |
| `private` | Reserved in strict mode (now used with `#` syntax for private fields) |
| `protected` | Reserved in strict mode |
| `public` | Reserved in strict mode |

---

## Master Comparison — `var` vs `let` vs `const` (Most Asked)

| Aspect | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block `{}` | Block `{}` |
| Hoisting | ✅ Hoisted + initialised as `undefined` | ✅ Hoisted but in **TDZ** | ✅ Hoisted but in **TDZ** |
| Re-declaration (same scope) | ✅ Allowed | ❌ Error | ❌ Error |
| Re-assignment | ✅ Allowed | ✅ Allowed | ❌ Error |
| Attached to `window` (global) | ✅ Yes | ❌ No | ❌ No |
| Best practice | ❌ Avoid | ✅ Use when value changes | ✅ Default choice |

---

## Pipeline Diagram

```
Source Code Keywords Flow
─────────────────────────

  Declaration          Control Flow         Async / Class          Module System
  ──────────           ────────────         ─────────────          ─────────────
  var / let / const    if / else / switch   async / await          import / from
        │              for / while / do     class / extends        export / default
        ▼                    │              constructor / super          │
  Value assigned             ▼                    │                     ▼
        │              Branch / Loop              ▼              Module loaded
        ▼              executed            Object created               │
  Used in expressions        │                    │                     ▼
        │              try / catch / finally      ▼              Bindings available
        ▼              handles errors       Methods called        in consuming file
  typeof / instanceof        │              (this, get, set)
  checks at runtime          ▼                    │
                       return / break / continue  ▼
                       exits flow           yield (generators)
```

---

## TL;DR

- **Declaration** → `var` (function-scoped, legacy), `let` (block-scoped, reassignable), `const` (block-scoped, not reassignable — **default choice**).
- **Control flow** → `if`/`else`, `switch`/`case`/`default`, `for`/`while`/`do...while`, `break`/`continue`/`return`.
- **Functions** → `function`, `return`, `yield` (generators).
- **Async** → `async` marks the function, `await` pauses until the Promise resolves.
- **OOP** → `class`, `extends`, `constructor`, `super`, `this`, `new`, `static`, `get`/`set`.
- **Error handling** → `try`/`catch`/`finally`/`throw`.
- **Modules** → `import`/`export`/`default`/`as`/`from`.
- **Operators** → `typeof`, `instanceof`, `in`, `delete`, `void`.
- **Values** → `true`, `false`, `null`, `undefined`.
- **Reserved** → `enum`, `implements`, `interface`, etc. — reserved for future JS versions.

> **Rule of thumb:** Use `const` by default, `let` when you need reassignment, and never use `var` in modern code.
