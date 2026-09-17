---
id: "cc_slot_module:UIManagerModule:methods:hidePromotionUI"
title: "UIManagerModule.hidePromotionUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "hidePromotionUI"]
---

# 📖 `UIManagerModule.hidePromotionUI()`

<!-- convention-summary-start -->
### UIManagerModule.hidePromotionUI Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.hidePromotionUI Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Deactivates all promotional campaign overlay nodes in the `promotionUI` array.

```typescript
public hidePromotionUI(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hidePromotionUI(): void {
    this.promotionUI.forEach((node) => {
        node.active = false;
    });
}
```
