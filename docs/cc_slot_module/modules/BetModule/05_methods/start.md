---
id: "cc_slot_module:BetModule:methods:start"
title: "BetModule.start Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "start"]
---

# 📖 `BetModule.start()`

<!-- convention-summary-start -->
### BetModule.start Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.start Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Disables steppers initially, acquires `eno.BetData` from `GameLogic`, and initializes reactive observers.

```typescript
public start(): void
```

---

## 2. Complete Source Code Implementation

```typescript
start(): void {
    this.disableBet();
    this.betModel = this.gameLogic.getDataModel().BetData;
    this.setupObserver();
}
```
