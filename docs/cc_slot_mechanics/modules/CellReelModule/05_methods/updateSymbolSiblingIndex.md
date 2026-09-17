---
id: "cc_slot_mechanics:CellReelModule:methods:updateSymbolSiblingIndex"
title: "CellReelModule.updateSymbolSiblingIndex Method Implementation"
category: "cc_slot_mechanics"
tags: ["CellReelModule", "cell_reel_module", "cc_slot_mechanics", "methods", "updateSymbolSiblingIndex"]
---

# 📖 `CellReelModule.updateSymbolSiblingIndex()`

<!-- convention-summary-start -->
### CellReelModule.updateSymbolSiblingIndex Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CellReelModule.updateSymbolSiblingIndex Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
updateSymbolSiblingIndex(this.listSymbols); } getIndexSymbol(indexData: number): number
```

- **Scope**: `CellReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
updateSymbolSiblingIndex(this.listSymbols);
	}

	getIndexSymbol(indexData: number): number {
		const indexConfig = this.config.SYMBOL_INDEXES[this.reelIndex];
		const symbolsIndex = [indexConfig[this.reelRow]];

		const bufferTop = Array(this.config.BUFFER_TOP).fill(-1);
		const bufferBot = Array(this.config.BUFFER_BOT).fill(-1);
		symbolsIndex.push(...bufferTop);
		symbolsIndex.unshift(...bufferBot);

		return symbolsIndex[indexData];
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
