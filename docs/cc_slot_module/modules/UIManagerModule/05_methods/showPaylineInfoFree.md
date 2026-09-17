---
id: "cc_slot_module:UIManagerModule:methods:showPaylineInfoFree"
title: "UIManagerModule.showPaylineInfoFree Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showPaylineInfoFree"]
---

# 📖 `UIManagerModule.showPaylineInfoFree()`

<!-- convention-summary-start -->
### UIManagerModule.showPaylineInfoFree Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.showPaylineInfoFree Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Sets free game payline info opacity to 255 and normal game payline info opacity to 0.

```typescript
public showPaylineInfoFree(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showPaylineInfoFree(): void {
    this.setNodeOpacity(this.paylineInfoNormalGame, 0);
    this.setNodeOpacity(this.paylineInfoFreeGame, 255);
}
```
