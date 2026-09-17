---
id: "cc_slot_module:ExtraBetModule:gotchas:stale_extra_bet_label_sync"
title: "Gotcha: Null Reference on Unassigned extraBetLabel"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "gotchas", "null_pointer"]
---

# ⚠️ Gotcha: Null Reference on Unassigned `extraBetLabel`

<!-- convention-summary-start -->
### Gotcha: Null Reference on Unassigned extraBetLabel Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Null Reference on Unassigned extraBetLabel.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`onUpdateTotalBet()` writes `this.extraBetLabel.string = this.betModel.extraBetValue.toString()`. If `extraBetLabel` is null, games with optional Ante-Bet features throw a runtime exception.

---

## 2. Prevention

Always guard with null check:
```typescript
onUpdateTotalBet(): void {
    if (this.extraBetLabel && this.betModel) {
        this.extraBetLabel.string = (this.betModel.extraBetValue || 0).toString();
    }
}
```
