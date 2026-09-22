# JavaScript Switch Statements — Complete Reference

## 1. What Is a Switch Statement?

A **switch** statement evaluates an expression and matches its value against a list of `case` clauses. When a match is found, the code block for that case is executed.

> 💡 Think of `switch` as a cleaner alternative to long `if...else if...else` chains when you're comparing **one value** against **many possible matches**.

```
if...else if chain (messy)         switch (clean)
─────────────────────────         ─────────────────
if (day === "Mon") { ... }         switch(day) {
else if (day === "Tue") { ... }        case "Mon": ... break;
else if (day === "Wed") { ... }        case "Tue": ... break;
else { ... }                           default:    ...
                                   }
```

---

## 2. Syntax

```js
switch (expression) {
    case value1:
        // code to execute if expression === value1
        break;
    case value2:
        // code to execute if expression === value2
        break;
    default:
        // runs if NO case matches (optional)
        break;
}
```

### Key Components

| Component | Purpose |
|---|---|
| `switch(expression)` | The value being evaluated |
| `case value:` | A possible match for the expression |
| `break` | Exits the switch block after a match |
| `default` | Executes if no case matches (like `else`) |

---

## 3. Flow Diagram

```
        ┌───────────────────┐
        │  switch(expression)│
        └────────┬──────────┘
                 │
        ┌────────▼──────────┐
        │ case value1 match? │
        └────────┬──────────┘
          yes ◄──┴──► no
           │            │
    ┌──────▼──────┐    ┌▼───────────────────┐
    │ Execute     │    │ case value2 match?  │
    │ code block  │    └────────┬────────────┘
    │ + break     │      yes ◄──┴──► no
    └──────┬──────┘       │            │
           │        ┌─────▼──────┐    ┌▼──────────┐
           │        │ Execute    │    │  default   │
           │        │ code block │    │  block     │
           │        │ + break    │    └─────┬──────┘
           │        └─────┬──────┘          │
           └──────────────┴────────────┬────┘
                                       │
                              ┌────────▼────────┐
                              │  Continue after  │
                              │  switch block    │
                              └─────────────────┘
```

---

## 4. Basic Examples

### Example 1 — String Matching (Days of the Week)

📁 *File: [34_SwitchStatements](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/34_SwitchStatements)*

```js
let day = "Sunday";

switch(day) {
    case "Monday":
        console.log("Go to office");
        break;
    case "Tuesday":
        console.log("Go to office");
        break;
    // ... more cases ...
    case "Saturday":
        console.log("Stay at home");
        break;
    case "Sunday":
        console.log("Rest");
        break;
    default:
        console.log("Invalid day");
        break;
}
// Output: Rest
```

### Example 2 — Number Matching (Day Numbers)

📁 *File: [35_Switch.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/35_Switch.js)*

```js
let day = 11;

switch(day) {
    case 0:
        console.log("Sunday - Rest Day");
        break;
    case 1:
        console.log("Monday - Sprint Planning");
        break;
    // ... cases 2-6 ...
    default:
        console.log("Invalid day");
        break;
}
// Output: Invalid day  (11 doesn't match any case)
```

---

## 5. Real-World Use Case — API Status Code Handling

📁 *File: [36_APITestig.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/36_APITestig.js)*

A very practical use of switch in **Playwright / API Testing**:

```js
let responseCode = 200;

switch(responseCode) {
    case 200:
        console.log("Success");
        break;
    case 201:
        console.log("Created");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Invalid response code");
        break;
}
// Output: Success
```

> 💡 **Playwright Tip**: This pattern is useful when validating API responses in test automation — you can switch on `response.status()` to handle different outcomes.

---

## 6. Case Grouping (Fall-Through on Purpose)

📁 *File: [37_Switch_Group.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/37_Switch_Group.js)*

You can stack multiple `case` labels together **without** `break` to group them under a single code block.

```js
let Browser = "Opera";

switch(Browser.toLowerCase()) {
    case "chrome":
    case "brave":
    case "chromium":
    case "opera":
        console.log("Launch Chromium Browsers");
        break;
    case "firefox":
        console.log("Launch Firefox");
        break;
    case "edge":
        console.log("Launch Edge");
        break;
    case "safari":
        console.log("Launch Safari");
        break;
    default:
        console.log("Unknown Browser - Manual Testing Needed");
        break;
}
// Output: Launch Chromium Browsers
```

### How Case Grouping Works

```
case "chrome":      ─┐
case "brave":        │  No break → falls through
case "chromium":     │  to the next case
case "opera":       ─┤
    console.log()    │  All 4 cases share this code
    break;          ─┘  break stops execution here
```

> ⚠️ **Bug Alert**: In the original file, `"Chromium"` has an uppercase `C` in the case but `.toLowerCase()` is applied to the input. This means `"Chromium"` would never match — it should be `"chromium"` (lowercase) to work correctly.

---

## 7. Advanced — Using `switch(true)` for Range Conditions

📁 *File: [39_IQ2.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/39_IQ2.js)*

Normally, switch compares exact values. But by passing `true` as the expression, you can use **conditions** (ranges) in case labels:

```js
let score = 95;

switch (true) {
    case (score >= 90):
        console.log("Grade A");
        break;
    case (score >= 80):
        console.log("Grade B");
        break;
    case (score >= 70):
        console.log("Grade C");
        break;
    case (score >= 60):
        console.log("Grade D");
        break;
    default:
        console.log("Grade F");
        break;
}
// Output: Grade A
```

### How `switch(true)` Works

```
switch(true) evaluates each case expression:

    case (95 >= 90)  →  case (true)  →  matches switch(true)  ✅ FIRST MATCH
    case (95 >= 80)  →  case (true)  →  would also match, but break stopped it
    case (95 >= 70)  →  case (true)  →  would also match
```

> 💡 `switch(true)` is a clever trick to use switch like an `if...else if` chain with **range conditions**.

---

## 8. Interview Questions (IQ) — Tricky Behaviors

---

### ❓ IQ1 — What Happens Without `break`? (Fall-Through Bug)

📁 *File: [38_IQ.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/38_IQ.js)*

```js
let fruit = "banana";

switch(fruit) {
    case "apple":
        console.log("Apple is Selected");
    case "banana":
        console.log("Banana is Selected");
    case "Orange":
        console.log("Orange is Selected");
    default:
        console.log("Please select a fruit");
}
```

**Output:**
```
Banana is Selected
Orange is Selected
Please select a fruit
```

### 🔍 Explanation

| Step | What Happens |
|---|---|
| 1 | `"banana"` matches `case "banana"` |
| 2 | `"Banana is Selected"` is printed |
| 3 | **No `break`** → execution **falls through** to the next case |
| 4 | `"Orange is Selected"` is printed (even though fruit ≠ "Orange") |
| 5 | Falls through to `default` → `"Please select a fruit"` is printed |

```
                    ❌ No break
case "banana": ──────────────┐
    log("Banana is Selected")│
case "Orange": ◄─────────────┘  ← Falls through (NO match check!)
    log("Orange is Selected")│
default:       ◄─────────────┘  ← Falls through again
    log("Please select a fruit")
```

> ⚠️ **Key Rule**: Without `break`, execution **falls through** to ALL subsequent cases regardless of whether they match. The case value is NOT re-checked — it just keeps running.

---

### ❓ IQ2 — Duplicate Case Values

📁 *File: [40_IQ3.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/40_IQ3.js)*

```js
let x = 10;

switch(x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:          // ← Duplicate case!
        let b2 = 2;
        console.log(b2);
        break;
    case 30:
        console.log("x is 30");
        break;
    default:
        console.log("x is not 10, 20, or 30");
        break;
}
```

**Output:**
```
1
```

### 🔍 Explanation

| Rule | Behavior |
|---|---|
| Duplicate cases are **allowed** | JavaScript does NOT throw an error |
| **First match wins** | Only the **first** `case 10` is executed |
| Second `case 10` is **ignored** | It is never reached |

> ⚠️ **Key Rule**: When duplicate case values exist, JavaScript **always executes the first matching case** and ignores the rest (assuming `break` is present).

---

### ❓ IQ3 — Strict Comparison (`===`) in Switch

📁 *File: [41_IQ4.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/41_IQ4.js)*

```js
let Status = 0;
console.log(typeof Status);   // "number"

switch (Status) {
    case "false":
        console.log("False Matched");
        break;
    case 0:
        console.log("0 matched");
        break;
    default:
        console.log("Invalid Status");
        break;
}
```

**Output:**
```
number
0 matched
```

### 🔍 Explanation

| Comparison | Type Check | Match? |
|---|---|---|
| `0 === "false"` | `number` vs `string` | ❌ No (different types) |
| `0 === 0` | `number` vs `number` | ✅ Yes |

> ⚠️ **Key Rule**: Switch uses **strict comparison (`===`)** — it checks **both value AND type**. Unlike `==`, there is **NO type coercion**.

### Strict vs Loose Comparison in Switch

```
switch uses ===  (STRICT — no type coercion)

    0 === "false"    →  false   (number ≠ string)
    0 === false      →  false   (number ≠ boolean)
    0 === 0          →  true    (number = number)  ✅

if uses == by default (LOOSE — with type coercion)

    0 == false       →  true    (0 is coerced to false)
    0 == "0"         →  true    ("0" is coerced to 0)
```

---

## 9. Switch vs If...Else — When to Use Which?

| Criteria | `switch` | `if...else if` |
|---|---|---|
| **Best for** | Comparing ONE value against MANY exact matches | Complex conditions, ranges, multiple variables |
| **Comparison Type** | Strict `===` only | Any comparison (`>`, `<`, `>=`, `==`, `===`, etc.) |
| **Readability** | Better for 3+ exact-match cases | Better for 1-2 conditions or range checks |
| **Range Conditions** | Only with `switch(true)` trick | Native support |
| **Performance** | Slightly faster for many cases (optimized jump table) | Sequential evaluation |
| **Fall-Through** | Supported (intentional or accidental) | Not applicable |

---

## 10. Common Mistakes & Best Practices

### ❌ Common Mistakes

| # | Mistake | Problem |
|---|---|---|
| 1 | Forgetting `break` | Causes unintended fall-through |
| 2 | Using `==` logic assumptions | Switch uses `===`, not `==` |
| 3 | Case sensitivity | `"Apple"` ≠ `"apple"` in switch |
| 4 | Duplicate cases | Only first match executes — silent bug |
| 5 | Declaring `let`/`const` in cases without blocks | Can cause scope issues across cases |

### ✅ Best Practices

| # | Practice | Why |
|---|---|---|
| 1 | Always include `break` | Unless intentionally grouping cases |
| 2 | Always include `default` | Acts as a safety net for unexpected values |
| 3 | Use `.toLowerCase()` / `.toUpperCase()` | Avoids case-sensitivity bugs |
| 4 | Wrap case bodies in `{}` blocks | Prevents `let`/`const` scope conflicts |
| 5 | Use `switch(true)` for ranges | Cleaner than nested if...else for grade-like logic |

---

## 11. Quick Recap — Key Rules for Interviews

```
┌─────────────────────────────────────────────────────────────────┐
│                  SWITCH STATEMENT CHEAT SHEET                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. switch uses STRICT comparison (===)                         │
│     → No type coercion: 0 !== "0" !== false                     │
│                                                                 │
│  2. Without break → FALL-THROUGH to all cases below             │
│     → Case values are NOT re-checked                            │
│                                                                 │
│  3. Duplicate cases → FIRST match wins                          │
│     → No error thrown, second case silently ignored             │
│                                                                 │
│  4. default is OPTIONAL but recommended                         │
│     → Can be placed anywhere (not just at the end)              │
│                                                                 │
│  5. Case Grouping → Stack cases without break                   │
│     → Intentional fall-through for shared logic                 │
│                                                                 │
│  6. switch(true) → Enables range-based conditions               │
│     → Each case is a boolean expression                         │
│                                                                 │
│  7. Variables in cases → Use {} blocks to avoid scope issues     │
│     → case 1: { let x = 10; break; }                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 12. Chapter Source Files

| # | File | Topic |
|---|---|---|
| 34 | [34_SwitchStatements](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/34_SwitchStatements) | Basic syntax & string matching |
| 35 | [35_Switch.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/35_Switch.js) | Number matching with default |
| 36 | [36_APITestig.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/36_APITestig.js) | API status code handling |
| 37 | [37_Switch_Group.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/37_Switch_Group.js) | Case grouping (browser launch) |
| 38 | [38_IQ.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/38_IQ.js) | IQ: Fall-through without break |
| 39 | [39_IQ2.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/39_IQ2.js) | IQ: switch(true) for ranges |
| 40 | [40_IQ3.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/40_IQ3.js) | IQ: Duplicate case values |
| 41 | [41_IQ4.js](file:///e:/Playwright_3x/Chapter_07_SwitchStatements/41_IQ4.js) | IQ: Strict comparison (===) |
