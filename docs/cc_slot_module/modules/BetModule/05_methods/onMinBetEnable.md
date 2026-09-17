---
id: "cc_slot_module:BetModule:methods:onMinBetEnable"
title: "BetModule.onMinBetEnable Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onMinBetEnable"]
---

# 📖 `BetModule.onMinBetEnable()`

<!-- convention-summary-start -->
### BetModule.onMinBetEnable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.onMinBetEnable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes `decreaseBet.interactable` with `minBetEnable`.

```typescript
public onMinBetEnable(minBetEnable: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onMinBetEnable(minBetEnable: boolean): void {
    this.decreaseBet.interactable = minBetEnable;
}
```
