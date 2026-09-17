---
id: "cc_slot_module:SlotButtonModule:gotchas:double_tap_auto_spin_conflict"
title: "Gotcha: Double Tap vs Auto Spin Timing Conflict"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "gotchas", "gesture_timing"]
---

# ⚠️ Gotcha: Double Tap vs Auto Spin Timing Conflict

<!-- convention-summary-start -->
### Gotcha: Double Tap vs Auto Spin Timing Conflict Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Double Tap vs Auto Spin Timing Conflict.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If a player taps the spin button twice quickly to fast-stop reels, the second `TOUCH_START` might schedule another `holdAction` countdown if `onTouchCancel()` did not cleanly clear the previous action callback.

---

## 2. Prevention

In `SlotButtonNormal.onTouchCancel()` and `cancelButtonEvents()`, always call:
```typescript
if (this.holdAction) {
    this.unschedule(this.holdAction);
    this.holdAction = null;
    this.isHold = false;
}
```
