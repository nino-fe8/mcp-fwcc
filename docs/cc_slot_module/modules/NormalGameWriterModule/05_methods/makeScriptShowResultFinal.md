---
id: "cc_slot_module:NormalGameWriterModule:method:makeScriptShowResultFinal"
title: "NormalGameWriterModule.makeScriptShowResultFinal() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "method", "makeScriptShowResultFinal", "wallet"]
---

# `NormalGameWriterModule.makeScriptShowResultFinal(): Object[]`

<!-- convention-summary-start -->
### NormalGameWriterModule.makeScriptShowResultFinal() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameWriterModule.makeScriptShowResultFinal() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public makeScriptShowResultFinal(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `[{ command: "_resumeWallet" }]` to unfreeze wallet update listeners after the spin completes.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptShowResultFinal(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_resumeWallet",
    });
    return listScript;
}
```
