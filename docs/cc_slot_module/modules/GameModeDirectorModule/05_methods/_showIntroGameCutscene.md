---
id: "cc_slot_module:GameModeDirectorModule:method:showIntroGameCutscene"
title: "GameModeDirectorModule._showIntroGameCutscene() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showIntroGameCutscene"]
---

# `GameModeDirectorModule._showIntroGameCutscene(data: any): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._showIntroGameCutscene() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._showIntroGameCutscene() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_showIntroGameCutscene(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data)` to present mode transition intro dialogs.

---

## 3. Un-truncated Source Code Implementation
```typescript
_showIntroGameCutscene(data): Promise<void> {
    return this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data);
}
```
