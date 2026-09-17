---
id: "cc_slot_module:SlotPaylineSchedule:methods:onShowBonus"
title: "SlotPaylineSchedule.onShowBonus Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "onShowBonus"]
---

# 📖 `SlotPaylineSchedule.onShowBonus()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.onShowBonus Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.onShowBonus Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits special symbol presentation event for Bonus symbols and blocks script executor for `duration`.

```typescript
protected onShowBonus(): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
protected onShowBonus(): Promise<void> {
    const bonusSymbolId = this.gameConfig.SYMBOL_CONFIG.Bonus && this.gameConfig.SYMBOL_CONFIG.Bonus.Id;
    const duration = this.timelineConfig;
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, bonusSymbolId, duration);

    this.stopSchedule();
    return new Promise((resolve) => {
        this.tweenSchedule = tween(this.node)
            .delay(duration)
            .call(resolve)
            .start();
    });
}
```
