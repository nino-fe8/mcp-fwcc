---
id: "cc_slot_module:PaylineInfoModule:methods:showPaylineInfo"
title: "PaylineInfoModule.showPaylineInfo Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "showPaylineInfo"]
---

# 📖 `PaylineInfoModule.showPaylineInfo()`

<!-- convention-summary-start -->
### PaylineInfoModule.showPaylineInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.showPaylineInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Activates node and renders payline metadata if authorized in current game mode.

```typescript
protected showPaylineInfo(data: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showPaylineInfo(data: any): void {
    if (!this.shouldWorkInCurrentGameMode()) {
        return;
    }
    this.node.active = true;
    this.setPaylineInfo(data);
}
```
