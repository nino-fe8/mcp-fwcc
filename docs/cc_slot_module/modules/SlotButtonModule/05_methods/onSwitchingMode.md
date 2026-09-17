---
id: "cc_slot_module:SlotButtonModule:methods:onSwitchingMode"
title: "SlotButtonNormal.onSwitchingMode Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onSwitchingMode"]
---

# 📖 `SlotButtonNormal.onSwitchingMode()`

<!-- convention-summary-start -->
### SlotButtonNormal.onSwitchingMode Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.onSwitchingMode Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Handles mode switching transitions by detaching event listeners and cancelling active touches while switching.

```typescript
public onSwitchingMode(isSwitching: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSwitchingMode(isSwitching: boolean): void {
    this._isSwitchingMode = isSwitching;
    this.removeEventListeners();
    if (!isSwitching) {
        this.addEventListeners();
    }
    this.cancelButtonEvents();
}
```
