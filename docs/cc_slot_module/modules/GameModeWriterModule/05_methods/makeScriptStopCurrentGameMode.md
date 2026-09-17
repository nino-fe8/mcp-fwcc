---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptStopCurrentGameMode"
title: "GameModeWriterModule.makeScriptStopCurrentGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptStopCurrentGameMode", "emergency_stop"]
---

# `GameModeWriterModule.makeScriptStopCurrentGameMode(): Object[]`

<!-- convention-summary-start -->
### GameModeWriterModule.makeScriptStopCurrentGameMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeWriterModule.makeScriptStopCurrentGameMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public makeScriptStopCurrentGameMode(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles emergency mode abort sequence:
   * `_stopCurrentGameMode`: Halts table spins and timers immediately.
   * `_forceResetGameMode`: Resets data store and settings to `IDLE`.
2. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptStopCurrentGameMode(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_stopCurrentGameMode",
    });
    listScript.push({
        command: "_forceResetGameMode",
    });
    return listScript;
}
```
