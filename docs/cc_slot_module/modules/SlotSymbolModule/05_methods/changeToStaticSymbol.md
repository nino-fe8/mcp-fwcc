---
id: "cc_slot_module:SlotSymbolModule:method:changeToStaticSymbol"
title: "SlotSymbolModule.changeToStaticSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "changeToStaticSymbol"]
---

# `SlotSymbolModule.changeToStaticSymbol(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.changeToStaticSymbol() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.changeToStaticSymbol() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public changeToStaticSymbol(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Ensures `this.resourceManager` is loaded.
2. Invokes `this.showStatic()` to make `cc.Sprite` visible and hide `sp.Skeleton`.
3. Loads and applies the static sprite frame and background card frame.

---

## 3. Un-truncated Source Code Implementation
```typescript
changeToStaticSymbol(): void {
	if (!this.resourceManager) {
		this.setResourceManager();
	}
	this.showStatic();

	const symbolName = this.getSymbolName();
	const symbolFrame = this.resourceManager.getSymbolFrame(symbolName);
	this.updateSymbolFrame(symbolFrame);

	const backgroundFrame = this.resourceManager.getBackgroundFrame(symbolName);
	this.updateBackgroundFrame(backgroundFrame);
}
```
