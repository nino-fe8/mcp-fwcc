---
id: "cc_slot_module:IconPromotion:methods:onLoadExtend"
title: "IconPromotion.onLoadExtend Method"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `IconPromotion.onLoadExtend()`

<!-- convention-summary-start -->
### IconPromotion.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IconPromotion.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Acquires `PromotionData` model, sets node inactive initially, and binds observers.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.promotionDataModel = this.gameLogic.getDataModel().PromotionData;
    this.node.active = false;
    this.setupObserver();
}
```
