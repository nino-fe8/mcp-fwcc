---
id: "cc_slot_module:GameModeDirectorModule:method:transitionGameMode"
title: "GameModeDirectorModule.transitionGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "transitionGameMode", "isResume"]
---

# `GameModeDirectorModule.transitionGameMode(mode: number): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.transitionGameMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.transitionGameMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public transitionGameMode(mode: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Inspects `const { isResume } = this.dataStore.playSession`.
2. If `isResume === true` ➔ Calls `this.transitionToGameModeWhenResume(mode)` (bypasses long intro animations for fast reconnects).
3. If `isResume === false` ➔ Executes `this.runAction("TransitionGameMode")` to play full cutscene intro dialogues and music crossfades.

---

## 3. Un-truncated Source Code Implementation
```typescript
transitionGameMode(mode: number): Promise<void> {
    const { isResume } = this.dataStore.playSession;

    // Check if we should skip transition when resuming
    if (isResume) {
        return this.transitionToGameModeWhenResume(mode);
    } else {
        return this.runAction("TransitionGameMode");
    }
}
```
