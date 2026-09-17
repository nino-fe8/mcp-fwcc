---
id: "cc_slot_module:ToastInfoModule:gotchas:rapid_toast_tween_conflict"
title: "Gotcha: Overlapping Scale Tweens on Rapid Alerts"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "gotchas", "tween_conflict"]
---

# ⚠️ Gotcha: Overlapping Scale Tweens on Rapid Alerts

<!-- convention-summary-start -->
### Gotcha: Overlapping Scale Tweens on Rapid Alerts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Overlapping Scale Tweens on Rapid Alerts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

When multiple network warnings arrive in rapid succession, running multiple `cc.tween(this.node)` instances simultaneously causes scale jitter and premature node deactivation.

---

## 2. Prevention

`showMessage` stops the existing tween before launching a new sequence:
```typescript
if (this._tweenToast) {
    this._tweenToast.stop();
}
```
