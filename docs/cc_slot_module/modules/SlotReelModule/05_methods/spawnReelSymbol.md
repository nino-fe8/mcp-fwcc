---
id: "cc_slot_module:SlotReelModule:method:spawnReelSymbol"
title: "SlotReelModule.spawnReelSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "spawnReelSymbol", "symbol_spawn", "blur_symbol"]
---

# `SlotReelModule.spawnReelSymbol(): cc.Node`

<!-- convention-summary-start -->
### SlotReelModule.spawnReelSymbol() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotReelModule.spawnReelSymbol() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected spawnReelSymbol(): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks if currently in `ReelSpinState.SHOWING_RESULT` with target data available.
   - If yes: extracts next target symbol code and size from `this.data`, increments `this.reelManager.stop`, and maps visual symbol index.
   - If no: spawns random blur symbol code via `this.getRandomSymbol()`.
2. Validates placement capacity: `this.canPlaceSymbol()`.
3. Invokes `this.spawnSymbol(code, size, isBlurSymbol)`.
4. If a valid symbol index is assigned, stores reference in `this.resultSymbols`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected spawnReelSymbol(): cc.Node {
	let code = "", size = Vec2.ONE;
	let skip = false;
	let stop = 0;
	let indexSymbol = -1;
	let isBlurSymbol = false;

	if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
		const symbolValue = this.data[this.reelManager.index];
		indexSymbol = this.getIndexSymbol(this.reelManager.index);

		if (symbolValue) {
			({ symbolCode: code, symbolSize: size, stop } = this.mapSymbolData(symbolValue));
			this.reelManager.stop += stop;
		} else {
			skip = true;
		}

		this.reelManager.index++;
	} else {
		isBlurSymbol = true;
		({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
	}

	if (!this.canPlaceSymbol() || skip) {
		return;
	}

	const symbol = this.spawnSymbol(code, size, isBlurSymbol);

	if (indexSymbol != SymbolIndexType.UNUSED) {
		SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
		this.resultSymbols.push(symbol);
	}

	return symbol;
}
```
