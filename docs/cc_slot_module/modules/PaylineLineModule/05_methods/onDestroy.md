---
id: "cc_slot_module:PaylineLineModule:methods:onDestroy"
title: "PaylineLineModule.onDestroy Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `PaylineLineModule.onDestroy()`

<!-- convention-summary-start -->
### PaylineLineModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Cleanup lifecycle hook unregistering listeners from `payLineEmitter`.

```typescript
protected onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onDestroy(): void {
    this.unregisterPaylineEvents();
}
```
