---
id: "cc_slot_module:JackpotModule:methods:showJackpot"
title: "JackpotModule.showJackpot Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "showJackpot"]
---

# 📖 `JackpotModule.showJackpot()`

<!-- convention-summary-start -->
### JackpotModule.showJackpot Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule.showJackpot Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Toggles visibility of the jackpot container node.

```typescript
public showJackpot(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showJackpot(isActive: boolean): void {
    this.node.active = isActive;
}
```
