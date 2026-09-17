---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:transformSymbols"
title: "RemovedSymbolModule.transformSymbols Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "transformSymbols"]
---

# 📖 `RemovedSymbolModule.transformSymbols()`

<!-- convention-summary-start -->
### RemovedSymbolModule.transformSymbols Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for RemovedSymbolModule.transformSymbols Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
transformSymbols(): void
```

- **Primary Role**: Implements transformSymbols within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected transformSymbols(): void {
		for (let i = 0; i < this.transformMatrix.length; i++) {
			const { col, row, symbolValue } = this.transformMatrix[i];
			const { code, size } = this.mapSymbolData(symbolValue);
			const r = this.convertRow(col, row);
			const symbol = this.createNewSymbol(col, r, code, size);
			if (symbol) {
				const position = this.tableConfig.positions[col][r];
				if (size > 1) {
					symbol.setPosition(new cc.Vec2(position.x, position.y + (size - 1) * this.tableConfig.cellSize.y * 0.5));
				} else {
					symbol.setPosition(position);
				}   
				this.listSymbols[col][r] = symbol;
			}
		}
	}
```
