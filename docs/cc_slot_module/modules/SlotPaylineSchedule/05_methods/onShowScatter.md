---
id: "cc_slot_module:SlotPaylineSchedule:methods:onShowScatter"
title: "SlotPaylineSchedule.onShowScatter Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "onShowScatter"]
---

# 📖 `SlotPaylineSchedule.onShowScatter()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.onShowScatter Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.onShowScatter Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits special symbol presentation event for Scatter symbols and pauses the script pipeline for `timelineConfig` duration.

```typescript
protected onShowScatter(): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
protected onShowScatter(): Promise<void> {
    const scatterSymbolId = this.gameConfig.SYMBOL_CONFIG.Scatter && this.gameConfig.SYMBOL_CONFIG.Scatter.Id;
    const duration = this.timelineConfig;
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, scatterSymbolId, duration);

    this.stopSchedule();
    return new Promise((resolve) => {
        this.tweenSchedule = tween(this.node)
            .delay(this.timelineConfig)
            .call(resolve)
            .start();
    });
}
```
