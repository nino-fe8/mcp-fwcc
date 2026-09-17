---
id: "cc_slot_module:ExtraBetModule:methods:onIncreaseExtraBet"
title: "ExtraBetModule.onIncreaseExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onIncreaseExtraBet"]
---

# 📖 `ExtraBetModule.onIncreaseExtraBet()`

<!-- convention-summary-start -->
### ExtraBetModule.onIncreaseExtraBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.onIncreaseExtraBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays sound effect and dispatches `INCREASE_EXTRA_BET`.

```typescript
public onIncreaseExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onIncreaseExtraBet(): void {
    this.playSfxIncreaseExtraBet();
    this.gameLogic.emit(GameLogicUIEvents.INCREASE_EXTRA_BET);
}
```
