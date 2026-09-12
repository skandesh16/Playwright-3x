# IQ Notes

This folder collects short concept explanations, written as `.md` files, one per topic/question. Each file follows the same template so the notes stay consistent and easy to skim.

## Standard prompt

Use this prompt (fill in the concept) to request a new note:

> Explain [YOUR CONCEPT] in a table view with clear comparison columns. Use a simple code/file example to walk through each layer. Save it as a `.md` file inside the `IQ_Notes` folder. Follow the same visual style as `Source_code_Byte_code_Binary_IQ.md` — breakdown table, example walkthrough, pipeline diagram, and TL;DR.

## Template

Use this structure when adding a new note (see `Source_code_Byte_code_Binary_IQ.md` for a filled-in example):

```markdown
# <Concept A> vs <Concept B> (vs <Concept C>...)

## Example used

\`\`\`<language>
<code snippet used as the running example>
\`\`\`

## What happens to this code (example walkthrough)

1. Step-by-step walkthrough of how the example relates to the concept.
2. ...
3. ...

## Comparison Table

| Aspect | <Concept A> | <Concept B> | <Concept C> |
|---|---|---|---|
| Definition | ... | ... | ... |
| Example | ... | ... | ... |
| ... | ... | ... | ... |

## Pipeline Diagram

<Concept A> → <Concept B> → <Concept C>
(one line per stage transition, e.g. "compiled by X into", "executed by Y as")

## TL;DR

- One-line takeaway per concept.
- A short summary sentence tying them together.
```

## Naming convention

`<Topic_Name>_IQ.md` — e.g. `Source_code_Byte_code_Binary_IQ.md`.

## Index

| File | Topic |
|---|---|
| [01_Indentifier_rules.md](01_Indentifier_rules.md) | JavaScript Identifier Rules — Complete Reference |
| [Source_code_Byte_code_Binary_IQ.md](Source_code_Byte_code_Binary_IQ.md) | Source Code vs Bytecode vs Binary Code |
| [02_keyword.md](02_keyword.md) | JavaScript Keywords — Complete Reference |
| [03_commands_notes.md](03_commands_notes.md) | VS Code Commands & Shortcuts — Complete Reference (Windows) |
| [04_Literals_notes.md](04_Literals_notes.md) | JavaScript Literals — Complete Reference (Null vs Undefined, Data Types) |
| [05_Operaters_notes.md](05_Operaters_notes.md) | JavaScript Operators — Complete Reference (Assignment, Arithmetic, Comparison, Logical) |
