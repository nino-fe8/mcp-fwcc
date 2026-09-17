---
id: "cc_slot_module:VerticalCascadeModule:gotchas:respin_callback_timeout_leak"
title: "Gotcha: Orphaned Schedule Callback on Rapid Fast-Spin"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "gotchas", "timer_leak", "fast_spin"]
---

# ⚠️ Gotcha: Orphaned Schedule Callback on Rapid Fast-Spin

<!-- convention-summary-start -->
### Gotcha: Orphaned Schedule Callback on Rapid Fast-Spin Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Orphaned Schedule Callback on Rapid Fast-Spin.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `stopRespin()`:
```typescript
this.scheduleOnce(this._respinCB, this.config.CASCADING_TIME_COMPLETED);
```
If the user triggers `fastStop()` or switches mode before `CASCADING_TIME_COMPLETED` expires, `this._respinCB` fires in the background unless explicitly cancelled via `this.unschedule(this._respinCB)` inside `resetAllEffectAndTasks()`.
