---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:convertRow"
title: "RemovedSymbolModule.convertRow Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "convertRow"]
---

# 📖 `RemovedSymbolModule.convertRow()`

<!-- convention-summary-start -->
### RemovedSymbolModule.convertRow Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for RemovedSymbolModule.convertRow Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
convertRow(col: number, row: number): number
```

- **Primary Role**: Implements convertRow within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected convertRow(col: number, row: number): number {
		let r = 0;
		for (let j = 0; j < this.matrix[col].length; j++) {
			const value = this.matrix[col][j];
			const { size } = this.mapSymbolData(value);
			r = r + size - 1;
			if (j == row) {
				return r;
			} else {
				r++;
			}  
		}
		return -1;
	}
```
