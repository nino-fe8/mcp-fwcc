---
id: "cc_slot_module:GameModeDirectorModule:method:onPreStopSpinningTable"
title: "GameModeDirectorModule.onPreStopSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onPreStopSpinningTable"]
---

# `GameModeDirectorModule.onPreStopSpinningTable(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.onPreStopSpinningTable() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.onPreStopSpinningTable() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
onPreStopSpinningTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"PreStopSpinningTable"` (used for sure-win animations, mascot reactions, or reel lightning effects before stopping).

---

## 3. Un-truncated Source Code Implementation
```typescript
onPreStopSpinningTable(): Promise<void> {
    return this.runAction("PreStopSpinningTable");
}
```
