---
id: "cc_slot_module:SlotButtonModule:methods:onChangeButtonState"
title: "SlotButtonNormal.onChangeButtonState Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onChangeButtonState"]
---

# 📖 `SlotButtonNormal.onChangeButtonState()`

<!-- convention-summary-start -->
### SlotButtonNormal.onChangeButtonState Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.onChangeButtonState Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Updates button text sprites (`textHoldToAuto` $\leftrightarrow$ `textPressToStop`) and syncs state when `buttonModel.state` changes.

```typescript
public onChangeButtonState(state: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onChangeButtonState(state): void {
    if (state === SPIN_BUTTON_STATE_ENUM.NORMAL) {
        this.onTouchCancel();
        this.onChangeTextHoldToAuto();
    } else if (state === SPIN_BUTTON_STATE_ENUM.SPINNING) {
        this.onChangeTextPressToStop();
    }
    this.state = state;
}
```
