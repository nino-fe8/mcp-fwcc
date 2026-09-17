---
id: "cc_slot_module:ExtraBetModule:methods:disableExtraBet"
title: "ExtraBetModule.disableExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "disableExtraBet"]
---

# 📖 `ExtraBetModule.disableExtraBet()`

<!-- convention-summary-start -->
### ExtraBetModule.disableExtraBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.disableExtraBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Disables both increment and decrement buttons on the Ante-Bet HUD.

```typescript
public disableExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
disableExtraBet(): void {
    this.increaseExtraBet.interactable = false;
    this.decreaseExtraBet.interactable = false;
}
```
