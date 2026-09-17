---
id: "cc_slot_module:FreeGameDirectorModule:method:syncSpinTimes"
title: "FreeGameDirectorModule.syncSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "syncSpinTimes", "SpinTimesModule"]
---

# `FreeGameDirectorModule.syncSpinTimes(): void`

<!-- convention-summary-start -->
### FreeGameDirectorModule.syncSpinTimes() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule.syncSpinTimes() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public syncSpinTimes(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Reads `const { freeGameRemain, freeGame } = this.dataStore.playSession`.
2. Stores count: `this.dataStore.freeSpinTimes = freeGameRemain || freeGame`.
3. Emits event directly to the HUD node: `this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
syncSpinTimes(): void {
    const { freeGameRemain, freeGame } = this.dataStore.playSession;
    this.dataStore.freeSpinTimes = freeGameRemain || freeGame;
    this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes);
}
```
