---
id: "cc_slot_module:GameModeDirectorModule:method:delayAutoSpin"
title: "GameModeDirectorModule.delayAutoSpin() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "delayAutoSpin"]
---

# `GameModeDirectorModule.delayAutoSpin(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.delayAutoSpin() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.delayAutoSpin() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
delayAutoSpin(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Defaults to `this.delayAction(0.5)`. Subclasses override this method to adjust pacing intervals between consecutive auto spins.

---

## 3. Un-truncated Source Code Implementation
```typescript
delayAutoSpin(): Promise<void> {
    return this.delayAction(0.5);
};
```
