---
id: "cc_slot_module:BaseGameDirector:method:onDestroy"
title: "BaseGameDirector.onDestroy() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "onDestroy", "teardown", "lifecycle"]
---

# `BaseGameDirector.onDestroy(): void`

<!-- convention-summary-start -->
### BaseGameDirector.onDestroy() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseGameDirector.onDestroy() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected onDestroy(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Invokes `this.executor.destroy()`, which executes `this.onResetAllScripts()`.
2. Clears in-flight action promises and prevents memory leaks during scene changes.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onDestroy(): void {
    this.executor.destroy();
}
```
