---
id: "cc_slot_module:GameModeDirectorModule:method:onStopSpinningTable"
title: "GameModeDirectorModule.onStopSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onStopSpinningTable"]
---

# `GameModeDirectorModule.onStopSpinningTable(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.onStopSpinningTable() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.onStopSpinningTable() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
onStopSpinningTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"StopSpinningTable"` (stopping reels and evaluating near-wins).

---

## 3. Un-truncated Source Code Implementation
```typescript
onStopSpinningTable(): Promise<void> {
    return this.runAction("StopSpinningTable");
}
```
