---
id: "cc_slot_module:BetModule:methods:onIncreaseBet"
title: "BetModule.onIncreaseBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onIncreaseBet"]
---

# 📖 `BetModule.onIncreaseBet()`

<!-- convention-summary-start -->
### BetModule.onIncreaseBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.onIncreaseBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays sound effect and dispatches `GameLogicUIEvents.INCREASE_BET`.

```typescript
public onIncreaseBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onIncreaseBet(): void {
    this.playSfxIncreaseBet();
    this.gameLogic.emit(GameLogicUIEvents.INCREASE_BET);
}
```
