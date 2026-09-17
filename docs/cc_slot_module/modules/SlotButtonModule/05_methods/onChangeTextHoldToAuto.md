---
id: "cc_slot_module:SlotButtonModule:methods:onChangeTextHoldToAuto"
title: "SlotButtonNormal.onChangeTextHoldToAuto Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onChangeTextHoldToAuto"]
---

# 📖 `SlotButtonNormal.onChangeTextHoldToAuto()`

<!-- convention-summary-start -->
### SlotButtonNormal.onChangeTextHoldToAuto Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.onChangeTextHoldToAuto Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Swaps the label sprite frame to `textHoldToAuto`.

```typescript
public onChangeTextHoldToAuto(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onChangeTextHoldToAuto(): void {
    if (this.textSpin) {
        this.textSpin.spriteFrame = this.textHoldToAuto;
    }
}
```
