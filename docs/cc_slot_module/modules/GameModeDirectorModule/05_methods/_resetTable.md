---
id: "cc_slot_module:GameModeDirectorModule:method:resetTable"
title: "GameModeDirectorModule._resetTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resetTable"]
---

# `GameModeDirectorModule._resetTable(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._resetTable() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._resetTable() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_resetTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Emits scoped event `this.moduleEvent.emit("BEFORE_RESET_TABLE")`.
2. Emits scoped event `this.moduleEvent.emit("CLEAR_PAYLINES")`.
3. Emits scoped event `this.moduleEvent.emit("SYNC_TABLE")`.
4. Returns resolved Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resetTable(): Promise<void> {
    this.moduleEvent.emit("BEFORE_RESET_TABLE");
    this.moduleEvent.emit("CLEAR_PAYLINES");
    this.moduleEvent.emit("SYNC_TABLE");
    return Promise.resolve();
}
```
