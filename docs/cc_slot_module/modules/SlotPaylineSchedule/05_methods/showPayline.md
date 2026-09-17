---
id: "cc_slot_module:SlotPaylineSchedule:methods:showPayline"
title: "SlotPaylineSchedule.showPayline Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "showPayline"]
---

# 📖 `SlotPaylineSchedule.showPayline()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.showPayline Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.showPayline Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes bottom HUD payline info and emits `PAYLINE_SHOW_LINE` to follower visual layers.

```typescript
protected showPayline(payline: any, duration: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showPayline(payline, duration: number): void {
    if (this.paylineConfig.IS_DEBUG) {
        log(`[BasePaylineSchedule] showPayline`, payline);
    }
    const symbolCount = payline.reelCount || payline.payLineWinNumbers;
    if (symbolCount) {
        payline.symbolCount = symbolCount;
    }
    this.eventManager.emit(GameUIEvents.PAYLINE_INFO.ON_SHOW_PAYLINE_INFO, payline);
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_LINE, payline, duration);
}
```
