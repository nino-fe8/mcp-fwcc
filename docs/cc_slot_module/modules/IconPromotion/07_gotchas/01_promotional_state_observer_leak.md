---
id: "cc_slot_module:IconPromotion:gotchas:promotional_state_observer_leak"
title: "Gotcha: Unreleased Observer on PromotionData"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "gotchas", "observer_leak"]
---

# ⚠️ Gotcha: Unreleased Observer on PromotionData

<!-- convention-summary-start -->
### Gotcha: Unreleased Observer on PromotionData Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Unreleased Observer on PromotionData.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`IconPromotion` watches `this.promotionDataModel`. If `onDestroy` omits `this.observer.releaseAll(this.promotionDataModel, this)`, stale observer handlers fire on subsequent game re-entry.

---

## 2. Prevention

Always clean up in `onDestroy()`:
```typescript
onDestroy(): void {
    this.observer.releaseAll(this.promotionDataModel, this);
}
```
