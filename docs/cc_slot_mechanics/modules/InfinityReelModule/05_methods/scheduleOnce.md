---
id: "cc_slot_mechanics:InfinityReelModule:methods:scheduleOnce"
title: "InfinityReelModule.scheduleOnce Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "scheduleOnce"]
---

# 📖 `InfinityReelModule.scheduleOnce()`

<!-- convention-summary-start -->
### InfinityReelModule.scheduleOnce Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityReelModule.scheduleOnce Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
scheduleOnce(this.stopCallback, this.currentMode.delayStop); } fastStop(): void
```

- **Scope**: `InfinityReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
scheduleOnce(this.stopCallback, this.currentMode.delayStop);
	}

	fastStop(): void {
		this.stopCallback && this.unschedule(this.stopCallback);
		this.reelManager.state = ReelSpinState.SHOWING_RESULT;
		this.reelManager.speed = this.reelManager.speed / this.config.FAST_SPIN_RATE;
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
