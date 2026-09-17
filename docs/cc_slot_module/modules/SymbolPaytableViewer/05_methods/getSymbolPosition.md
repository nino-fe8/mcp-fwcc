---
id: "cc_slot_module:SymbolPaytableViewer:methods:getSymbolPosition"
title: "SymbolPaytableViewer.getSymbolPosition Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "getSymbolPosition"]
---

# 📖 `SymbolPaytableViewer.getSymbolPosition()`

<!-- convention-summary-start -->
### SymbolPaytableViewer.getSymbolPosition Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer.getSymbolPosition Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public getSymbolPosition(col: number, row: number): cc.Vec2
```

---

## 2. Complete Source Code Implementation

```typescript
getSymbolPosition(col, row): cc.Vec2 {
	const { TABLE_FORMAT, SYMBOL_WIDTH, SYMBOL_HEIGHT } = this._config;
	const startX = -(TABLE_FORMAT.length / 2 - 0.5) * SYMBOL_WIDTH;
	const x = startX + SYMBOL_WIDTH * col;
	const y = (TABLE_FORMAT[col] / 2 - row - 0.5) * SYMBOL_HEIGHT;
	return v2(x, y);
}
```
