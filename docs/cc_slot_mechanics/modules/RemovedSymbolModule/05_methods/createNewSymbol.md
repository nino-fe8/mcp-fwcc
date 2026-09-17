---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:createNewSymbol"
title: "RemovedSymbolModule.createNewSymbol Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "createNewSymbol"]
---

# 📖 `RemovedSymbolModule.createNewSymbol()`

<!-- convention-summary-start -->
### RemovedSymbolModule.createNewSymbol Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for RemovedSymbolModule.createNewSymbol Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
createNewSymbol(col: number, row: number, code: string, size: number): cc.Node
```

- **Primary Role**: Implements createNewSymbol within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected createNewSymbol(col: number, row: number, code: string, size: number): cc.Node {
		const symbol = this.symbolManager.getSymbolByIndex(SymbolIndexType.UNUSED, SymbolOwnerType.REMOVED_SYMBOL);
		const symbolModule = SlotSymbolModule.getModuleComponent(symbol);
		if (symbolModule) {
			symbolModule.init(code, new Vec2(1, size));
			symbolModule.changeToSymbol(code);
			symbolModule.index = this.getSymbolIndex(col, row);
		}
		symbol.setParent(this.table);
		symbol.active = true;

		return symbol;
	}
```
