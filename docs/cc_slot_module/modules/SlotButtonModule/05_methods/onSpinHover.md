---
id: "cc_slot_module:SlotButtonModule:methods:onSpinHover"
title: "SlotButtonNormal.onSpinHover Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onSpinHover"]
---

# 📖 `SlotButtonNormal.onSpinHover()`

<!-- convention-summary-start -->
### SlotButtonNormal.onSpinHover Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.onSpinHover Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Dispatches `NORMAL_SPIN_HOVERED` on desktop cursor entry to trigger hover animations.

```typescript
public onSpinHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSpinHover(): void {
    this.gameLogic.emit(GameLogicUIEvents.NORMAL_SPIN_HOVERED);
}
```
