---
id: "cc_slot_module:SlotTableModule:method:getSymbolByCol"
title: "SlotTableModule.getSymbolByCol() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "getSymbolByCol"]
---

# `SlotTableModule.getSymbolByCol(col: number): cc.Node[]`

<!-- convention-summary-start -->
### SlotTableModule.getSymbolByCol() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.getSymbolByCol() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
getSymbolByCol(col: number): cc.Node[]
```

---

## 2. Detailed Algorithmic Execution Logic
Validates column index `this.reels[col]`; returns `this.reels[col].getRealSymbols()` array or `null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolByCol(col: number): cc.Node[] {
    if (!this.reels[col]) {
        return null;
    }
    return this.reels[col].getRealSymbols();
}
```
