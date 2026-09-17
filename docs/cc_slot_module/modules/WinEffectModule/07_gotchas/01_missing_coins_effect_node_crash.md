---
id: "cc_slot_module:WinEffectModule:gotchas:missing_coins_effect_node_crash"
title: "Gotcha: Null coinsEffect Node Reference Crashes startParticle"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "gotchas", "null_pointer", "coins_effect"]
---

# ⚠️ Gotcha: Null `coinsEffect` Node Reference Crashes `startParticle`

<!-- convention-summary-start -->
### Gotcha: Null coinsEffect Node Reference Crashes startParticle Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Null coinsEffect Node Reference Crashes startParticle.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `WinEffectModule.startParticle()`:
```typescript
startParticle(): void {
    if (this._isShowNormalEffect) {
        this.coinsEffect.emit("SHOW_COINS_EFFECT");
    }
}
```
If a theme prefab lacks a `coinsEffect` node or it was left unassigned in Cocos Creator Inspector, calling `.emit()` on `null` throws a fatal `TypeError` that crashes the win sequence.

---

## 2. Solution

Add a defensive null guard:
```typescript
if (this.coinsEffect) {
    this.coinsEffect.emit("SHOW_COINS_EFFECT");
}
```
