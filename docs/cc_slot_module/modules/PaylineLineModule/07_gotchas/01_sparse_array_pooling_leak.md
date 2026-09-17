---
id: "cc_slot_module:PaylineLineModule:gotchas:sparse_array_pooling_leak"
title: "Gotcha: Sparse Array Indexing with this.lines[lineID]"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "gotchas", "sparse_array", "memory_leak"]
---

# ⚠️ Gotcha: Sparse Array Indexing with `this.lines[lineID]`

<!-- convention-summary-start -->
### Gotcha: Sparse Array Indexing with this.lines[lineID] Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Sparse Array Indexing with this.lines[lineID].
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `PaylineLineModule.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `PaylineLineModule.ts`, line items are assigned using line index as key:
```typescript
this.lines[lineID] = line;
```
If a slot game has 50 paylines and only Line 50 hits, `this.lines[50]` creates an array of length 51 with indices 0 through 49 containing `undefined`.

---

## 2. Root Cause

JavaScript arrays with holes (`Array.prototype.forEach`) skip empty indices, which is safe, but resetting with `this.lines.length = 0` requires careful cleanup to avoid leaving orphaned nodes if non-integer IDs are passed.

---

## 3. Recommended Fix / Best Practice

Ensure line item prefabs handle `"RESET"` properly, or map instances using a dictionary `Record<number, cc.Node>`.
