---
id: "cc_slot_module:GameModeDirectorModule:method:resumeWallet"
title: "GameModeDirectorModule._resumeWallet() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resumeWallet"]
---

# `GameModeDirectorModule._resumeWallet(force: boolean): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._resumeWallet() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._resumeWallet() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_resumeWallet(force: boolean = false): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
If `this.dataStore.playSession.isFinished` is true or `force` is true, emits `GameUIEvents.WALLET.RESUME_WALLET` to unfreeze wallet balance and apply round winnings.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resumeWallet(force: boolean = false): Promise<void> {
    if (this.dataStore.playSession.isFinished || force) {
        this.eventManager.emit(GameUIEvents.WALLET.RESUME_WALLET);
    }
    return Promise.resolve();
}
```
