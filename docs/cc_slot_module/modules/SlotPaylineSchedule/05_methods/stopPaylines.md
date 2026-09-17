---
id: "cc_slot_module:SlotPaylineSchedule:methods:stopPaylines"
title: "SlotPaylineSchedule.stopPaylines Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "stopPaylines"]
---

# 📖 `SlotPaylineSchedule.stopPaylines()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.stopPaylines Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.stopPaylines Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stops recurring schedule and fires `PAYLINE_STOP_ALL`.

```typescript
protected stopPaylines(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected stopPaylines(): void {
    this.stopSchedule();
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_STOP_ALL);
}
```
