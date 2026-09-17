---
id: "cc_slot_module:SymbolPaytableViewer:methods:getSymbolByMatrix"
title: "SymbolPaytableViewer.getSymbolByMatrix Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "getSymbolByMatrix"]
---

# 📖 `SymbolPaytableViewer.getSymbolByMatrix()`

<!-- convention-summary-start -->
### SymbolPaytableViewer.getSymbolByMatrix Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer.getSymbolByMatrix Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public getSymbolByMatrix(col: number, row: number): string | null
```

---

## 2. Complete Source Code Implementation

```typescript
getSymbolByMatrix(col, row): string | null {
	if (!this.dataStore.hasPlaySession()) {
		return null;
	}
	const matrix = this._slotTableData.getResumeMatrix();
	if (matrix && matrix[col] && matrix[col][row]) {
		return matrix[col][row];
	} else {
		return null;
	}
}
```
