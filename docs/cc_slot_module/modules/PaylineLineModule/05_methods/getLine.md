---
id: "cc_slot_module:PaylineLineModule:methods:getLine"
title: "PaylineLineModule.getLine Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "getLine"]
---

# 📖 `PaylineLineModule.getLine()`

<!-- convention-summary-start -->
### PaylineLineModule.getLine Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule.getLine Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Retrieves an available node from `linePool` or instantiates a fresh clone of `template`.

```typescript
protected getLine(): cc.Node
```

---

## 2. Complete Source Code Implementation

```typescript
protected getLine(): cc.Node {
    if (this.linePool.size() > 0) {
        return this.linePool.get();
    }
    return instantiate(this.template);
}
```
