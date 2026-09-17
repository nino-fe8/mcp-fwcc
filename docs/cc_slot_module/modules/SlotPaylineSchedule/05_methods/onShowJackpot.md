---
id: "cc_slot_module:SlotPaylineSchedule:methods:onShowJackpot"
title: "SlotPaylineSchedule.onShowJackpot Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "onShowJackpot"]
---

# 📖 `SlotPaylineSchedule.onShowJackpot()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.onShowJackpot Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.onShowJackpot Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Routes jackpot win presentation to line drawing or win symbol highlights based on `PAYLINE_TYPE`.

```typescript
protected onShowJackpot(): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
protected onShowJackpot(): Promise<void> {
    if (this.paylineConfig.PAYLINE_TYPE === PAYLINE_TYPE.Lines) {
        return this.showJackpotLine();
    } else {
        return this.showJackpotWinSymbols();
    }
}
```
