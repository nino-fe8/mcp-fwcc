---
id: "cc_slot_module:FreeGameDirectorModule:method:onBeforeSpinStart"
title: "FreeGameDirectorModule.onBeforeSpinStart() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "onBeforeSpinStart"]
---

# `FreeGameDirectorModule.onBeforeSpinStart(): Promise<void>`

<!-- convention-summary-start -->
### FreeGameDirectorModule.onBeforeSpinStart() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule.onBeforeSpinStart() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
onBeforeSpinStart(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Invokes `this.runAction("FreeSpinTrigger")` to execute the sequence planned by `FreeGameWriterModule`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onBeforeSpinStart(): Promise<void> {
    return this.runAction("FreeSpinTrigger");
}
```
