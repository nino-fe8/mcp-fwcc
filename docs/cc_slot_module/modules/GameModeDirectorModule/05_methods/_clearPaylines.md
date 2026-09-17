---
id: "cc_slot_module:GameModeDirectorModule:method:clearPaylines"
title: "GameModeDirectorModule._clearPaylines() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_clearPaylines"]
---

# `GameModeDirectorModule._clearPaylines(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._clearPaylines() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._clearPaylines() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_clearPaylines(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("CLEAR_PAYLINES")` to turn off blinking symbols, win frames, and payline tracks.

---

## 3. Un-truncated Source Code Implementation
```typescript
_clearPaylines(): Promise<void> {
    return this.moduleEvent.emit("CLEAR_PAYLINES");
}
```
