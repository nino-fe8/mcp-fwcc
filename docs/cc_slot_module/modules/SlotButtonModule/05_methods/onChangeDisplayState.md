---
id: "cc_slot_module:SlotButtonModule:methods:onChangeDisplayState"
title: "SlotButtonNormal.onChangeDisplayState Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onChangeDisplayState"]
---

# 📖 `SlotButtonNormal.onChangeDisplayState()`

<!-- convention-summary-start -->
### SlotButtonNormal.onChangeDisplayState Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.onChangeDisplayState Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits `SPIN_BUTTON_STATE_CHANGE` on the `display` node, carrying new state and auto-spin status.

```typescript
public onChangeDisplayState(state: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onChangeDisplayState(state): void {
    this.display.emit('SPIN_BUTTON_STATE_CHANGE', state, this.gameSettings.isAutoSpin);
}
```
