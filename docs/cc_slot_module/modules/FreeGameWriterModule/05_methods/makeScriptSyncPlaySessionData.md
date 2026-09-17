---
id: "cc_slot_module:FreeGameWriterModule:method:makeScriptSyncPlaySessionData"
title: "FreeGameWriterModule.makeScriptSyncPlaySessionData() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "method", "makeScriptSyncPlaySessionData"]
---

# `FreeGameWriterModule.makeScriptSyncPlaySessionData(): Object[]`

<!-- convention-summary-start -->
### FreeGameWriterModule.makeScriptSyncPlaySessionData() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule.makeScriptSyncPlaySessionData() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
makeScriptSyncPlaySessionData(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
Generates `{ command: "_syncWinAmountPS" }`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptSyncPlaySessionData(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_syncWinAmountPS",
    });
    return listScript;
}
```
