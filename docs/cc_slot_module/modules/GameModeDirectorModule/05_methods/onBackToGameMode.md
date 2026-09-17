---
id: "cc_slot_module:GameModeDirectorModule:method:onBackToGameMode"
title: "GameModeDirectorModule.onBackToGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onBackToGameMode"]
---

# `GameModeDirectorModule.onBackToGameMode(fromMode: number): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.onBackToGameMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.onBackToGameMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
async onBackToGameMode(_fromMode: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Invoked in Base Game when returning from child modes (e.g. Free Game, Bonus Game). Restores background music via `this.playGameModeBGM()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
async onBackToGameMode(_fromMode: number): Promise<void> {
    this.playGameModeBGM();
    return Promise.resolve();
}
```
