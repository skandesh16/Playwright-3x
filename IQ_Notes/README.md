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
| [Source_code_Byte_code_Binary_IQ.md](Source_code_Byte_code_Binary_IQ.md) | Source Code vs Bytecode vs Binary Code |
