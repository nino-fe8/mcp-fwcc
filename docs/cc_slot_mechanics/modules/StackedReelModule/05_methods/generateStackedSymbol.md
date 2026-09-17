---
id: "cc_slot_mechanics:StackedReelModule:methods:generateStackedSymbol"
title: "StackedReelModule.generateStackedSymbol Method"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "methods", "generateStackedSymbol"]
---

# 📖 `StackedReelModule.generateStackedSymbol()`

<!-- convention-summary-start -->
### StackedReelModule.generateStackedSymbol Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for StackedReelModule.generateStackedSymbol Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
generateStackedSymbol(isRefill: boolean = false): string[]
```

- **Primary Role**: Implements generateStackedSymbol within the StackedReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
generateStackedSymbol(isRefill: boolean = false): string[] {
		const { stackedCount, stackedSymbols } = this._stackedConfig;

		const randomSymbols = [];
		const totalRandomSymbol = this._showNumber + this.config.BUFFER_BOT;
		if (stackedSymbols.length > 0) {
			if (isRefill && this.resultSymbols.length > 0) {
				const resultSymbols = this.resultSymbols.map(symbol => SlotSymbolModule.getModuleComponent(symbol));
				const topSymbol = resultSymbols[0];
				const indexTopSymbol = stackedSymbols.indexOf(topSymbol.symbolCode);
				if (indexTopSymbol == -1) {
					const symbolCount = resultSymbols.filter(symbol => symbol.symbolCode == topSymbol.symbolCode).length;
					const countStacked = stackedCount[indexTopSymbol] - symbolCount;
					randomSymbols.push(...Array(countStacked).fill(topSymbol.symbolCode))
				}
			}

			const isRandomStack = Math.random() >= 0.5;

			if (isRandomStack) {
				const randomIndex = Math.floor(Math.random() * stackedSymbols.length);
				const symbolName = stackedSymbols[randomIndex];
				const count = stackedCount[randomIndex];
				randomSymbols.push(...Array(count).fill(symbolName));
			}
		}

		for (let index = randomSymbols.length - 1; index < totalRandomSymbol; index++) {
			randomSymbols.push(this.getRandomSymbolWithException().symbolCode);
		}

		return randomSymbols;
	}
```
