---
id: "cc_slot_module:GameModeDirectorModule:method:setUpSpinTimes"
title: "GameModeDirectorModule.setUpSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "setUpSpinTimes"]
---

# `GameModeDirectorModule.setUpSpinTimes(data: any): void`

<!-- convention-summary-start -->
### GameModeDirectorModule.setUpSpinTimes() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.setUpSpinTimes() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
setUpSpinTimes(data: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
Extracts `gameMode` and `node` from `data`. If `gameMode === this.gameMode`, assigns `this.spinTimes = node`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setUpSpinTimes(data): void {
    const { gameMode, node } = data;
    if (gameMode === this.gameMode) {
        this.spinTimes = node;
    }
}
```
