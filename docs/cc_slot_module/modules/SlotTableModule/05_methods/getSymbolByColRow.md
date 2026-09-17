---
id: "cc_slot_module:SlotTableModule:method:getSymbolByColRow"
title: "SlotTableModule.getSymbolByColRow() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "getSymbolByColRow"]
---

# `SlotTableModule.getSymbolByColRow(col: number, row: number): cc.Node`

<!-- convention-summary-start -->
### SlotTableModule.getSymbolByColRow() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.getSymbolByColRow() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
getSymbolByColRow(col: number, row: number): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
Validates column index `this.reels[col]`; returns `this.reels[col].getSymbolByRow(row)` or `null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolByColRow(col: number, row: number): cc.Node {
    if (!this.reels[col]) {
        return null;
    }
    return this.reels[col].getSymbolByRow(row);
}
```
