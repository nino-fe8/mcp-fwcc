---
id: "cc_slot_module:SpinTimesModule:methods:updateState"
title: "SpinTimesModule.updateState Method"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "updateState"]
---

# 📖 `SpinTimesModule.updateState()`

<!-- convention-summary-start -->
### SpinTimesModule.updateState Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule.updateState Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Resets spin times badge when button state returns to `BUTTON_STATE_ENUM.NORMAL`.

```typescript
public updateState(state: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateState(state): void {
    if (state === BUTTON_STATE_ENUM.NORMAL) {
        this.resetSpinTimes();
    }
}
```
