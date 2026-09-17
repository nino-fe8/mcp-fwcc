---
id: "cc_slot_module:BetModule:methods:onDecreaseBet"
title: "BetModule.onDecreaseBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onDecreaseBet"]
---

# 📖 `BetModule.onDecreaseBet()`

<!-- convention-summary-start -->
### BetModule.onDecreaseBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.onDecreaseBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays sound effect and dispatches `GameLogicUIEvents.DECREASE_BET`.

```typescript
public onDecreaseBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDecreaseBet(): void {
    this.playSfxDecreaseBet();
    this.gameLogic.emit(GameLogicUIEvents.DECREASE_BET);
}
```
