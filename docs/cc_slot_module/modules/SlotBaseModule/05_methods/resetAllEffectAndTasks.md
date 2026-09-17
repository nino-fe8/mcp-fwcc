---
id: "cc_slot_module:SlotBaseModule:methods:resetAllEffectAndTasks"
title: "SlotBaseModule.resetAllEffectAndTasks Method"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "methods", "resetAllEffectAndTasks"]
---

# 📖 `SlotBaseModule.resetAllEffectAndTasks()`

<!-- convention-summary-start -->
### SlotBaseModule.resetAllEffectAndTasks Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotBaseModule.resetAllEffectAndTasks Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Protected handler automatically bound to `gameLogic` event `"RESET_ALL_EFFECT_AND_TASKS"`. Subclasses override this method to stop ongoing animations, kill tweens, clear particle bursts, and hide celebratory popups before a new spin starts.

```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected resetAllEffectAndTasks(): void {
    // Override in subclass
}
```
