---
id: "cc_slot_module:BaseGameDirector:method:onResetScript"
title: "BaseGameDirector.onResetScript() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "onResetScript", "FastStop", "Skip"]
---

# `BaseGameDirector.onResetScript(actionName: string): Promise<void>`

<!-- convention-summary-start -->
### BaseGameDirector.onResetScript() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseGameDirector.onResetScript() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public onResetScript(actionName: string): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Forwards reset request to `this.executor.onResetScript(actionName)`.
2. Converts pending skippable steps in the queue to `_reset[Command]`.
3. Returns a `Promise<void>` that resolves when the converted reset queue finishes executing.

---

## 3. Un-truncated Source Code Implementation
```typescript
onResetScript(actionName: string): Promise<void> {
    return this.executor.onResetScript(actionName);
}
```
