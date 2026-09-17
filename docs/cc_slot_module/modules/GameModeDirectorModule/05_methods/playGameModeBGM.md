---
id: "cc_slot_module:GameModeDirectorModule:method:playGameModeBGM"
title: "GameModeDirectorModule.playGameModeBGM() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "playGameModeBGM", "audio"]
---

# `GameModeDirectorModule.playGameModeBGM(): void`

<!-- convention-summary-start -->
### GameModeDirectorModule.playGameModeBGM() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.playGameModeBGM() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
playGameModeBGM(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook for triggering mode-specific background music through `this.soundPlayer.playMainBGM(this.dataStore.currentGameMode)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
playGameModeBGM(): void {
    // this.soundPlayer && this.soundPlayer.playMainBGM(this.dataStore.currentGameMode);
}
```
