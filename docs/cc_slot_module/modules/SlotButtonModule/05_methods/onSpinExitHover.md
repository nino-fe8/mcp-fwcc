---
id: "cc_slot_module:SlotButtonModule:methods:onSpinExitHover"
title: "SlotButtonNormal.onSpinExitHover Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onSpinExitHover"]
---

# 📖 `SlotButtonNormal.onSpinExitHover()`

<!-- convention-summary-start -->
### SlotButtonNormal.onSpinExitHover Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.onSpinExitHover Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Cancels touches and dispatches `NORMAL_SPIN_CANCEL_HOVERED` on desktop cursor exit.

```typescript
public onSpinExitHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSpinExitHover(): void {
    this.onTouchCancel();
    this.gameLogic.emit(GameLogicUIEvents.NORMAL_SPIN_CANCEL_HOVERED);
}
```
