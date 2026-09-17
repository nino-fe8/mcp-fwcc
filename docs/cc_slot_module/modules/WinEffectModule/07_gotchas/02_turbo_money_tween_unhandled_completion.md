---
id: "cc_slot_module:WinEffectModule:gotchas:turbo_money_tween_unhandled_completion"
title: "Gotcha: Unstopped _tweenMoney on Abrupt Mode Transitions"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "gotchas", "tween_leak", "turbo"]
---

# ⚠️ Gotcha: Unstopped `_tweenMoney` on Abrupt Mode Transitions

<!-- convention-summary-start -->
### Gotcha: Unstopped _tweenMoney on Abrupt Mode Transitions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Unstopped _tweenMoney on Abrupt Mode Transitions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If a player enables Turbo mode during an active rolling count or navigates back to the lobby, `_tweenMoney` continues modifying `_lbWinAmount.node` in the background unless stopped in `onDestroy()`:
```typescript
if (this._tweenMoney) {
    this._tweenMoney.stop();
    this._tweenMoney = null;
}
```
Always verify that `onDestroy()` cleanly aborts all active `tween` actions.
