---
id: "cc_slot_module:GameModeDirectorModule:method:forceResetGameMode"
title: "GameModeDirectorModule._forceResetGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_forceResetGameMode"]
---

# `GameModeDirectorModule._forceResetGameMode(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._forceResetGameMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._forceResetGameMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_forceResetGameMode(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Updates wallet balance from server snapshot.
2. Force resumes the wallet.
3. Resets game state to IDLE (`this.resetGameState()`).
4. Clears win amount tracking (`this.dataStore.resetWinAmount()`).

---

## 3. Un-truncated Source Code Implementation
```typescript
_forceResetGameMode(): Promise<void> {
    // override code here
    this.gameLogic.updateCurrentWallet();
    this._resumeWallet(true); // force resume wallet
    this.resetGameState();
    this.dataStore.resetWinAmount();
    return Promise.resolve();
}
```
