# JavaScript Identifier Rules — Complete Reference

## Example used

```js
// ✅ Valid Identifiers
var a = 10;
var $ = 5;
var _a = 8;
var _ = 10;
var name = 'Skandesh';
var greet = 'hello';
var skandesh = "Automation Tester";

// ✅ Naming Conventions
let userName = 'camelCase';           // camelCase
let UserProfile = 'AutomationTester'; // PascalCase
let User_name = 'playwrightTester';   // snake_case
const RUPEE_VALUE = 'inr';            // SCREAMING_SNAKE_CASE
let strUserName = 'String';           // Hungarian Notation

// ❌ Invalid Identifiers
// var 1name = 'fail';       → starts with a digit
// var my-name = 'fail';     → contains a hyphen
// var my name = 'fail';     → contains a space
// var class = 'fail';       → reserved keyword
```

## What happens with identifiers (example walkthrough)

1. **`var a = 10;`** — `a` is a valid identifier: starts with a letter, single character, perfectly fine.
2. **`var $ = 5;`** — `$` is valid: dollar sign is one of the two allowed special starting characters.
3. **`var _a = 8;`** — `_a` is valid: underscore is the other allowed special starting character.
4. **`var _ = 10;`** — `_` alone is valid: an underscore by itself is a legal identifier.
5. **`var name = 'Skandesh';`** — `name` is valid: all lowercase letters, clear and readable.
6. **`let userName = 'camelCase';`** — `userName` uses **camelCase**: the standard convention for JS variables and functions.
7. **`let UserProfile = 'AutomationTester';`** — `UserProfile` uses **PascalCase**: the standard for classes and constructors.
8. **`const RUPEE_VALUE = 'inr';`** — `RUPEE_VALUE` uses **SCREAMING_SNAKE_CASE**: the convention for constants.
9. **`var 1name`** would **fail** — identifiers **cannot** start with a digit.
10. **`var my-name`** would **fail** — hyphens are **not** allowed (JS treats `-` as the minus operator).

---

## Comparison Table — What Can an Identifier Start With?

| Starting Character | Allowed? | Example | Notes |
|---|---|---|---|
| Letter (`a–z`, `A–Z`) | ✅ Yes | `name`, `Age`, `greet` | Most common and recommended |
| Underscore (`_`) | ✅ Yes | `_a`, `_count`, `__proto__` | Often indicates private/internal by convention |
| Dollar sign (`$`) | ✅ Yes | `$`, `$price`, `$el` | Used by libraries like jQuery; valid but less common |
| Digit (`0–9`) | ❌ No | ~~`1name`~~, ~~`2nd`~~ | Causes `SyntaxError` — digits can appear **after** the first character |
| Hyphen (`-`) | ❌ No | ~~`my-name`~~ | JS treats `-` as the subtraction operator |
| Space (` `) | ❌ No | ~~`my name`~~ | Spaces break the identifier into separate tokens |
| Other symbols (`@`, `#`, `!`, etc.) | ❌ No | ~~`@user`~~, ~~`#id`~~ | `#` is used for private class fields (not in regular identifiers) |

---

## All Identifier Rules

| Rule # | Rule | ✅ Valid Example | ❌ Invalid Example | Why |
|---|---|---|---|---|
| 1 | Must start with a **letter**, **`_`**, or **`$`** | `name`, `_id`, `$val` | `1abc`, `@user` | Digits and most symbols can't be the first character |
| 2 | Can contain **letters**, **digits**, **`_`**, and **`$`** after the first character | `user1`, `item_2`, `val$3` | `my-name`, `user name` | Hyphens and spaces are not valid in identifiers |
| 3 | **Case-sensitive** — uppercase ≠ lowercase | `Name` ≠ `name` ≠ `NAME` | — | All three are treated as **different** variables |
| 4 | **Cannot** use **reserved keywords** | `myClass`, `isNew` | `class`, `return`, `let` | Keywords have special meaning in the language |
| 5 | **No length limit** (but keep it readable) | `totalCartPrice` | `a` (too vague) | Technically unlimited, but long names hurt readability |
| 6 | **Unicode** letters are allowed (ES5+) | `café`, `名前`, `über` | — | JS supports Unicode, but ASCII is recommended for portability |
| 7 | **Cannot** contain **spaces** | `firstName` | ~~`first Name`~~ | Use camelCase, snake_case, or PascalCase instead |
| 8 | **Cannot** contain **operators** | `isActive` | ~~`is-active`~~, ~~`count+1`~~ | `-`, `+`, `*`, etc. are parsed as operators |

---

## Reserved Keywords (Cannot Be Used as Identifiers)

| Category | Keywords |
|---|---|
| Variable Declaration | `var`, `let`, `const` |
| Control Flow | `if`, `else`, `switch`, `case`, `default`, `break`, `continue`, `return` |
| Loops | `for`, `while`, `do`, `in`, `of` |
| Functions | `function`, `return`, `yield` |
| Async | `async`, `await` |
| Classes & OOP | `class`, `extends`, `constructor`, `super`, `this`, `new`, `static` |
| Error Handling | `try`, `catch`, `finally`, `throw` |
| Modules | `import`, `export`, `from`, `as` |
| Operators | `typeof`, `instanceof`, `delete`, `void` |
| Values | `true`, `false`, `null`, `undefined` |
| Strict Mode Reserved | `enum`, `implements`, `interface`, `package`, `private`, `protected`, `public` |

---

## Naming Conventions

| Convention | Pattern | Used For | Example |
|---|---|---|---|
| **camelCase** | first word lowercase, rest capitalized | Variables & Functions (JS standard) | `userName`, `totalPrice`, `userPassword` |
| **PascalCase** | every word capitalized | Classes & Constructors | `UserProfile`, `LoginPage`, `FinalCartPrice` |
| **snake_case** | words separated by underscores | Sometimes used in configs/data | `User_name`, `fuel_type`, `Fuel_Amount` |
| **SCREAMING_SNAKE_CASE** | all uppercase + underscores | Constants | `RUPEE_VALUE`, `WEBSITE_URL`, `MAX_RETRY` |
| **Hungarian Notation** | prefix with type abbreviation | Older style (not common now) | `strUserName`, `bActive`, `nCount`, `arrItems` |

### Hungarian Notation Prefixes

| Prefix | Type | Example |
|---|---|---|
| `str` | String | `strFirstName` |
| `b` | Boolean | `bActive` |
| `n` | Number | `nCount` |
| `arr` | Array | `arrItems` |
| `obj` | Object | `objUser` |
| `fn` | Function | `fnCallback` |

> ⚠️ **Hungarian Notation** is considered an older style. Modern JavaScript relies on **camelCase** + descriptive names + TypeScript types instead.

---

## Valid vs Invalid — Quick Reference

| Identifier | Valid? | Reason |
|---|---|---|
| `myName` | ✅ | Starts with letter, camelCase |
| `_private` | ✅ | Starts with underscore |
| `$jquery` | ✅ | Starts with dollar sign |
| `user123` | ✅ | Digit after the first character is fine |
| `_` | ✅ | Underscore alone is valid |
| `$` | ✅ | Dollar sign alone is valid |
| `café` | ✅ | Unicode letters allowed (ES5+) |
| `a` | ✅ | Single letter — valid but not descriptive |
| `1stPlace` | ❌ | Starts with a digit |
| `my-name` | ❌ | Contains a hyphen (minus operator) |
| `my name` | ❌ | Contains a space |
| `class` | ❌ | Reserved keyword |
| `for` | ❌ | Reserved keyword |
| `@handle` | ❌ | Starts with `@` (not allowed) |
| `user!` | ❌ | Contains `!` (not allowed) |

---

## Pipeline Diagram

```
Identifier Validation Flow
────────────────────────────

  Step 1                 Step 2                Step 3                Step 4
  Check First Char       Check Remaining       Check Against         Apply Convention
  ───────────────        ───────────────       Keywords              ─────────────────
  Starts with            Contains only:        ─────────────         camelCase → variables
  a–z, A–Z, _, $ ?      a–z, A–Z, 0–9,       Not a reserved        PascalCase → classes
        │                _, $ ?                keyword?              UPPER_SNAKE → constants
        │                      │                     │               snake_case → configs
     ✅ Yes → continue      ✅ Yes → continue     ✅ Yes → continue        │
     ❌ No  → SyntaxError   ❌ No  → SyntaxError  ❌ No  → SyntaxError     ▼
                                                                    ✅ Valid Identifier!
```

---

## TL;DR

- **First character** → must be a **letter**, **`_`**, or **`$`** — never a digit or symbol.
- **Remaining characters** → letters, digits, `_`, `$` — no spaces, hyphens, or operators.
- **Case-sensitive** → `name`, `Name`, and `NAME` are three different identifiers.
- **Reserved keywords** → `class`, `return`, `let`, `for`, etc. cannot be used as names.
- **Conventions** → use **camelCase** for variables/functions, **PascalCase** for classes, **SCREAMING_SNAKE_CASE** for constants.

> **Rule of thumb:** If it starts with a letter and reads like a plain English word (no spaces, no dashes), it's probably a valid identifier. When in doubt, try it in the console!
