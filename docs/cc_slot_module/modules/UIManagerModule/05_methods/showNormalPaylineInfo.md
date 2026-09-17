---
id: "cc_slot_module:UIManagerModule:methods:showNormalPaylineInfo"
title: "UIManagerModule.showNormalPaylineInfo Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showNormalPaylineInfo"]
---

# 📖 `UIManagerModule.showNormalPaylineInfo()`

<!-- convention-summary-start -->
### UIManagerModule.showNormalPaylineInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.showNormalPaylineInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Sets normal game payline info opacity to 255 and free game payline info opacity to 0.

```typescript
public showNormalPaylineInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showNormalPaylineInfo(): void {
    this.setNodeOpacity(this.paylineInfoNormalGame, 255);
    this.setNodeOpacity(this.paylineInfoFreeGame, 0);
}
```
