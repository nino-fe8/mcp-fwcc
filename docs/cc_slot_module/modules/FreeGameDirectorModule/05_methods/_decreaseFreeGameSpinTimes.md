---
id: "cc_slot_module:FreeGameDirectorModule:method:_decreaseFreeGameSpinTimes"
title: "FreeGameDirectorModule._decreaseFreeGameSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_decreaseFreeGameSpinTimes", "spin_counter"]
---

# `FreeGameDirectorModule._decreaseFreeGameSpinTimes(): Promise<void>`

<!-- convention-summary-start -->
### FreeGameDirectorModule._decreaseFreeGameSpinTimes() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule._decreaseFreeGameSpinTimes() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public _decreaseFreeGameSpinTimes(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Decrements local state: `this.dataStore.freeSpinTimes--`.
2. Emits updated counter to HUD: `this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes)`.
3. Returns `Promise.resolve()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_decreaseFreeGameSpinTimes(): Promise<void> {
    this.dataStore.freeSpinTimes--;
    this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes);
    return Promise.resolve();
}
```
