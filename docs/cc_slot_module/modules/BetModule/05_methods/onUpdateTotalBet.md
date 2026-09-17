---
id: "cc_slot_module:BetModule:methods:onUpdateTotalBet"
title: "BetModule.onUpdateTotalBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onUpdateTotalBet"]
---

# 📖 `BetModule.onUpdateTotalBet()`

<!-- convention-summary-start -->
### BetModule.onUpdateTotalBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.onUpdateTotalBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Dispatches `ON_UPDATE_VALUE` with new total wager amount to `totalBetLabel`.

```typescript
public onUpdateTotalBet(totalBet: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateTotalBet(totalBet: number): void {
    this.totalBetLabel.node.emit("ON_UPDATE_VALUE", totalBet);
}
```
