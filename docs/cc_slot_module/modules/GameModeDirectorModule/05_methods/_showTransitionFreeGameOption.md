---
id: "cc_slot_module:GameModeDirectorModule:method:showTransitionFreeGameOption"
title: "GameModeDirectorModule._showTransitionFreeGameOption() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showTransitionFreeGameOption"]
---

# `GameModeDirectorModule._showTransitionFreeGameOption(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._showTransitionFreeGameOption() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._showTransitionFreeGameOption() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
async _showTransitionFreeGameOption(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Awaits `this._showScatterPayLine()`.
2. Awaits `this._showIntroGameCutscene({ cutsceneType: CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME })`.
3. Resolves Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showTransitionFreeGameOption(): Promise<void> {
    await this._showScatterPayLine();
    await this._showIntroGameCutscene({ cutsceneType: CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME });
    return Promise.resolve();
}
```
