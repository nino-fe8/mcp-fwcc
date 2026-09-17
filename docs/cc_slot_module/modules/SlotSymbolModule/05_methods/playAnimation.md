---
id: "cc_slot_module:SlotSymbolModule:method:playAnimation"
title: "SlotSymbolModule.playAnimation() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "playAnimation", "spine"]
---

# `SlotSymbolModule.playAnimation(animationName: string, loop: boolean = false): void`

<!-- convention-summary-start -->
### SlotSymbolModule.playAnimation() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.playAnimation() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public playAnimation(animationName: string, loop: boolean = false): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by payline highlights, near-win anticipation triggers, or entrance effects.

---

## 3. Detailed Algorithmic Execution Logic
1. Validates node state (`isValid(this.spine)`, `node.activeInHierarchy`).
2. Loads Spine asset via `this.updateSymbolSkeleton()`.
3. Verifies animation exists in skeleton data via `SpineUtils.hasAnimation(this.spine, animationName)`.
   - If missing: stops animation and falls back to static sprite.
4. Invokes `this.hideStatic()` to activate Spine renderer.
5. Starts track: `this.spine.setAnimation(0, animationName, loop)`.
6. Sets `this.isPlaying = true`.

---

## 4. Un-truncated Source Code Implementation
```typescript
playAnimation(animationName: string, loop: boolean = false): void {
	if (!isValid(this.spine) || !this.node.active || !this.node.activeInHierarchy) {
		return;
	}

	this.updateSymbolSkeleton();

	if (!this.hasSkeletonData) {
		return;
	}

	if (!SpineUtils.hasAnimation(this.spine, animationName)) {
		if (this.isDebug) {
			log(`[SlotSymbolModule] Animation ${animationName} not found in Symbol ${this.symbolCode}, stop animation and switch to static`);
		}
		this.stopAnimation();
		return;
	}

	this.hideStatic();
	this.spine.setAnimation(0, animationName, loop);
	this.isPlaying = true;
}
```
