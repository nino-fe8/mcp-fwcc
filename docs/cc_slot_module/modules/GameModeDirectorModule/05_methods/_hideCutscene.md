---
id: "cc_slot_module:GameModeDirectorModule:method:hideCutscene"
title: "GameModeDirectorModule._hideCutscene() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_hideCutscene"]
---

# `GameModeDirectorModule._hideCutscene(data: any): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._hideCutscene() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._hideCutscene() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_hideCutscene(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.CUTSCENES.CLOSE_CUTSCENE, data)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_hideCutscene(data): Promise<void> {
    return this.eventManager.emit(GameUIEvents.CUTSCENES.CLOSE_CUTSCENE, data);
}
```
