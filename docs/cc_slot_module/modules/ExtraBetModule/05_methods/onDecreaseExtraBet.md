---
id: "cc_slot_module:ExtraBetModule:methods:onDecreaseExtraBet"
title: "ExtraBetModule.onDecreaseExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onDecreaseExtraBet"]
---

# 📖 `ExtraBetModule.onDecreaseExtraBet()`

<!-- convention-summary-start -->
### ExtraBetModule.onDecreaseExtraBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.onDecreaseExtraBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays sound effect and dispatches `DECREASE_EXTRA_BET`.

```typescript
public onDecreaseExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDecreaseExtraBet(): void {
    this.playSfxDecreaseExtraBet();
    this.gameLogic.emit(GameLogicUIEvents.DECREASE_EXTRA_BET);
}
```
