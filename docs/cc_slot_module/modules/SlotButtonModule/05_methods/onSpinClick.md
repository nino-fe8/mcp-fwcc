---
id: "cc_slot_module:SlotButtonModule:methods:onSpinClick"
title: "SlotButtonNormal.onSpinClick Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onSpinClick"]
---

# 📖 `SlotButtonNormal.onSpinClick()`

<!-- convention-summary-start -->
### SlotButtonNormal.onSpinClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.onSpinClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Handles normal spin click execution if not currently switching modes and not suppressed by a hold-to-auto gesture.

```typescript
public onSpinClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSpinClick(): void {
    if (this._isSwitchingMode) {
        return;
    }
    if (!this.isHold) {
        this.gameLogic.emit(GameLogicUIEvents.NORMAL_SPIN_CLICKED);
    }
    this.isHold = false;
}
```
