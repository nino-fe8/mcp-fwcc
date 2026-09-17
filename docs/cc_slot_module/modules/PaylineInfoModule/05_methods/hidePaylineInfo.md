---
id: "cc_slot_module:PaylineInfoModule:methods:hidePaylineInfo"
title: "PaylineInfoModule.hidePaylineInfo Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "hidePaylineInfo"]
---

# 📖 `PaylineInfoModule.hidePaylineInfo()`

<!-- convention-summary-start -->
### PaylineInfoModule.hidePaylineInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.hidePaylineInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Deactivates payline info toast node.

```typescript
protected hidePaylineInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected hidePaylineInfo(): void {
    if (!this.shouldWorkInCurrentGameMode()) {
        return;
    }
    this.node.active = false;
}
```
