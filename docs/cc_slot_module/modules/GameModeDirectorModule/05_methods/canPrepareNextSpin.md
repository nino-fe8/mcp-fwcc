---
id: "cc_slot_module:GameModeDirectorModule:method:canPrepareNextSpin"
title: "GameModeDirectorModule.canPrepareNextSpin() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "canPrepareNextSpin"]
---

# `GameModeDirectorModule.canPrepareNextSpin(): boolean`

<!-- convention-summary-start -->
### GameModeDirectorModule.canPrepareNextSpin() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.canPrepareNextSpin() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
canPrepareNextSpin(): boolean
```

---

## 2. Detailed Algorithmic Execution Logic
Checks:
```typescript
const { isFinished } = this.dataStore.playSession;
return isFinished && !this.gameSettings.isAutoSpin && this.dataStore.currentGameMode === GAME_MODE_ENUM.NORMAL_GAME;
```
Returns `true` if the session finished, auto spin is off, and we are in normal game mode.

---

## 3. Un-truncated Source Code Implementation
```typescript
canPrepareNextSpin(): boolean {
    const { isFinished } = this.dataStore.playSession;
    return isFinished && !this.gameSettings.isAutoSpin && this.dataStore.currentGameMode === GAME_MODE_ENUM.NORMAL_GAME;
}
```
