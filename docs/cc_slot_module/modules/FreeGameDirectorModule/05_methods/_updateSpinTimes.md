---
id: "cc_slot_module:FreeGameDirectorModule:method:updateSpinTimes"
title: "FreeGameDirectorModule._updateSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_updateSpinTimes"]
---

# `FreeGameDirectorModule._updateSpinTimes(spinTimes: number): Promise<void>`

<!-- convention-summary-start -->
### FreeGameDirectorModule._updateSpinTimes() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule._updateSpinTimes() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_updateSpinTimes(spinTimes: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assigns `this.dataStore.freeSpinTimes = spinTimes`.
2. Emits `"UPDATE_SPINTIMES"` on `this.spinTimes` node.
3. Returns resolved Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
_updateSpinTimes(spinTimes): Promise<void> {
    this.dataStore.freeSpinTimes = spinTimes;
    this.spinTimes.emit("UPDATE_SPINTIMES", spinTimes);
    return Promise.resolve();
}
```
