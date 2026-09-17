---
id: "cc_slot_module:GameModeDirectorModule:method:resetGameState"
title: "GameModeDirectorModule.resetGameState() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "resetGameState"]
---

# `GameModeDirectorModule.resetGameState(): void`

<!-- convention-summary-start -->
### GameModeDirectorModule.resetGameState() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.resetGameState() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
resetGameState(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Sets `this.gameSettings.currentGameState = GAME_STATE_ENUM.IDLE`.

---

## 3. Un-truncated Source Code Implementation
```typescript
resetGameState(): void {
    this.gameSettings.currentGameState = GAME_STATE_ENUM.IDLE;
}
```
