---
id: "cc_slot_module:PaylineLineModule:methods:hideAll"
title: "PaylineLineModule.hideAll Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "hideAll"]
---

# 📖 `PaylineLineModule.hideAll()`

<!-- convention-summary-start -->
### PaylineLineModule.hideAll Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule.hideAll Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits `"HIDE"` across all instantiated line nodes.

```typescript
protected hideAll(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected hideAll(): void {
    this.lines.forEach(line => {
        line.emit("HIDE");
    });
}
```
