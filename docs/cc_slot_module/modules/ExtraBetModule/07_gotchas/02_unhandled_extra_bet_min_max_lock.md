---
id: "cc_slot_module:ExtraBetModule:gotchas:unhandled_extra_bet_min_max_lock"
title: "Gotcha: Button Lockout from Missing State Reset"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "gotchas", "state_reset"]
---

# ⚠️ Gotcha: Button Lockout from Missing State Reset

<!-- convention-summary-start -->
### Gotcha: Button Lockout from Missing State Reset Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Button Lockout from Missing State Reset.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

When transitioning from Free Spins back to Normal Game, `disableExtraBet()` might leave the Ante-Bet stepper buttons inactive if the reactive observer values did not change during Free Spins.

---

## 2. Prevention

Re-sync interactability during `UIManagerModule.showNormalUIElements()`:
```typescript
this.onMinExtraBetEnable(this.betModel.minExtraBetEnable);
this.onMaxExtraBetEnable(this.betModel.maxExtraBetEnable);
```
