---
id: "cc_slot_module:FreeGameWriterModule:method:makeScriptResumeGameMode"
title: "FreeGameWriterModule.makeScriptResumeGameMode() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "method", "makeScriptResumeGameMode"]
---

# `FreeGameWriterModule.makeScriptResumeGameMode(): Object[]`

<!-- convention-summary-start -->
### FreeGameWriterModule.makeScriptResumeGameMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule.makeScriptResumeGameMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
makeScriptResumeGameMode(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
Constructs an array containing commands:
1. `_resumeFreeTable` ➔ Syncs the Free Game matrix.
2. `_resumeWinAmount` ➔ Syncs accumulated Free Game win total.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptResumeGameMode(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_resumeFreeTable",
    });
    listScript.push({
        command: "_resumeWinAmount",
    });
    return listScript;
}
```
