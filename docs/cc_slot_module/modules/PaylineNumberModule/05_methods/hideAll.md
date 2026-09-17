---
id: "cc_slot_module:PaylineNumberModule:methods:hideAll"
title: "PaylineNumberModule.hideAll Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "hideAll"]
---

# 📖 `PaylineNumberModule.hideAll()`

<!-- convention-summary-start -->
### PaylineNumberModule.hideAll Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule.hideAll Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Hides/dims all line number items across both table gutters.

```typescript
protected hideAll(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected hideAll(): void {
    this.numbers.forEach(item => {
        item.hide();
    });
}
```
