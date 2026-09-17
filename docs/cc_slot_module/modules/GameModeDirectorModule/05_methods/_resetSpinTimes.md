---
id: "cc_slot_module:GameModeDirectorModule:method:resetSpinTimes"
title: "GameModeDirectorModule._resetSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resetSpinTimes"]
---

# `GameModeDirectorModule._resetSpinTimes(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._resetSpinTimes() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._resetSpinTimes() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_resetSpinTimes(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits `"RESET_SPINTIMES"` on the `this.spinTimes` HUD node.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resetSpinTimes(): Promise<void> {
    this.spinTimes && this.spinTimes.emit("RESET_SPINTIMES");
    return Promise.resolve();
}
```
