---
id: "cc_slot_module:FreeGameWriterModule:method:makeScriptFreeSpinTrigger"
title: "FreeGameWriterModule.makeScriptFreeSpinTrigger() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "method", "makeScriptFreeSpinTrigger"]
---

# `FreeGameWriterModule.makeScriptFreeSpinTrigger(): Object[]`

<!-- convention-summary-start -->
### FreeGameWriterModule.makeScriptFreeSpinTrigger() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule.makeScriptFreeSpinTrigger() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public makeScriptFreeSpinTrigger(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles an array of 5 steps to prepare and decrement the active free spin:
   * `_beforeSpinStart`: Resets game speed and clears delay callbacks.
   * `_syncPlaySessionData`: Syncs win amounts.
   * `_resetOnSpin`: Resets local feature states.
   * `_resetTable`: Clears table grid and paylines.
   * `_decreaseFreeGameSpinTimes`: Decrements `freeSpinTimes` counter on the HUD.
2. Returns the command array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptFreeSpinTrigger(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_beforeSpinStart",
    });
    listScript.push({
        command: "_syncPlaySessionData",
    });
    listScript.push({
        command: "_resetOnSpin",
    });
    listScript.push({
        command: "_resetTable",
    });
    listScript.push({
        command: "_decreaseFreeGameSpinTimes",
    });
    return listScript;
}
```
