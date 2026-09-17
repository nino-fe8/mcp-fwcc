---
id: "cc_slot_module:FreeGameDirectorModule:method:beforeSpinStart"
title: "FreeGameDirectorModule._beforeSpinStart() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_beforeSpinStart"]
---

# `FreeGameDirectorModule._beforeSpinStart(): Promise<void>`

<!-- convention-summary-start -->
### FreeGameDirectorModule._beforeSpinStart() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule._beforeSpinStart() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
async _beforeSpinStart(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resets speed profile: `this.resetGameSpeed()`.
2. Clears previous effects: `this.skipAllEffects()`.
3. Sets `this.isFirstAutoSpin = false`.
4. Awaits pacing interval: `await this.delayAutoSpin()`.
5. Resolves Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _beforeSpinStart(): Promise<void> {
    this.resetGameSpeed();
    this.skipAllEffects();
    this.isFirstAutoSpin = false;
    await this.delayAutoSpin();
    return Promise.resolve();
}
```
