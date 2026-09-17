---
id: "cc_slot_module:ExtraBetModule:methods:onMinExtraBetEnable"
title: "ExtraBetModule.onMinExtraBetEnable Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onMinExtraBetEnable"]
---

# 📖 `ExtraBetModule.onMinExtraBetEnable()`

<!-- convention-summary-start -->
### ExtraBetModule.onMinExtraBetEnable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.onMinExtraBetEnable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes `decreaseExtraBet.interactable` with `minExtraBetEnable`.

```typescript
public onMinExtraBetEnable(minExtraBetEnable: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onMinExtraBetEnable(minExtraBetEnable: boolean): void {
    this.decreaseExtraBet.interactable = minExtraBetEnable;
}
```
