---
id: "cc_slot_module:SlotPaylineSchedule:methods:setData"
title: "SlotPaylineSchedule.setData Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "setData"]
---

# 📖 `SlotPaylineSchedule.setData()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.setData Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.setData Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Ingests winning `payLines` and `jackpotPayline` payload.

```typescript
protected setData(data: { payLines: any[], jackpotPayline: any }): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected setData(data: { payLines: any[], jackpotPayline: any }): void {
    this.payLines = data.payLines;
    this.jackpotPayline = data.jackpotPayline;
}
```
