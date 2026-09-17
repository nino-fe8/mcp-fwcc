---
id: "cc_slot_module:GameModeDirectorModule:method:delayTimeScript"
title: "GameModeDirectorModule._delayTimeScript() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_delayTimeScript"]
---

# `GameModeDirectorModule._delayTimeScript(time: number): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._delayTimeScript() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._delayTimeScript() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_delayTimeScript(time: number = 0): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Creates a tween-based delay action on `this.node` to asynchronously pause script execution for `time` seconds.

---

## 3. Un-truncated Source Code Implementation
```typescript
_delayTimeScript(time: number = 0): Promise<void> {
    if (time <= 0) {
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        this._tweenDelayTimeScript && this._tweenDelayTimeScript.stop();
        this._tweenDelayTimeScript = tween(this.node)
            .delay(time)
            .call(() => {
                this._tweenDelayTimeScript = null;
                resolve();
            })
            .start();
    });
};
```
