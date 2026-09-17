---
id: "cc_slot_module:SlotPaylineSchedule:methods:registerPaylineEvents"
title: "SlotPaylineSchedule.registerPaylineEvents Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "registerPaylineEvents"]
---

# 📖 `SlotPaylineSchedule.registerPaylineEvents()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.registerPaylineEvents Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.registerPaylineEvents Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Subscribes to director steps via `moduleEvent` and payline data via `payLineEmitter`.

```typescript
protected registerPaylineEvents(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected registerPaylineEvents(): void {
    if (this.moduleEvent) {
        // Register event fired from director
        this.moduleEvent.on("BLINK_ALL_PAYLINES", this.blinkAllPaylines, this);
        this.moduleEvent.on("SHOW_ALL_PAYLINES", this.showAllPaylines, this);
        this.moduleEvent.on("SHOW_SCATTER_PAYLINE", this.onShowScatter, this);
        this.moduleEvent.on("SHOW_BONUS_PAYLINE", this.onShowBonus, this);
        this.moduleEvent.on("SHOW_JACKPOT_PAYLINE", this.onShowJackpot, this);
        this.moduleEvent.on("CLEAR_PAYLINES", this.cleanUp, this);
        this.moduleEvent.on("STOP_PAYLINES", this.stopPaylines, this);
    }

    if (this.payLineEmitter) {
        // Register event fired from payline module
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.setData, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, this.stopSchedule, this);
    }
}
```
