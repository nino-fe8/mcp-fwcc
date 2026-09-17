---
id: "cc_slot_module:BetModule:methods:onMaxBetEnable"
title: "BetModule.onMaxBetEnable Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onMaxBetEnable"]
---

# 📖 `BetModule.onMaxBetEnable()`

<!-- convention-summary-start -->
### BetModule.onMaxBetEnable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.onMaxBetEnable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes `increaseBet.interactable` with `maxBetEnable`.

```typescript
public onMaxBetEnable(maxBetEnable: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onMaxBetEnable(maxBetEnable: boolean): void {
    this.increaseBet.interactable = maxBetEnable;
}
```
