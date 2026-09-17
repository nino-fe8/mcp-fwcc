---
id: "cc_slot_module:GameModeDirectorModule:method:beforeSpinStart"
title: "GameModeDirectorModule._beforeSpinStart() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_beforeSpinStart"]
---

# `GameModeDirectorModule._beforeSpinStart(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._beforeSpinStart() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._beforeSpinStart() Method Specification.
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
3. If `this.gameSettings.isAutoSpin` is active, awaits `this.delayAutoSpin()` interval.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _beforeSpinStart(): Promise<void> {
    this.resetGameSpeed();
    this.skipAllEffects();
    if (this.gameSettings.isAutoSpin) {
        await this.delayAutoSpin();
    }
    return Promise.resolve();
}
```
