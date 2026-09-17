---
id: "cc_slot_mechanics:RemovedSymbolData:methods:getFormatMatrix"
title: "RemovedSymbolData.getFormatMatrix Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "methods", "getFormatMatrix"]
---

# 📖 `RemovedSymbolData.getFormatMatrix()`

<!-- convention-summary-start -->
### RemovedSymbolData.getFormatMatrix Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for RemovedSymbolData.getFormatMatrix Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
getFormatMatrix(): string[]
```

- **Primary Role**: Implements getFormatMatrix within the RemovedSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getFormatMatrix(): string[] {
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				return this["normalFormatMatrix"] || this["formatMatrix"];
			case GAME_MODE_ENUM.FREE_GAME:
				return this["freeFormatMatrix"] || this["formatMatrix"];
		}
	}
```
