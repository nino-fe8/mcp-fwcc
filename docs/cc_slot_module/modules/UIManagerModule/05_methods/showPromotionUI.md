---
id: "cc_slot_module:UIManagerModule:methods:showPromotionUI"
title: "UIManagerModule.showPromotionUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showPromotionUI", "promotion"]
---

# 📖 `UIManagerModule.showPromotionUI()`

<!-- convention-summary-start -->
### UIManagerModule.showPromotionUI Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.showPromotionUI Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes the visibility of all `promotionUI` overlay nodes with `promotionDataModel.isActive`.

```typescript
public showPromotionUI(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showPromotionUI(): void {
    const isActive = this.promotionDataModel.isActive;
    this.promotionUI.forEach((node) => {
        node.active = isActive;
    });
}
```
