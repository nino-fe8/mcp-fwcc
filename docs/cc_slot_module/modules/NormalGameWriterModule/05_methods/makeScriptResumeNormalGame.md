---
id: "cc_slot_module:NormalGameWriterModule:method:makeScriptResumeNormalGame"
title: "NormalGameWriterModule.makeScriptResumeNormalGame() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "method", "makeScriptResumeNormalGame"]
---

# `NormalGameWriterModule.makeScriptResumeNormalGame(): Object[]`

<!-- convention-summary-start -->
### NormalGameWriterModule.makeScriptResumeNormalGame() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameWriterModule.makeScriptResumeNormalGame() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public makeScriptResumeNormalGame(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `[{ command: "_showAllPaylines" }]` to highlight winning lines upon round resumption.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptResumeNormalGame(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_showAllPaylines",
    });
    return listScript;
}
```
