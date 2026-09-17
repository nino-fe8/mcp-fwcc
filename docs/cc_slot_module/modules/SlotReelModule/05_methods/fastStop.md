---
id: "cc_slot_module:SlotReelModule:method:fastStop"
title: "SlotReelModule.fastStop() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "fastStop", "ftr", "fast_play"]
---

# `SlotReelModule.fastStop(): void`

<!-- convention-summary-start -->
### SlotReelModule.fastStop() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotReelModule.fastStop() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public fastStop(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTableModule.fastStop()` when the player clicks the screen to skip rolling animations.

---

## 3. Detailed Algorithmic Execution Logic
1. Cancels pending stop schedule callback: `this.unschedule(this.stopCallback)`.
2. Immediately switches state to `ReelSpinState.SHOWING_RESULT`.
3. Accelerates rolling speed by dividing step duration: `this.reelManager.speed /= this.config.FAST_SPIN_RATE`.

---

## 4. Un-truncated Source Code Implementation
```typescript
fastStop(): void {
	this.stopCallback && this.unschedule(this.stopCallback);
	this.reelManager.state = ReelSpinState.SHOWING_RESULT;
	this.reelManager.speed = this.reelManager.speed / this.config.FAST_SPIN_RATE;
}
```
