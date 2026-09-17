---
id: "cc_slot_module:GameDataStore:method:resetWinAmount"
title: "GameDataStore.resetWinAmount() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "resetWinAmount"]
---

# `GameDataStore.resetWinAmount(): void`

<!-- convention-summary-start -->
### GameDataStore.resetWinAmount() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.resetWinAmount() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
resetWinAmount(): void
```

---

## 2. Detailed Algorithmic Execution Logic
If `hasPlaySession()` is true and `currentGameMode === NORMAL_GAME`, resets `winAmountPS = 0` and `winAmount = 0`.

---

## 3. Un-truncated Source Code Implementation
```typescript
resetWinAmount(): void {
    if (this.hasPlaySession() && this.currentGameMode === GAME_MODE_ENUM.NORMAL_GAME) {
        this.playSession.winAmountPS = 0;
        this.playSession.winAmount = 0;
    }
}
```
