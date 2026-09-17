---
id: "cc_slot_module:GameModeDirectorModule:method:pauseWallet"
title: "GameModeDirectorModule._pauseWallet() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_pauseWallet"]
---

# `GameModeDirectorModule._pauseWallet(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._pauseWallet() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._pauseWallet() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_pauseWallet(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.WALLET.PAUSE_WALLET)` to freeze wallet balance updates while reels spin and winnings calculate.

---

## 3. Un-truncated Source Code Implementation
```typescript
_pauseWallet(): Promise<void> {
    this.eventManager.emit(GameUIEvents.WALLET.PAUSE_WALLET);
    return Promise.resolve();
}
```
