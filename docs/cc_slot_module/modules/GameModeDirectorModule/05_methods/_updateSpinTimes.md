---
id: "cc_slot_module:GameModeDirectorModule:method:updateSpinTimes"
title: "GameModeDirectorModule._updateSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_updateSpinTimes"]
---

# `GameModeDirectorModule._updateSpinTimes(spineTimes: number): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._updateSpinTimes() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._updateSpinTimes() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_updateSpinTimes(spineTimes: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits `"UPDATE_SPINTIMES"` on the `this.spinTimes` HUD node.

---

## 3. Un-truncated Source Code Implementation
```typescript
_updateSpinTimes(spineTimes): Promise<void> {
    this.spinTimes && this.spinTimes.emit("UPDATE_SPINTIMES", spineTimes);
    return Promise.resolve();
}
```
