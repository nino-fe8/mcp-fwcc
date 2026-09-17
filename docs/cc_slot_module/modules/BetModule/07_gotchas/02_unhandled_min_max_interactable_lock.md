---
id: "cc_slot_module:BetModule:gotchas:unhandled_min_max_interactable_lock"
title: "Gotcha: Button Lockout Without canTriggerSameValue"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "gotchas", "observer_flags"]
---

# ⚠️ Gotcha: Button Lockout Without `canTriggerSameValue`

<!-- convention-summary-start -->
### Gotcha: Button Lockout Without canTriggerSameValue Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Button Lockout Without canTriggerSameValue.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

When watching `minBetEnable` or `maxBetEnable`, the reactive observer must be configured with `{ canTriggerSameValue: true }`. If omitted, when a player exhausts their funds and then refills balance back to the same bet index, the observer will consider the boolean value unchanged and skip re-enabling the stepper button.

---

## 2. Prevention

Always pass `{ canTriggerSameValue: true }` in `setupObserver()`:
```typescript
this.observer.watch(this.betModel, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true });
this.observer.watch(this.betModel, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true });
```
