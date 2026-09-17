---
id: "cc_slot_module:SlotButtonModule:methods:onTouchStart"
title: "SlotButtonNormal.onTouchStart Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onTouchStart", "hold_to_auto"]
---

# 📖 `SlotButtonNormal.onTouchStart()`

<!-- convention-summary-start -->
### SlotButtonNormal.onTouchStart Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.onTouchStart Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Initiates touch contact and schedules the $0.7\text{s}$ `holdAction` countdown to trigger auto-spin.

```typescript
public onTouchStart(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTouchStart(): void {
    if (!this.holdToAutoSpin || this.hasPromotion) {
        return;
    }

    this.holdAction = () => {
        this.gameLogic.emit(GameLogicUIEvents.START_AUTO_SPIN);
        this.holdAction = null;
        this.isHold = true;
    };
    this.scheduleOnce(this.holdAction, this.holdTime);
}
```
