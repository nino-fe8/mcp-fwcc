---
id: "cc_slot_module:NormalGameWriterModule:method:makeScriptSyncPlaySessionData"
title: "NormalGameWriterModule.makeScriptSyncPlaySessionData() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "method", "makeScriptSyncPlaySessionData"]
---

# `NormalGameWriterModule.makeScriptSyncPlaySessionData(): Object[]`

<!-- convention-summary-start -->
### NormalGameWriterModule.makeScriptSyncPlaySessionData() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameWriterModule.makeScriptSyncPlaySessionData() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public makeScriptSyncPlaySessionData(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles synchronization steps:
   * `_syncWinAmountPS`: Syncs turn win amount with playSession data.
   * `_syncWallet`: Syncs balance state.
2. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptSyncPlaySessionData(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_syncWinAmountPS",
    });
    listScript.push({
        command: "_syncWallet",
    });
    return listScript;
}
```
