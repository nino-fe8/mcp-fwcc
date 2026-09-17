---
id: "cc_slot_module:BaseGameDirector:method:forceToExit"
title: "BaseGameDirector.forceToExit() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "forceToExit", "ScriptExecutor", "abort"]
---

# `BaseGameDirector.forceToExit(script: any): void`

<!-- convention-summary-start -->
### BaseGameDirector.forceToExit() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseGameDirector.forceToExit() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public forceToExit(script: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Passes the exit script to `this.executor.forceToExit(script)`.
2. Marks `forceToExitMode = true` inside `ScriptExecutor`.
3. Rejects currently pending promises with `Handle Back To Real Mode` error to stop further spin execution.
4. Executes the mandatory exit cleanup script.

---

## 3. Un-truncated Source Code Implementation
```typescript
forceToExit(script): void {
    this.executor.forceToExit(script);
}
```
