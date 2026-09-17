---
id: "cc_slot_module:ExtraBetModule:methods:setupObserver"
title: "ExtraBetModule.setupObserver Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `ExtraBetModule.setupObserver()`

<!-- convention-summary-start -->
### ExtraBetModule.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Registers observers on `minExtraBetEnable`, `maxExtraBetEnable`, and `totalBet`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.betModel, "minExtraBetEnable", this.onMinExtraBetEnable.bind(this), this);
    this.observer.watch(this.betModel, "maxExtraBetEnable", this.onMaxExtraBetEnable.bind(this), this);
    this.observer.watch(this.betModel, "totalBet", this.onUpdateTotalBet.bind(this), this);
}
```
