---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:updateSymbolList"
title: "RemovedSymbolModule.updateSymbolList Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "updateSymbolList"]
---

# 📖 `RemovedSymbolModule.updateSymbolList()`

<!-- convention-summary-start -->
### RemovedSymbolModule.updateSymbolList Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for RemovedSymbolModule.updateSymbolList Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
updateSymbolList(): void
```

- **Primary Role**: Implements updateSymbolList within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected updateSymbolList(): void {
		let index = 0;
		for (let i = 0; i < this.matrix.length; i++) {
			let row = 0;
			for (let j = 0; j < this.matrix[i].length; j++) {
				const symbolValue = this.matrix[i][j];
				if (symbolValue == "") {
					continue;
				}

				const { size } = this.mapSymbolData(symbolValue);
				row = row + size - 1;
				index = this.getSymbolIndex(i, row);
                
				const symbol = this.symbolManager.getSymbolByIndex(index, SymbolOwnerType.REMOVED_SYMBOL);
				if (symbol) {
					this.listSymbols[i][row] = symbol;
                    
					symbol.setParent(this.table);
					symbol.active = true;
                    
					const position = this.tableConfig.positions[i][row];
					if (size > 1) {
						symbol.setPosition(new cc.Vec2(position.x, position.y + (size - 1) * this.tableConfig.cellSize.y * 0.5));
					} else {
						symbol.setPosition(position);
					}
				}

				row++;
			}
		}
	}
```
