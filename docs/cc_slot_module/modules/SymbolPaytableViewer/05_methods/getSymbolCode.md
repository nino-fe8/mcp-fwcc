---
id: "cc_slot_module:SymbolPaytableViewer:methods:getSymbolCode"
title: "SymbolPaytableViewer.getSymbolCode Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "getSymbolCode"]
---

# 📖 `SymbolPaytableViewer.getSymbolCode()`

<!-- convention-summary-start -->
### SymbolPaytableViewer.getSymbolCode Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer.getSymbolCode Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public getSymbolCode(col: number, row: number): string
```

---

## 2. Complete Source Code Implementation

```typescript
getSymbolCode(col, row): string {
	const symbolCode = this.getSymbolByMatrix(col, row) || this.getSymbolByColRow(col, row);
	return symbolCode;
}
```
