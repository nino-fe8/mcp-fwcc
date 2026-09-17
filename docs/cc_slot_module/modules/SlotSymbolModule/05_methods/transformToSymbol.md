---
id: "cc_slot_module:SlotSymbolModule:method:transformToSymbol"
title: "SlotSymbolModule.transformToSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "transformToSymbol", "wild_expansion", "mystery_symbol"]
---

# `SlotSymbolModule.transformToSymbol(symbolCode: string): void`

<!-- convention-summary-start -->
### SlotSymbolModule.transformToSymbol() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.transformToSymbol() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public transformToSymbol(symbolCode: string): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `TransformSymbolModule` during Wild expansion, sticky multiplier transforms, or Mystery Symbol reveals.

---

## 3. Detailed Algorithmic Execution Logic
1. Updates the static sprite frame and background for the new target code via `this.changeToSymbol(symbolCode)`.
2. Starts the continuous idle Spine breathing loop for the newly transformed symbol via `this.playAnimationIdle()`.

---

## 4. Un-truncated Source Code Implementation
```typescript
transformToSymbol(symbolCode: string): void {
	this.changeToSymbol(symbolCode);
	this.playAnimationIdle();
}
```
