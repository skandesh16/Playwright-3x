# JavaScript User Inputs — Complete Reference

## 1. What Is User Input?

**User input** is data provided by the user during program execution. In browser JavaScript, we use `prompt()`, but in **Node.js** (where Playwright runs), there is no browser — so we read input from **stdin** (standard input).

```
Browser JS  → prompt("Enter name:")     → pops up a dialog box
Node.js     → readFileSync(0, 'utf8')   → reads from terminal/stdin
```

### Why Learn This?

| Reason | Explanation |
|---|---|
| Playwright runs in Node.js | No `prompt()` or `alert()` available |
| Dynamic test data | Pass values at runtime instead of hardcoding |
| CLI tool building | Create interactive command-line scripts |

---

## 2. Reading Input with `readFileSync`

The simplest way to read user input in Node.js is using the built-in `fs` module.

### Syntax

```js
const data = require('fs').readFileSync(0, 'utf8').trim();
```

### Breaking It Down

| Part | What It Does |
|---|---|
| `require('fs')` | Imports Node.js built-in **File System** module |
| `.readFileSync(0, 'utf8')` | Reads from file descriptor `0` (stdin) synchronously |
| `0` | File descriptor `0` = **stdin** (standard input from terminal) |
| `'utf8'` | Encoding — reads the input as a **text string** (not raw bytes) |
| `.trim()` | Removes leading/trailing whitespace and newline characters |

### File Descriptors

Every running process has three standard streams:

```
┌───────────────────────────────────────┐
│           Operating System            │
│                                       │
│   FD 0 → stdin   (Standard Input)    │  ← keyboard / terminal
│   FD 1 → stdout  (Standard Output)   │  → console.log()
│   FD 2 → stderr  (Standard Error)    │  → console.error()
│                                       │
└───────────────────────────────────────┘
```

| FD | Name | Direction | Example |
|---|---|---|---|
| `0` | stdin | Input → Program | User types in terminal |
| `1` | stdout | Program → Output | `console.log()` |
| `2` | stderr | Program → Error Output | `console.error()` |

> 💡 When we pass `0` to `readFileSync`, we're saying: "Read from the keyboard input stream."

---

## 3. Example — `42_node_userinput.js`

```js
console.log("Enter Your Input:");

const data = require('fs').readFileSync(0, 'utf8').trim();

console.log("Your Output", data);
```

### Execution Flow

```
┌──────────────────────────────────────┐
│  1. console.log("Enter Your Input:") │  → Prints prompt
│                                      │
│  2. readFileSync(0, 'utf8')          │  → Waits for user input...
│     ⏳ Program BLOCKS here           │
│     User types: "Hi Playwright"      │
│     User presses: Ctrl+Z (Windows)   │
│                                      │
│  3. .trim()                          │  → Removes extra whitespace
│                                      │
│  4. console.log("Your Output", data) │  → Prints the input back
└──────────────────────────────────────┘
```

### Terminal Output

```
PS> node 42_node_userinput.js
Enter Your Input:
Hi Aakanksha Good morning!
^Z
Your Output Hi Aakanksha Good morning!
```

---

## 4. Why Do We Press Ctrl+Z? (EOF Signal)

`readFileSync` keeps reading **until it receives an EOF (End of File) signal**. Without EOF, the program waits forever.

### What Is EOF?

**EOF = End of File**. It tells the program: "There's no more data to read. I'm done."

When reading from a file, EOF is automatic (the file ends). But when reading from the keyboard, **you** need to manually signal EOF.

### EOF Shortcuts by OS

| OS | Shortcut | What It Sends |
|---|---|---|
| **Windows** | `Ctrl+Z` then `Enter` | EOF signal |
| **Mac / Linux** | `Ctrl+D` | EOF signal |

### What Each Key Does

| Key | What It Does |
|---|---|
| **Enter** | Adds a newline character (`\n`) — input **continues** |
| **Ctrl+Z** (Windows) | Sends **EOF** — tells the program "I'm done typing" |
| **Ctrl+D** (Mac/Linux) | Same as Ctrl+Z but for Unix-based systems |
| **Ctrl+C** | Sends **SIGINT** — forcefully **kills** the program |

> ⚠️ **Ctrl+C vs Ctrl+Z:** Don't confuse them! `Ctrl+C` kills the program entirely. `Ctrl+Z` (on Windows) just signals "end of input" — the program continues to the next line of code.

### Flow Comparison

```
Without EOF (Ctrl+Z):                  With EOF (Ctrl+Z):
┌─────────────────────┐               ┌─────────────────────┐
│ readFileSync(0)     │               │ readFileSync(0)     │
│   ↓                 │               │   ↓                 │
│ "Hi Playwright"     │               │ "Hi Playwright"     │
│   ↓                 │               │   ↓                 │
│ Waiting... ⏳       │               │ ^Z (EOF received)   │
│ Waiting... ⏳       │               │   ↓                 │
│ Waiting... ⏳       │               │ Returns data ✅     │
│ (stuck forever!)    │               │ Program continues   │
└─────────────────────┘               └─────────────────────┘
```

---

## 5. The `.trim()` Method

### Why We Use It

When the user types input and presses Enter, a **newline character** (`\n` or `\r\n`) is added at the end. `.trim()` removes this.

```js
// Without trim()
"Hi Playwright\r\n"    // ❌ has trailing newline

// With trim()
"Hi Playwright"         // ✅ clean string
```

### What `.trim()` Removes

| Characters Removed | Name |
|---|---|
| ` ` | Spaces |
| `\t` | Tabs |
| `\n` | Newline (Line Feed) |
| `\r` | Carriage Return |
| `\r\n` | Windows line ending |

> 💡 `.trim()` only removes whitespace from the **start** and **end** of the string — never from the middle.

---

## 6. Alternative: Using `readline` Module

If you don't want to press Ctrl+Z, use the `readline` module — it reads **one line at a time** and stops after Enter.

### Syntax

```js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });

console.log("Enter Your Input:");
rl.on('line', (line) => {
    console.log("Your Output", line);
    rl.close();
});
```

### Comparison

| Feature | `readFileSync(0)` | `readline` |
|---|---|---|
| Import | `require('fs')` | `require('readline')` |
| Stops after | EOF signal (Ctrl+Z / Ctrl+D) | Each line (Enter key) |
| Blocking | ✅ Synchronous (blocks execution) | ❌ Asynchronous (event-based) |
| Multi-line input | ✅ Can read multiple lines at once | One line per event |
| Ease of use | Simple, one-liner | More setup required |
| Best for | Quick scripts, competitive programming | Interactive CLI apps |

---

## 7. Synchronous vs Asynchronous Input

### `readFileSync` — Synchronous (Blocking)

```
Line 1: console.log("Enter:")    → Executes ✅
Line 2: readFileSync(0)          → ⏳ BLOCKS here until Ctrl+Z
Line 3: console.log(data)        → Executes AFTER input received ✅
```

> 💡 "Synchronous" means the program **waits** at that line until the operation completes. No other code runs during the wait.

### `readline` — Asynchronous (Non-Blocking)

```
Line 1: console.log("Enter:")    → Executes ✅
Line 2: rl.on('line', callback)  → Sets up listener, moves on immediately
Line 3: console.log("Ready!")    → Executes BEFORE input! ⚠️
         ... user types ...      → callback fires when input arrives
```

---

## 8. Common Mistakes & Best Practices

### ❌ Mistake 1: Forgetting `.trim()`

```js
// ❌ Without trim — data includes newline characters
const data = require('fs').readFileSync(0, 'utf8');
console.log(data === "Hello");  // false! (data is "Hello\r\n")

// ✅ With trim — clean comparison
const data = require('fs').readFileSync(0, 'utf8').trim();
console.log(data === "Hello");  // true ✅
```

### ❌ Mistake 2: Using `prompt()` in Node.js

```js
// ❌ WRONG — prompt() is a BROWSER function, not available in Node.js
let name = prompt("Enter name:");  // ReferenceError: prompt is not defined

// ✅ CORRECT — use readFileSync or readline in Node.js
const name = require('fs').readFileSync(0, 'utf8').trim();
```

### ❌ Mistake 3: Confusing Ctrl+C with Ctrl+Z

```
Ctrl+C  → KILLS the program (SIGINT signal)     ❌ Data is LOST
Ctrl+Z  → Sends EOF, program continues normally  ✅ Data is SAVED
```

### Best Practices Summary

| Practice | Description |
|---|---|
| Always use `.trim()` | Removes unwanted whitespace and newline characters |
| Use `readFileSync(0)` for simple input | Quick, one-liner approach for reading stdin |
| Use `readline` for interactive apps | Better for multi-prompt, interactive CLI tools |
| Remember EOF shortcuts | Ctrl+Z on Windows, Ctrl+D on Mac/Linux |
| Don't use `prompt()` in Node.js | It's a browser-only function |

---

## 🔥 Top Interview Questions

### Q1: How do you read user input in Node.js?
**A:** Use `require('fs').readFileSync(0, 'utf8').trim()` to read synchronously from stdin (file descriptor 0). Alternatively, use the `readline` module for asynchronous, line-by-line input reading.

### Q2: What is file descriptor `0`?
**A:** File descriptor `0` represents **stdin** (standard input). Every process has three default file descriptors: `0` (stdin), `1` (stdout), and `2` (stderr).

### Q3: Why do we press Ctrl+Z after typing input on Windows?
**A:** `readFileSync(0)` reads until it receives an **EOF (End of File) signal**. On Windows, `Ctrl+Z` sends the EOF signal, telling the program there's no more input to read. On Mac/Linux, use `Ctrl+D` instead.

### Q4: What's the difference between `Ctrl+C` and `Ctrl+Z`?
**A:** `Ctrl+C` sends a **SIGINT** signal that **terminates** the program entirely. `Ctrl+Z` (on Windows) sends an **EOF** signal that tells the program "input is complete" — the program continues executing normally.

### Q5: Can you use `prompt()` in Node.js?
**A:** No. `prompt()` is a **browser-only** function (part of the `window` object). In Node.js, use `readFileSync(0)` or the `readline` module to read user input from the terminal.

### Q6: What is the difference between synchronous and asynchronous input reading?
**A:** `readFileSync` is **synchronous** — it blocks program execution until input is received. `readline` is **asynchronous** — it sets up an event listener and continues executing the next lines of code while waiting for input.

---

## TL;DR

- **`readFileSync(0, 'utf8')`** → reads user input from stdin (keyboard) synchronously.
- **File descriptor `0`** → represents stdin (standard input).
- **`.trim()`** → always use it to remove trailing newline characters.
- **Ctrl+Z (Windows) / Ctrl+D (Mac/Linux)** → sends EOF signal to stop reading input.
- **`prompt()`** → browser-only, does NOT work in Node.js.
- **`readline` module** → alternative for line-by-line, asynchronous input reading.

> **Rule of thumb:** For quick scripts, use `readFileSync(0)`. For interactive CLI apps with multiple prompts, use `readline`. Always call `.trim()` on your input!
