---
id: "cc_slot_module:SlotPaylineSchedule:methods:resetAllEffectAndTasks"
title: "SlotPaylineSchedule.resetAllEffectAndTasks Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "resetAllEffectAndTasks"]
---

# 📖 `SlotPaylineSchedule.resetAllEffectAndTasks()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.resetAllEffectAndTasks Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.resetAllEffectAndTasks Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Handles emergency interrupt reset by invoking `cleanUp()`, stopping active tweens, and emitting `PAYLINE_CLEAR`.

```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected resetAllEffectAndTasks(): void {
    this.cleanUp();
}
```
