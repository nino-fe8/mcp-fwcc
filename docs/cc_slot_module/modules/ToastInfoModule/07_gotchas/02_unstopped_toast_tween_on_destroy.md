---
id: "cc_slot_module:ToastInfoModule:gotchas:unstopped_toast_tween_on_destroy"
title: "Gotcha: Unstopped Tween Callback on Destroy"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "gotchas", "destroy_tween"]
---

# ⚠️ Gotcha: Unstopped Tween Callback on Destroy

<!-- convention-summary-start -->
### Gotcha: Unstopped Tween Callback on Destroy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Unstopped Tween Callback on Destroy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If a toast delay is ticking when the scene changes or the player exits to lobby, the delay `.call()` callback executes against a destroyed node, triggering runtime null reference exceptions.

---

## 2. Prevention

Always stop active tweens in `onDestroy()`:
```typescript
onDestroy(): void {
    this._tweenToast && this._tweenToast.stop();
    this._tweenToast = null;
}
```
