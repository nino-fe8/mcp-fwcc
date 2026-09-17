---
id: "cc_slot_module:PaylineLineModule:methods:setupPaylines"
title: "PaylineLineModule.setupPaylines Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "setupPaylines"]
---

# 📖 `PaylineLineModule.setupPaylines()`

<!-- convention-summary-start -->
### PaylineLineModule.setupPaylines Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule.setupPaylines Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stores the parsed `payLines` payload sent via `PAYLINE_SET_DATA`.

```typescript
protected setupPaylines(data: { matrix: string[][], payLines: PayLineInfo[] }): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected setupPaylines(data: { matrix: string[][], payLines: PayLineInfo[] }): void {
    this.payLines = data.payLines;
}
```
