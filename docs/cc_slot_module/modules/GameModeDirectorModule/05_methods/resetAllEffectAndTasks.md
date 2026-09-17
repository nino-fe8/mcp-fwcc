---
id: "cc_slot_module:GameModeDirectorModule:method:resetAllEffectAndTasks"
title: "GameModeDirectorModule.resetAllEffectAndTasks() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "resetAllEffectAndTasks"]
---

# `GameModeDirectorModule.resetAllEffectAndTasks(): void`

<!-- convention-summary-start -->
### GameModeDirectorModule.resetAllEffectAndTasks() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.resetAllEffectAndTasks() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resets speed via `this.resetGameSpeed()`.
2. Cancels active director scripts: `this.onResetAllScripts()`.
3. If this component node is active and is NOT Normal Game, emits `GameUIEvents.GAME_MODE.RESUME_NORMAL_GAME_MODE` to restore the base game viewport.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected resetAllEffectAndTasks(): void {
    this.resetGameSpeed();
    this.onResetAllScripts();
    if (this.node.active && this.gameMode !== GAME_MODE_ENUM.NORMAL_GAME) {
        this.eventManager.emit(GameUIEvents.GAME_MODE.RESUME_NORMAL_GAME_MODE);
    }
}
```
