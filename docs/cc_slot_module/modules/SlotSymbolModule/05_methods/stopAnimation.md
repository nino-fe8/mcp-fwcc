---
id: "cc_slot_module:SlotSymbolModule:method:stopAnimation"
title: "SlotSymbolModule.stopAnimation() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "stopAnimation", "cleanup"]
---

# `SlotSymbolModule.stopAnimation(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.stopAnimation() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.stopAnimation() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public stopAnimation(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called when clearing winning paylines, skipping effects, or resetting table.

---

## 3. Detailed Algorithmic Execution Logic
1. Activates static sprite: `this.showStatic()`.
2. Clears Spine complete listeners and resets bones to setup pose: `this.spine.setToSetupPose()`.
3. Flags `this.isPlaying = false`.

---

## 4. Un-truncated Source Code Implementation
```typescript
stopAnimation(): void {
	this.showStatic();
	if (this.spine && this.hasSkeletonData) {
		this.spine.setCompleteListener(() => { });
		this.spine.setToSetupPose();
	}
	this.isPlaying = false;
}
```
