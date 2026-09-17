---
id: "cc_slot_module:TotalWinModule:methods:getTotalWinAmount"
title: "TotalWinModule.getTotalWinAmount Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "getTotalWinAmount"]
---

# 📖 `TotalWinModule.getTotalWinAmount()`

<!-- convention-summary-start -->
### TotalWinModule.getTotalWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.getTotalWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Extracts aggregate win value from `this.content.winAmount` with fallback to `dataStore.getWinAmountPS()`.

```typescript
public getTotalWinAmount(): number
```

---

## 2. Complete Source Code Implementation

```typescript
getTotalWinAmount(): number {
    const { winAmount } = this.content;
    const winAmountPS = this.dataStore.getWinAmountPS();
    return Number(winAmount || winAmountPS || 0);
}
```
