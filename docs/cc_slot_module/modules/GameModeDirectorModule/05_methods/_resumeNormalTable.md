---
id: "cc_slot_module:GameModeDirectorModule:method:resumeNormalTable"
title: "GameModeDirectorModule._resumeNormalTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resumeNormalTable"]
---

# `GameModeDirectorModule._resumeNormalTable(data: any): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._resumeNormalTable() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._resumeNormalTable() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_resumeNormalTable(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped event `this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME)` to reconstruct the normal table matrix.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resumeNormalTable(data): Promise<void> {
    return this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME);
}
```
