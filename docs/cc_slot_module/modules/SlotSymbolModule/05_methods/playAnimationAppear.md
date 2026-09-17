---
id: "cc_slot_module:SlotSymbolModule:method:playAnimationAppear"
title: "SlotSymbolModule.playAnimationAppear() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "playAnimationAppear"]
---

# `SlotSymbolModule.playAnimationAppear(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.playAnimationAppear() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.playAnimationAppear() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public playAnimationAppear(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Starts non-looping appear track: `this.playAnimation(this.animName.appear, false)`.
2. Queues looping idle track upon completion: `this.addAnimation(this.animName.idle, true)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
playAnimationAppear(): void {
	this.playAnimation(this.animName.appear, false);
	this.addAnimation(this.animName.idle, true);
}
```
