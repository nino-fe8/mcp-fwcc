---
id: "cc_slot_module:SlotReelModule:method:runReelSpin"
title: "SlotReelModule.runReelSpin() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "runReelSpin", "spin_start", "physics"]
---

# `SlotReelModule.runReelSpin(mode: any): void`

<!-- convention-summary-start -->
### SlotReelModule.runReelSpin() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotReelModule.runReelSpin() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public runReelSpin(mode: any): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTableModule.startSpinning()` when the spin loop initiates.

---

## 3. Detailed Algorithmic Execution Logic
1. Resets active data: `this.data = []`, activates node: `this.node.active = true`.
2. Assigns active speed parameters: `this.currentMode = mode`, `this.reelManager.speed = this.currentMode.speed`.
3. Sets state machine to `ReelSpinState.START`.
4. Stops any active tweens on the column node.
5. Activates all child symbols (`symbol.active = true`) and triggers `this.spinAction()`.

---

## 4. Un-truncated Source Code Implementation
```typescript
runReelSpin(mode): void {
	this.data = [];
	this.node.active = true;
	this.currentMode = mode;
	this.reelManager.speed = this.currentMode.speed;
	this.reelManager.changeState(ReelSpinState.START);

	this.reelStopCB = null;
	this.tween && this.tween.stop();
	this.listSymbols.forEach((symbol) => {
		symbol.active = true;
	});
	this.spinAction();
}
```
