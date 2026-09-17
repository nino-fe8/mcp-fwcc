---
id: "cc_slot_module:SlotSymbolModule:method:playSymbolIntro"
title: "SlotSymbolModule.playSymbolIntro() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "playSymbolIntro"]
---

# `SlotSymbolModule.playSymbolIntro(symbolCode: string): void`

<!-- convention-summary-start -->
### SlotSymbolModule.playSymbolIntro() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.playSymbolIntro() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public playSymbolIntro(symbolCode: string): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called when introducing an entrance showcase animation for featured symbols.

---

## 3. Detailed Algorithmic Execution Logic
1. Assigns target symbol via `this.changeToSymbol(symbolCode)`.
2. Starts the idle Spine track via `this.playAnimationIdle()`.

---

## 4. Un-truncated Source Code Implementation
```typescript
playSymbolIntro(symbolCode: string): void {
	this.changeToSymbol(symbolCode);
	this.playAnimationIdle();
}
```
