---
id: "cc_slot_module:GameModeDirectorModule:method:stopSpinningTable"
title: "GameModeDirectorModule._stopSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_stopSpinningTable"]
---

# `GameModeDirectorModule._stopSpinningTable(data: any): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._stopSpinningTable() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._stopSpinningTable() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_stopSpinningTable(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("TABLE_STOP_SPIN", data)` and awaits the resolution of `SlotTableModule.stopSpin()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_stopSpinningTable(data): Promise<void> {
    return this.moduleEvent.emit("TABLE_STOP_SPIN", data);
}
```
