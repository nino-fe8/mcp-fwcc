---
id: "cc_slot_module:GameModeDirectorModule:method:setUpPaylines"
title: "GameModeDirectorModule._setUpPaylines() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_setUpPaylines"]
---

# `GameModeDirectorModule._setUpPaylines(data: any): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._setUpPaylines() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._setUpPaylines() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_setUpPaylines(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped event `this.moduleEvent.emit("SETUP_PAYLINES", data)` to initialize payline coordinate paths and win frames.

---

## 3. Un-truncated Source Code Implementation
```typescript
_setUpPaylines(data): Promise<void> {
    return this.moduleEvent.emit("SETUP_PAYLINES", data);
}
```
