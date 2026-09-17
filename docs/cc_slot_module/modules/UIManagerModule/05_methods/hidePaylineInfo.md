---
id: "cc_slot_module:UIManagerModule:methods:hidePaylineInfo"
title: "UIManagerModule.hidePaylineInfo Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "hidePaylineInfo"]
---

# 📖 `UIManagerModule.hidePaylineInfo()`

<!-- convention-summary-start -->
### UIManagerModule.hidePaylineInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.hidePaylineInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Fades opacity to 0 on both normal and free game payline info notification banners.

```typescript
public hidePaylineInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hidePaylineInfo(): void {
    this.setNodeOpacity(this.paylineInfoNormalGame, 0);
    this.setNodeOpacity(this.paylineInfoFreeGame, 0);
}
```
