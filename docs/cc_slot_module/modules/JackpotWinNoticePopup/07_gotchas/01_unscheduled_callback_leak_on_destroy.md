---
id: "cc_slot_module:JackpotWinNoticePopup:gotchas:01_unscheduled_callback_leak_on_destroy"
title: "Unscheduled Callback Leak on Destroy"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "gotchas", "callback_leak"]
---

# ⚠️ Unscheduled Callback Leak in JackpotWinNoticePopup

<!-- convention-summary-start -->
### Unscheduled Callback Leak on Destroy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Unscheduled Callback Leak on Destroy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Solution

Always execute `this.unscheduleAllCallbacks()` and `this.node.stopAllActions()` inside `onDestroy()`:

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.jackpotData, this);
    this.unscheduleAllCallbacks();
    this.node.stopAllActions();
}
```
