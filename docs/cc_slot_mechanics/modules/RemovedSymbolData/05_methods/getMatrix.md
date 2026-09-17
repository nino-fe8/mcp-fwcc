---
id: "cc_slot_mechanics:RemovedSymbolData:methods:getMatrix"
title: "RemovedSymbolData.getMatrix Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `RemovedSymbolData.getMatrix()`

<!-- convention-summary-start -->
### RemovedSymbolData.getMatrix Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for RemovedSymbolData.getMatrix Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
getMatrix(): string[]
```

- **Primary Role**: Implements getMatrix within the RemovedSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getMatrix(): string[] {
		let matrix = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				matrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				matrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
		}
		return matrix;
	}
```
