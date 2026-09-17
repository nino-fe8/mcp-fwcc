---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:methods:stopRespin"
title: "HorizontalCascadeSceneTest.stopRespin Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "methods", "stopRespin"]
---

# 📖 `HorizontalCascadeSceneTest.stopRespin()`

<!-- convention-summary-start -->
### HorizontalCascadeSceneTest.stopRespin Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for HorizontalCascadeSceneTest.stopRespin Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
stopRespin(): void
```

- **Scope**: `HorizontalCascadeSceneTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
stopRespin(): void {
        this.scheduleOnce(() => {
            this.cascadeModule.stopRespin(null, null);
        }, 0.5);
    }
	
	fastStop(): void {
		this.table.fastStop();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
