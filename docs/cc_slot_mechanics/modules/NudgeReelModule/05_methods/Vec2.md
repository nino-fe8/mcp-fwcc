---
id: "cc_slot_mechanics:NudgeReelModule:methods:Vec2"
title: "NudgeReelModule.Vec2 Method Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "Vec2"]
---

# 📖 `NudgeReelModule.Vec2()`

<!-- convention-summary-start -->
### NudgeReelModule.Vec2 Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NudgeReelModule.Vec2 Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
Vec2(0, -this.SYMBOL_HEIGHT * this._direction); this.tween = tween(this.node) .by(NUDGE_SPEED, { position: newPosition }) .call(() => { this.tween = null; this.recycleNudgeSymbol(); this.nudgeSpinning(); }) .start(); } protected recycleNudgeSymbol(): void
```

- **Scope**: `NudgeReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
Vec2(0, -this.SYMBOL_HEIGHT * this._direction);
		this.tween = tween(this.node)
			.by(NUDGE_SPEED, { position: newPosition })
			.call(() => {
				this.tween = null;
				this.recycleNudgeSymbol();
				this.nudgeSpinning();
			})
			.start();   
	}

	protected recycleNudgeSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
