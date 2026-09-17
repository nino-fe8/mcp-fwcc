---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:stopSpin"
title: "RemovedSymbolModule.stopSpin Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "stopSpin"]
---

# 📖 `RemovedSymbolModule.stopSpin()`

<!-- convention-summary-start -->
### RemovedSymbolModule.stopSpin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for RemovedSymbolModule.stopSpin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
stopSpin(matrix?: string[][]): Promise<void>
```

- **Primary Role**: Implements stopSpin within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopSpin(matrix?: string[][]): Promise<void> {
		const { verticalMatrix, listTransformIndex } = this.tableData.formatData();
		this.matrix = verticalMatrix;
		this.transformMatrix = listTransformIndex;

		return new Promise((resolve) => {
			if (this.transformMatrix.length == 0) {
				resolve();
			} else {
				this._tableCallback = resolve;
			}
		});
	}
```
