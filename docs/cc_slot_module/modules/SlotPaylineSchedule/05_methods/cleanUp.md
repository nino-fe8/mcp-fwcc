---
id: "cc_slot_module:SlotPaylineSchedule:methods:cleanUp"
title: "SlotPaylineSchedule.cleanUp Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "cleanUp"]
---

# 📖 `SlotPaylineSchedule.cleanUp()`

<!-- convention-summary-start -->
### SlotPaylineSchedule.cleanUp Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule.cleanUp Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stops recurring schedule and fires `PAYLINE_CLEAR`.

```typescript
protected cleanUp(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected cleanUp(): void {
    this.stopSchedule();
    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_CLEAR);
}
```
