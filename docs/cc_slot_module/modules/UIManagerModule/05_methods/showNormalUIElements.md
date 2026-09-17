---
id: "cc_slot_module:UIManagerModule:methods:showNormalUIElements"
title: "UIManagerModule.showNormalUIElements Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showNormalUIElements"]
---

# 📖 `UIManagerModule.showNormalUIElements()`

<!-- convention-summary-start -->
### UIManagerModule.showNormalUIElements Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.showNormalUIElements Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Activates base betting controls, wallet, win amount, turbo button, and feature buy button.

```typescript
public showNormalUIElements(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showNormalUIElements(): void {
    this.setNodeActive(this.bet, true);
    this.setNodeActive(this.extraBet, true);
    this.setNodeActive(this.wallet, true);
    this.setNodeActive(this.winAmount, true);
    this.setNodeActive(this.turbo, true);
    this.setNodeActive(this.buyFeatureButton, true);
}
```
