---
id: "cc_slot_module:SlotButtonModule:methods:showPromotionUI"
title: "SlotButtonNormal.showPromotionUI Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "showPromotionUI", "promotion"]
---

# 📖 `SlotButtonNormal.showPromotionUI()`

<!-- convention-summary-start -->
### SlotButtonNormal.showPromotionUI Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.showPromotionUI Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Hides standard "HOLD TO AUTO" spin text and sets `hasPromotion` flag when a promotional campaign is active.

```typescript
public showPromotionUI(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showPromotionUI(isActive: boolean): void {
    if (this.textSpin) {
        this.textSpin.node.active = !isActive;
    }
    this.hasPromotion = isActive;
}
```
