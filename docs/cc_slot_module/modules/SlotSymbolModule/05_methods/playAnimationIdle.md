---
id: "cc_slot_module:SlotSymbolModule:method:playAnimationIdle"
title: "SlotSymbolModule.playAnimationIdle() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "playAnimationIdle"]
---

# `SlotSymbolModule.playAnimationIdle(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.playAnimationIdle() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.playAnimationIdle() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public playAnimationIdle(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Starts continuous looping idle track: `this.playAnimation(this.animName.idle, true)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
playAnimationIdle(): void {
	this.playAnimation(this.animName.idle, true);
}
```
