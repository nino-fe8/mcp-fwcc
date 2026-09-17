---
id: "cc_slot_module:FreeGameDirectorModule:method:syncNormalTable"
title: "FreeGameDirectorModule.syncNormalTable() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "syncNormalTable"]
---

# `FreeGameDirectorModule.syncNormalTable(data?: any): void`

<!-- convention-summary-start -->
### FreeGameDirectorModule.syncNormalTable() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule.syncNormalTable() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
syncNormalTable(data?: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME)` to render the base game matrix when transitioning into Free Spins.

---

## 3. Un-truncated Source Code Implementation
```typescript
syncNormalTable(data?): void {
    this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME);
}
```
