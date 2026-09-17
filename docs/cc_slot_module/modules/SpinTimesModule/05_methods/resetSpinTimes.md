---
id: "cc_slot_module:SpinTimesModule:methods:resetSpinTimes"
title: "SpinTimesModule.resetSpinTimes Method"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "resetSpinTimes"]
---

# 📖 `SpinTimesModule.resetSpinTimes()`

<!-- convention-summary-start -->
### SpinTimesModule.resetSpinTimes Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule.resetSpinTimes Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Clears label text and hides badge node.

```typescript
public resetSpinTimes(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resetSpinTimes(): void {
    this.spinTimesLabel.string = '';
    this.node.active = false;
}
```
