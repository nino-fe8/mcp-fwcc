---
id: "cc_slot_module:TotalWinModule:gotchas:fallback_winamountps_mismatch"
title: "Gotcha: Fallback winAmountPS Mismatch"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "gotchas", "data_mismatch"]
---

# ⚠️ Gotcha: Fallback `winAmountPS` Mismatch

<!-- convention-summary-start -->
### Gotcha: Fallback winAmountPS Mismatch Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Fallback winAmountPS Mismatch.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `TotalWinModule.getTotalWinAmount()`:
```typescript
getTotalWinAmount(): number {
    const { winAmount } = this.content;
    const winAmountPS = this.dataStore.getWinAmountPS();
    return Number(winAmount || winAmountPS || 0);
}
```
If a writer passes an empty payload `{}` during test preview, `dataStore.getWinAmountPS()` might return leftover cached values from a previous spin, causing false win totals.

---

## 2. Solution

Always explicitly pass `{ winAmount: freeSpinTotalAccumulator }` in writer commands.
