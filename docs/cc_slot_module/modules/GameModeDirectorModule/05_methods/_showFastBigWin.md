---
id: "cc_slot_module:GameModeDirectorModule:method:showFastBigWin"
title: "GameModeDirectorModule._showFastBigWin() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showFastBigWin"]
---

# `GameModeDirectorModule._showFastBigWin(data: any): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._showFastBigWin() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._showFastBigWin() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_showFastBigWin(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
In Turbo / Fast speed modes, displays the Big Win cutscene concurrently while showing paylines without blocking execution delays.

---

## 3. Un-truncated Source Code Implementation
```typescript
_showFastBigWin(data): Promise<void> {
    this._showCutscene(data);
    return this._showWinPayline(data.cutsceneData);
}
```
