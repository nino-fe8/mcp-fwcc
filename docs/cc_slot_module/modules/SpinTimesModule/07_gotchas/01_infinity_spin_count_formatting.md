---
id: "cc_slot_module:SpinTimesModule:gotchas:infinity_spin_count_formatting"
title: "Gotcha: Text Overflow from Unbounded Spin Quantities"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "gotchas", "formatting"]
---

# ⚠️ Gotcha: Text Overflow from Unbounded Spin Quantities

<!-- convention-summary-start -->
### Gotcha: Text Overflow from Unbounded Spin Quantities Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Text Overflow from Unbounded Spin Quantities.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

When players select "Infinity / Unlimited" auto-spins, server payloads or test suites assign `999999`. Directly assigning `toString()` overflows the round badge boundary.

---

## 2. Prevention

`updateSpinTimes` enforces:
```typescript
if (spinTimes > 100000) {
    this.spinTimesLabel.string = '∞';       
} else {
    this.spinTimesLabel.string = spinTimes.toString();
}
```
