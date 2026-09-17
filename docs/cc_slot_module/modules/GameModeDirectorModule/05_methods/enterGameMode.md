---
id: "cc_slot_module:GameModeDirectorModule:method:enterGameMode"
title: "GameModeDirectorModule.enterGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "enterGameMode"]
---

# `GameModeDirectorModule.enterGameMode(mode: number): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.enterGameMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.enterGameMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
enterGameMode(mode: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resets speed profile: `this.resetGameSpeed()`.
2. Emits global switch mode event: `this.eventManager.emit(GameUIEvents.GAME_MODE.SWITCH_GAME_MODE, mode)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
enterGameMode(mode): Promise<void> {
    this.resetGameSpeed();
    return this.eventManager.emit(GameUIEvents.GAME_MODE.SWITCH_GAME_MODE, mode);
}
```
