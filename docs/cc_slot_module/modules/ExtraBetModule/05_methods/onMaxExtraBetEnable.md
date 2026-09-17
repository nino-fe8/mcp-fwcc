---
id: "cc_slot_module:ExtraBetModule:methods:onMaxExtraBetEnable"
title: "ExtraBetModule.onMaxExtraBetEnable Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onMaxExtraBetEnable"]
---

# 📖 `ExtraBetModule.onMaxExtraBetEnable()`

<!-- convention-summary-start -->
### ExtraBetModule.onMaxExtraBetEnable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.onMaxExtraBetEnable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes `increaseExtraBet.interactable` with `maxExtraBetEnable`.

```typescript
public onMaxExtraBetEnable(maxExtraBetEnable: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onMaxExtraBetEnable(maxExtraBetEnable: boolean): void {
    this.increaseExtraBet.interactable = maxExtraBetEnable;
}
```
