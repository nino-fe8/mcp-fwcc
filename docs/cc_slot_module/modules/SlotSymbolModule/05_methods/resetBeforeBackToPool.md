---
id: "cc_slot_module:SlotSymbolModule:method:resetBeforeBackToPool"
title: "SlotSymbolModule.resetBeforeBackToPool() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "resetBeforeBackToPool", "node_pool", "memory_cleanup"]
---

# `SlotSymbolModule.resetBeforeBackToPool(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.resetBeforeBackToPool() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.resetBeforeBackToPool() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public resetBeforeBackToPool(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotSymbolManager.removeSymbol()` just before returning the node back into `cc.NodePool`.

---

## 3. Detailed Algorithmic Execution Logic
1. Halts animations via `this.stopAnimation()`.
2. Restores static sprite visibility via `this.showStatic()`.
3. Resets vertex colors back to pure white via `this.resetToColorNormal()`.
4. Frees GPU skeleton buffer via `this.clearSkeletonData()`.

---

## 4. Un-truncated Source Code Implementation
```typescript
resetBeforeBackToPool(): void {
	this.stopAnimation();
	this.showStatic();
	this.resetToColorNormal();
	this.clearSkeletonData();
}
```
