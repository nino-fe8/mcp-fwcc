---
id: "cc_slot_module:SlotButtonModule:gotchas:promotion_auto_spin_bypass_leak"
title: "Gotcha: Auto-Spin Bypass During Promotional Free Rounds"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "gotchas", "promotions"]
---

# ⚠️ Gotcha: Auto-Spin Bypass During Promotional Free Rounds

<!-- convention-summary-start -->
### Gotcha: Auto-Spin Bypass During Promotional Free Rounds Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Auto-Spin Bypass During Promotional Free Rounds.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

Promotional spin regulations require that promotional rounds are consumed manually by player confirmation. If `holdToAutoSpin` is not suppressed when `hasPromotion = true`, players could enter auto-spin mode during promo events, causing compliance violations.

---

## 2. Prevention

In `SlotButtonNormal.onTouchStart()`:
```typescript
if (!this.holdToAutoSpin || this.hasPromotion) {
    return;
}
```
`hasPromotion` cleanly halts the auto-spin scheduler.
