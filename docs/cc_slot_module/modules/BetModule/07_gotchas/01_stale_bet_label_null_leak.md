---
id: "cc_slot_module:BetModule:gotchas:stale_bet_label_null_leak"
title: "Gotcha: Null Pointer Crash on Unassigned Labels"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "gotchas", "null_pointer"]
---

# ⚠️ Gotcha: Null Pointer Crash on Unassigned Labels

<!-- convention-summary-start -->
### Gotcha: Null Pointer Crash on Unassigned Labels Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Null Pointer Crash on Unassigned Labels.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `onUpdateBetDenom()` and `onUpdateTotalBet()`, `this.betDenomLabel.node.emit("ON_UPDATE_VALUE", ...)` accesses `.node` directly. If the label property is not linked in Cocos Inspector, a fatal crash occurs during startup.

---

## 2. Prevention

Always assign the label reference or guard with optional chaining:
```typescript
if (this.betDenomLabel && this.betDenomLabel.node) {
    this.betDenomLabel.node.emit("ON_UPDATE_VALUE", betDenom);
}
```
