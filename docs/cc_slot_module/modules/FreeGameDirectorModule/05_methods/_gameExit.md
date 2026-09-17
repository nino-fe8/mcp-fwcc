---
id: "cc_slot_module:FreeGameDirectorModule:method:_gameExit"
title: "FreeGameDirectorModule._gameExit() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_gameExit", "mode_exit"]
---

# `FreeGameDirectorModule._gameExit(): Promise<void>`

<!-- convention-summary-start -->
### FreeGameDirectorModule._gameExit() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule._gameExit() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public _gameExit(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Emits scoped event: `this.moduleEvent.emit("CLEAR_PAYLINES")`.
2. Emits scoped event: `this.moduleEvent.emit("SYNC_TABLE")`.
3. Returns `Promise.resolve()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_gameExit(): Promise<void> {
    this.moduleEvent.emit("CLEAR_PAYLINES");
    this.moduleEvent.emit("SYNC_TABLE");
    return Promise.resolve();
}
```
