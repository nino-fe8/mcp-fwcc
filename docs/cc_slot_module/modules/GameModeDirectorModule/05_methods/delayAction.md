---
id: "cc_slot_module:GameModeDirectorModule:method:delayAction"
title: "GameModeDirectorModule.delayAction() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "delayAction"]
---

# `GameModeDirectorModule.delayAction(time: number): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.delayAction() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.delayAction() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
delayAction(time: number = 0): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. If `time <= 0`, resolves immediately.
2. Registers a cancellable callback `this._delayActionCB` using `this.scheduleOnce()`.
3. Clears callback reference upon trigger and resolves Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
delayAction(time: number = 0): Promise<void> {
    if (time <= 0) {
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        this._delayActionCB = () => {
            this._delayActionCB = null;
            resolve();
        }

        this.scheduleOnce(this._delayActionCB, time);
    });
};
```
