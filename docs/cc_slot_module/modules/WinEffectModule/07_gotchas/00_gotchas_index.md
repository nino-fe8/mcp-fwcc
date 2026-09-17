---
id: "cc_slot_module:WinEffectModule:gotchas:index"
title: "WinEffectModule Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ WinEffectModule Gotchas & Engine Defects Index

<!-- convention-summary-start -->
### WinEffectModule Gotchas & Engine Defects Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule Gotchas & Engine Defects Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_coins_effect_node_crash.md`, `./02_turbo_money_tween_unhandled_completion.md`
- **Related Docs**: [`01_missing_coins_effect_node_crash`](./01_missing_coins_effect_node_crash.md), [`02_turbo_money_tween_unhandled_completion`](./02_turbo_money_tween_unhandled_completion.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_missing_coins_effect_node_crash`](./01_missing_coins_effect_node_crash.md)** | Null `coinsEffect` Node Reference Crashes `startParticle` | MEDIUM | If `coinsEffect` is unassigned in Inspector, `this.coinsEffect.emit()` throws `TypeError: Cannot read property 'emit' of null`. |
| **[`02_turbo_money_tween_unhandled_completion`](./02_turbo_money_tween_unhandled_completion.md)** | Orphaned `_tweenMoney` on Rapid Turbo Transitions | MEDIUM | If `showFastEffectWin()` is triggered while `_tweenMoney` is active, the tween must be stopped to avoid ghost counting. |
