---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptStartRespinning"
title: "GameModeWriterModule.makeScriptStartRespinning() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptStartRespinning", "cascade"]
---

# `GameModeWriterModule.makeScriptStartRespinning(): Object[]`

<!-- convention-summary-start -->
### GameModeWriterModule.makeScriptStartRespinning() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeWriterModule.makeScriptStartRespinning() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public makeScriptStartRespinning(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles cascade respin start pipeline:
   * `_beforeReSpinStart`: Resets respin flag counters.
   * `_showStartRespinEffect`: Animates exploding winning symbols.
   * `_startRespinningTable`: Initiates cascade symbol drop.
2. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptStartRespinning(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_beforeReSpinStart",
    });
    listScript.push({
        command: "_showStartRespinEffect",
    });
    listScript.push({
        command: "_startRespinningTable",
    });
    return listScript;
}
```
