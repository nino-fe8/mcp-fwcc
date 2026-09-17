---
id: "cc_slot_module:SlotPaylineSchedule:methods:showJackpotLine"
title: "SlotPaylineSchedule.showJackpotLine Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "showJackpotLine"]
---

# 📖 `SlotPaylineSchedule.showJackpotLine()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.showJackpotLine Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.showJackpotLine Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Presents fixed jackpot payline and blocks the pipeline for `timelineConfig` duration.

```typescript
protected showJackpotLine(): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
protected showJackpotLine(): Promise<void> {
    const jackpotPayline = this.jackpotPayline;
    if (!jackpotPayline) {
        return Promise.resolve();
    }
    const duration = this.timelineConfig;
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_JACKPOT_LINE, jackpotPayline, duration);

    this.stopSchedule();
    return new Promise((resolve) => {
        this.tweenSchedule = tween(this.node)
            .delay(duration)
            .call(resolve)
            .start();
    });
}
```
