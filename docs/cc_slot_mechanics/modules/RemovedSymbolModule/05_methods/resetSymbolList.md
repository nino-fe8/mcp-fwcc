---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:resetSymbolList"
title: "RemovedSymbolModule.resetSymbolList Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "resetSymbolList"]
---

# 📖 `RemovedSymbolModule.resetSymbolList()`

<!-- convention-summary-start -->
### RemovedSymbolModule.resetSymbolList Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for RemovedSymbolModule.resetSymbolList Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
resetSymbolList(): void
```

- **Primary Role**: Implements resetSymbolList within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected resetSymbolList(): void {
		const listIndex = this.getConfig().SYMBOL_INDEXES;
		for (let i = 0; i < listIndex.length; i++) {
			this.listSymbols[i] = [];
			for (let j = 0; j < listIndex[i].length; j++) {
				this.listSymbols[i][j] = null;
			}
		}
	}
```
