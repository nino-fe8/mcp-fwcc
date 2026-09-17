---
id: "cc_slot_module:GameModeDirectorModule:method:onStartRespinningTable"
title: "GameModeDirectorModule.onStartRespinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onStartRespinningTable"]
---

# `GameModeDirectorModule.onStartRespinningTable(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.onStartRespinningTable() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.onStartRespinningTable() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
onStartRespinningTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"StartRespinning"`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onStartRespinningTable(): Promise<void> {
    return this.runAction("StartRespinning");
}
```
