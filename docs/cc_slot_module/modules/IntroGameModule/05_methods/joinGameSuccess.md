---
id: "cc_slot_module:IntroGameModule:methods:joinGameSuccess"
title: "IntroGameModule.joinGameSuccess Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "joinGameSuccess"]
---

# 📖 `IntroGameModule.joinGameSuccess()`

<!-- convention-summary-start -->
### IntroGameModule.joinGameSuccess Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule.joinGameSuccess Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Checks whether player is reconnecting or has promotion data to automatically skip the intro modal.

```typescript
public joinGameSuccess({ joinGameData }): void
```

---

## 2. Complete Source Code Implementation

```typescript
joinGameSuccess({ joinGameData }): void {
    const hasSkipIntroGame = joinGameData.isResume || joinGameData.promotionData;
    if (hasSkipIntroGame) {
        this.node.active = false;
        this.eventManager.emit(GameUIEvents.INTRO_GAME.SKIP_INTRO_GAME);
    } else {
        this.showButtonJoinGame(true);
    }
}
```
