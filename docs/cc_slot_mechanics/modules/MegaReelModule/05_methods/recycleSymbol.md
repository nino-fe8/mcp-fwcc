---
id: "cc_slot_mechanics:MegaReelModule:methods:recycleSymbol"
title: "MegaReelModule.recycleSymbol Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "recycleSymbol"]
---

# 📖 `MegaReelModule.recycleSymbol()`

<!-- convention-summary-start -->
### MegaReelModule.recycleSymbol Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelModule.recycleSymbol Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
recycleSymbol(): void
```

- **Primary Role**: Implements recycleSymbol within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

		if (this.megaSymbolList.length > 0) {
			//when megas symbol out of screen (compares with the bottom symbol), remove it from the list
			const megaSymbol = this.megaSymbolList[this.megaSymbolList.length - 1];
			const symbol = this.listSymbols[this.listSymbols.length - 1];
			if (megaSymbol.position.y < symbol.position.y) {
				this.symbolManager.removeSymbol(megaSymbol);
				this.megaSymbolList.pop();
			}
		}

		super.recycleSymbol();
	}
```
