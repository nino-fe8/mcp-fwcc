---
id: "cc_slot_module:IconPromotion:methods:showPromotion"
title: "IconPromotion.showPromotion Method"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "methods", "showPromotion"]
---

# 📖 `IconPromotion.showPromotion()`

<!-- convention-summary-start -->
### IconPromotion.showPromotion Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IconPromotion.showPromotion Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Toggles visibility of the promotion container node.

```typescript
public showPromotion(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showPromotion(isActive: boolean): void {
    this.node.active = isActive;
}
```
