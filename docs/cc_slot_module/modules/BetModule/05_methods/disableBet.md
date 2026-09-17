---
id: "cc_slot_module:BetModule:methods:disableBet"
title: "BetModule.disableBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "disableBet"]
---

# 📖 `BetModule.disableBet()`

<!-- convention-summary-start -->
### BetModule.disableBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.disableBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Disables interaction on both `increaseBet` and `decreaseBet` buttons.

```typescript
public disableBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
disableBet(): void {
    this.decreaseBet.interactable = false;
    this.increaseBet.interactable = false;
}
```
