---
id: "cc_slot_module:ExtraBetModule:methods:onUpdateTotalBet"
title: "ExtraBetModule.onUpdateTotalBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onUpdateTotalBet"]
---

# 📖 `ExtraBetModule.onUpdateTotalBet()`

<!-- convention-summary-start -->
### ExtraBetModule.onUpdateTotalBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.onUpdateTotalBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Updates `extraBetLabel.string` with the current `extraBetValue` from the data model.

```typescript
public onUpdateTotalBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateTotalBet(): void {
    this.extraBetLabel.string = this.betModel.extraBetValue.toString();
}
```
