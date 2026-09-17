---
id: "cc_slot_module:SlotSymbolModule:method:playAnimationDisappear"
title: "SlotSymbolModule.playAnimationDisappear() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "playAnimationDisappear", "cascade"]
---

# `SlotSymbolModule.playAnimationDisappear(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.playAnimationDisappear() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.playAnimationDisappear() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public playAnimationDisappear(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called during cascading reel explosions (e.g. avalanche eliminate step).

---

## 3. Detailed Algorithmic Execution Logic
1. Starts non-looping disappear track: `this.playAnimation(this.animName.disappear, false)`.

---

## 4. Un-truncated Source Code Implementation
```typescript
playAnimationDisappear(): void {
	this.playAnimation(this.animName.disappear, false);
}
```
