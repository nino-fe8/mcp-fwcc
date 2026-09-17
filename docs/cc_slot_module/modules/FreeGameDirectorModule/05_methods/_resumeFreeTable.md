---
id: "cc_slot_module:FreeGameDirectorModule:method:resumeFreeTable"
title: "FreeGameDirectorModule._resumeFreeTable() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_resumeFreeTable"]
---

# `FreeGameDirectorModule._resumeFreeTable(): Promise<void>`

<!-- convention-summary-start -->
### FreeGameDirectorModule._resumeFreeTable() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule._resumeFreeTable() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_resumeFreeTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("SYNC_TABLE")` to reconstruct the Free Spins reel matrix upon reconnection.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resumeFreeTable(): Promise<void> {
    this.moduleEvent.emit("SYNC_TABLE");
    return Promise.resolve();
}
```
