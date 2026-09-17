---
id: "cc_slot_module:JackpotWinModule:gotchas:missing_fast_skip_tween_cleanup"
title: "Gotcha: Stale Tween Override on Accelerated Skip"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "gotchas", "tween_conflict"]
---

# ⚠️ Gotcha: Stale Tween Override on Accelerated Skip

<!-- convention-summary-start -->
### Gotcha: Stale Tween Override on Accelerated Skip Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Stale Tween Override on Accelerated Skip.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `JackpotWinModule.onClick()`:
```typescript
if (this._tweenMoney) {
    this._tweenMoney.stop();
    this._tweenMoney = null;
}
this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, 1, this.jackpotValue, ...);
```
Stopping `this._tweenMoney` explicitly before launching the accelerated 1s count is critical. Without stopping, two simultaneous tweens will write conflicting string values into `_lbWinAmount.string` every frame.
