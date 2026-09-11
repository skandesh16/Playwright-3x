# VS Code Commands & Shortcuts — Complete Reference (Windows)

## Example used

```
Scenario: You open VS Code, create a new JavaScript file, write some code,
use IntelliSense, format it, toggle the terminal, run it, debug it,
commit it with Git — all without touching the mouse.
```

## What happens in this workflow (example walkthrough)

1. **`Ctrl + Shift + P`** opens the Command Palette — the gateway to every VS Code command.
2. **`Ctrl + N`** creates a new untitled file; **`Ctrl + K M`** sets the language mode to JavaScript.
3. You type code and **`Ctrl + Space`** triggers IntelliSense suggestions.
4. **`Shift + Alt + F`** auto-formats the entire file.
5. **`` Ctrl + ` ``** opens the integrated terminal to run the file with `node`.
6. **`F5`** launches the debugger; **`F9`** toggles a breakpoint on the current line.
7. **`Ctrl + Shift + G`** opens Source Control; you stage, commit, and push — all from the keyboard.

---

## 1 — General / File Commands

| Shortcut | Command | What It Does |
|---|---|---|
| `Ctrl + Shift + P` | Command Palette | Opens the command palette — search & run **any** VS Code command |
| `Ctrl + P` | Quick Open | Quickly open a file by name |
| `Ctrl + Shift + N` | New Window | Opens a new VS Code window |
| `Ctrl + N` | New File | Creates a new untitled file |
| `Ctrl + O` | Open File | Opens a file from the file system |
| `Ctrl + K Ctrl + O` | Open Folder | Opens a folder as a workspace |
| `Ctrl + S` | Save | Saves the current file |
| `Ctrl + Shift + S` | Save As | Saves the current file with a new name/location |
| `Ctrl + K S` | Save All | Saves all open files |
| `Ctrl + W` | Close Editor | Closes the current editor tab |
| `Ctrl + K Ctrl + W` | Close All Editors | Closes all open editor tabs |
| `Ctrl + Shift + T` | Reopen Closed Editor | Reopens the last closed editor tab |
| `Ctrl + Tab` | Switch Editor | Cycles through open editor tabs |
| `Ctrl + ,` | Settings | Opens the Settings UI |
| `Ctrl + K Ctrl + S` | Keyboard Shortcuts | Opens the keyboard shortcuts editor |

---

## 2 — Editing Commands

| Shortcut | Command | What It Does |
|---|---|---|
| `Ctrl + X` | Cut Line | Cuts the entire line (when nothing is selected) |
| `Ctrl + C` | Copy Line | Copies the entire line (when nothing is selected) |
| `Ctrl + V` | Paste | Pastes from clipboard |
| `Ctrl + Shift + K` | Delete Line | Deletes the entire current line |
| `Ctrl + Enter` | Insert Line Below | Inserts a blank line below the cursor |
| `Ctrl + Shift + Enter` | Insert Line Above | Inserts a blank line above the cursor |
| `Alt + ↑` | Move Line Up | Moves the current line up |
| `Alt + ↓` | Move Line Down | Moves the current line down |
| `Shift + Alt + ↑` | Copy Line Up | Duplicates the current line above |
| `Shift + Alt + ↓` | Copy Line Down | Duplicates the current line below |
| `Ctrl + Z` | Undo | Undoes the last action |
| `Ctrl + Y` | Redo | Redoes the last undone action |
| `Ctrl + Shift + \` | Jump to Bracket | Jumps to the matching bracket |
| `Ctrl + ]` | Indent Line | Increases line indentation |
| `Ctrl + [` | Outdent Line | Decreases line indentation |
| `Ctrl + /` | Toggle Line Comment | Comments/uncomments the current line (`// ...`) |
| `Shift + Alt + A` | Toggle Block Comment | Wraps selection in a block comment (`/* ... */`) |
| `Shift + Alt + F` | Format Document | Auto-formats the entire file |
| `Ctrl + K Ctrl + F` | Format Selection | Auto-formats only the selected code |

---

## 3 — Multi-Cursor & Selection

| Shortcut | Command | What It Does |
|---|---|---|
| `Alt + Click` | Add Cursor | Places an additional cursor at the clicked position |
| `Ctrl + Alt + ↑` | Add Cursor Above | Adds a cursor on the line above |
| `Ctrl + Alt + ↓` | Add Cursor Below | Adds a cursor on the line below |
| `Ctrl + D` | Add Next Occurrence | Selects the next occurrence of the current word |
| `Ctrl + Shift + L` | Select All Occurrences | Selects **all** occurrences of the current word |
| `Ctrl + L` | Select Line | Selects the entire current line |
| `Ctrl + Shift + →` | Expand Word Selection | Extends selection to the right by one word |
| `Ctrl + Shift + ←` | Shrink Word Selection | Shrinks selection to the left by one word |
| `Shift + Alt + (drag)` | Column Selection | Selects a rectangular block of text |
| `Ctrl + U` | Undo Cursor | Undoes the last cursor action |

---

## 4 — Search & Replace

| Shortcut | Command | What It Does |
|---|---|---|
| `Ctrl + F` | Find | Opens the find widget in the current file |
| `Ctrl + H` | Replace | Opens find & replace in the current file |
| `F3` | Find Next | Jumps to the next search match |
| `Shift + F3` | Find Previous | Jumps to the previous search match |
| `Alt + Enter` | Select All Matches | Selects all occurrences of the search term |
| `Ctrl + Shift + F` | Search in Files | Opens global search across all files |
| `Ctrl + Shift + H` | Replace in Files | Opens global find & replace across all files |
| `Alt + C` | Toggle Case Sensitive | Toggles case-sensitive search (in find widget) |
| `Alt + R` | Toggle Regex | Toggles regex mode in search (in find widget) |
| `Alt + W` | Toggle Whole Word | Toggles match whole word (in find widget) |

---

## 5 — Navigation

| Shortcut | Command | What It Does |
|---|---|---|
| `Ctrl + G` | Go to Line | Jumps to a specific line number |
| `Ctrl + P` | Go to File | Quickly opens a file by name |
| `Ctrl + Shift + O` | Go to Symbol | Jumps to a symbol (function, class, etc.) in the current file |
| `Ctrl + T` | Go to Symbol in Workspace | Searches for a symbol across the entire workspace |
| `F12` | Go to Definition | Navigates to the definition of a symbol |
| `Alt + F12` | Peek Definition | Shows the definition inline without navigating away |
| `Shift + F12` | Find All References | Lists all references to a symbol |
| `Ctrl + Shift + M` | Problems Panel | Opens the Problems panel (errors, warnings) |
| `F8` | Next Error/Warning | Jumps to the next error or warning |
| `Shift + F8` | Previous Error/Warning | Jumps to the previous error or warning |
| `Alt + ←` | Go Back | Navigates back to the previous cursor position |
| `Alt + →` | Go Forward | Navigates forward to the next cursor position |
| `Ctrl + Home` | Go to Beginning | Moves cursor to the beginning of the file |
| `Ctrl + End` | Go to End | Moves cursor to the end of the file |

---

## 6 — Display & Layout

| Shortcut | Command | What It Does |
|---|---|---|
| `Ctrl + B` | Toggle Sidebar | Shows/hides the primary sidebar |
| `Ctrl + J` | Toggle Panel | Shows/hides the bottom panel (terminal, output, etc.) |
| `Ctrl + Shift + E` | Explorer | Opens the Explorer sidebar |
| `Ctrl + Shift + F` | Search | Opens the Search sidebar |
| `Ctrl + Shift + G` | Source Control | Opens the Source Control (Git) sidebar |
| `Ctrl + Shift + D` | Debug | Opens the Run & Debug sidebar |
| `Ctrl + Shift + X` | Extensions | Opens the Extensions sidebar |
| `Ctrl + \` | Split Editor | Splits the editor into two side-by-side panes |
| `Ctrl + 1 / 2 / 3` | Focus Editor Group | Focuses editor group 1, 2, or 3 |
| `Ctrl + K Z` | Zen Mode | Enters distraction-free Zen Mode |
| `F11` | Full Screen | Toggles full-screen mode |
| `Ctrl + =` | Zoom In | Increases the editor font size |
| `Ctrl + -` | Zoom Out | Decreases the editor font size |
| `Ctrl + Shift + V` | Markdown Preview | Opens a markdown preview |
| `Ctrl + K V` | Side-by-Side Preview | Opens markdown preview to the side |

---

## 7 — Terminal Commands

| Shortcut | Command | What It Does |
|---|---|---|
| `` Ctrl + ` `` | Toggle Terminal | Opens/closes the integrated terminal |
| `` Ctrl + Shift + ` `` | New Terminal | Creates a new terminal instance |
| `Ctrl + Shift + C` | External Terminal | Opens an external terminal at the workspace root |
| `Ctrl + ↑ / ↓` | Scroll Terminal | Scrolls up/down in the terminal |
| `Ctrl + Shift + 5` | Split Terminal | Splits the terminal pane |

---

## 8 — Debugging

| Shortcut | Command | What It Does |
|---|---|---|
| `F5` | Start / Continue Debugging | Launches the debugger or continues execution |
| `Shift + F5` | Stop Debugging | Stops the running debug session |
| `Ctrl + Shift + F5` | Restart Debugging | Restarts the debug session |
| `F9` | Toggle Breakpoint | Adds/removes a breakpoint on the current line |
| `F10` | Step Over | Executes the next line, skipping function internals |
| `F11` | Step Into | Steps into the function call on the current line |
| `Shift + F11` | Step Out | Steps out of the current function |
| `Ctrl + K Ctrl + I` | Show Hover | Shows the debug hover (variable inspection) |

---

## 9 — IntelliSense & Refactoring

| Shortcut | Command | What It Does |
|---|---|---|
| `Ctrl + Space` | Trigger Suggestions | Opens IntelliSense autocomplete list |
| `Ctrl + Shift + Space` | Parameter Hints | Shows function parameter information |
| `F2` | Rename Symbol | Renames a symbol across all files |
| `Ctrl + .` | Quick Fix | Shows available code actions (fixes, refactors) |
| `Ctrl + Shift + R` | Refactor | Opens the refactoring menu |
| `Ctrl + K Ctrl + I` | Show Hover Info | Shows type/documentation hover for a symbol |

---

## 10 — Git / Source Control

| Shortcut | Command | What It Does |
|---|---|---|
| `Ctrl + Shift + G` | Open Source Control | Opens the Git source control panel |
| `Ctrl + Shift + P` → `Git: Clone` | Clone Repository | Clones a Git repository |
| `Ctrl + Shift + P` → `Git: Commit` | Commit | Commits staged changes |
| `Ctrl + Shift + P` → `Git: Push` | Push | Pushes commits to the remote |
| `Ctrl + Shift + P` → `Git: Pull` | Pull | Pulls changes from the remote |
| `Ctrl + Shift + P` → `Git: Checkout to...` | Switch Branch | Switches to a different Git branch |

---

## 11 — Emmet (HTML/CSS Productivity)

| Shortcut | Command | What It Does |
|---|---|---|
| `Tab` | Expand Emmet Abbreviation | Expands an Emmet abbreviation (e.g., `div.container>ul>li*3`) |
| `Ctrl + Shift + P` → `Emmet: Wrap` | Wrap with Abbreviation | Wraps selected text with an Emmet abbreviation |
| `Ctrl + Shift + P` → `Emmet: Balance Outward` | Balance Outward | Expands selection to the parent tag |

---

## 12 — Miscellaneous Power Shortcuts

| Shortcut | Command | What It Does |
|---|---|---|
| `Ctrl + K M` | Change Language Mode | Sets the language/syntax highlighting for the file |
| `Ctrl + K Ctrl + T` | Change Theme | Opens the color theme picker |
| `Ctrl + Shift + P` → `Preferences: Color Theme` | Color Theme | Same as above — via command palette |
| `Ctrl + K Ctrl + X` | Trim Trailing Whitespace | Removes trailing whitespace from all lines |
| `Ctrl + Shift + [` | Fold Region | Collapses the current code block |
| `Ctrl + Shift + ]` | Unfold Region | Expands a collapsed code block |
| `Ctrl + K Ctrl + 0` | Fold All | Collapses all code blocks |
| `Ctrl + K Ctrl + J` | Unfold All | Expands all collapsed code blocks |
| `Ctrl + K Ctrl + C` | Add Line Comment | Adds a line comment to the selection |
| `Ctrl + K Ctrl + U` | Remove Line Comment | Removes line comment from the selection |

---

## Pipeline Diagram

```
VS Code Keyboard Shortcut Workflow
────────────────────────────────────

  Open / Create           Edit & Write            Navigate & Search        Run & Debug
  ─────────────           ────────────            ─────────────────        ───────────
  Ctrl+Shift+P            Ctrl+X / C / V          Ctrl+P (Quick Open)     F5 (Start Debug)
  (Command Palette)       Ctrl+Z / Y              Ctrl+G (Go to Line)     F9 (Breakpoint)
  Ctrl+N (New File)       Ctrl+D (Multi-cursor)   F12 (Go to Def)         F10 (Step Over)
  Ctrl+O (Open File)      Shift+Alt+F (Format)    Ctrl+Shift+F (Search)   F11 (Step Into)
        │                 Ctrl+/ (Comment)        Ctrl+T (Symbol)         Ctrl+` (Terminal)
        ▼                       │                       │                       │
  File opened in          Code written            Found the right         Code executed
  the editor              and formatted           location / symbol       and debugged
        │                       │                       │                       │
        ▼                       ▼                       ▼                       ▼
  ─────────────────────────────────────────────────────────────────────────────────
                    Ctrl+Shift+G (Git) → Stage → Commit → Push
  ─────────────────────────────────────────────────────────────────────────────────
```

---

## Top 20 Must-Know Shortcuts (Quick Reference)

| # | Shortcut | Why It's Essential |
|---|---|---|
| 1 | `Ctrl + Shift + P` | Your gateway to **every** command in VS Code |
| 2 | `Ctrl + P` | Open any file instantly without browsing folders |
| 3 | `Ctrl + D` | Select & edit multiple identical words at once |
| 4 | `Ctrl + /` | Quickly comment/uncomment code |
| 5 | `Shift + Alt + F` | Format messy code in one keystroke |
| 6 | `Ctrl + F` / `Ctrl + H` | Find and replace text |
| 7 | `Ctrl + Shift + F` | Search across all files in the project |
| 8 | `` Ctrl + ` `` | Toggle terminal without leaving the editor |
| 9 | `Ctrl + B` | Hide/show sidebar for more coding space |
| 10 | `Alt + ↑ / ↓` | Move lines up/down without cut-paste |
| 11 | `F12` | Jump straight to a function/variable definition |
| 12 | `F2` | Rename a symbol everywhere at once |
| 13 | `Ctrl + Space` | Trigger IntelliSense suggestions |
| 14 | `Ctrl + .` | Quick fix — auto-import, refactor, fix errors |
| 15 | `F5` | Launch the debugger |
| 16 | `F9` | Toggle breakpoints |
| 17 | `Ctrl + \` | Split the editor for side-by-side editing |
| 18 | `Ctrl + Shift + E` | Jump to the Explorer sidebar |
| 19 | `Ctrl + W` | Close the current tab |
| 20 | `Ctrl + Z` / `Ctrl + Y` | Undo / Redo — the universal safety net |

---

## TL;DR

- **Command Palette (`Ctrl + Shift + P`)** — the single most important shortcut; it can do *anything*.
- **Quick Open (`Ctrl + P`)** — navigate files without touching the mouse.
- **Multi-Cursor (`Ctrl + D`, `Alt + Click`)** — edit multiple places simultaneously.
- **Formatting (`Shift + Alt + F`)** — instant code beautification.
- **Terminal (`` Ctrl + ` ``)** — run code without leaving the editor.
- **Debugging (`F5`, `F9`, `F10`, `F11`)** — full debug workflow from the keyboard.
- **Git (`Ctrl + Shift + G`)** — source control built right into VS Code.

> **Rule of thumb:** Learn the Command Palette first — if you forget any shortcut, `Ctrl + Shift + P` will find it for you.
