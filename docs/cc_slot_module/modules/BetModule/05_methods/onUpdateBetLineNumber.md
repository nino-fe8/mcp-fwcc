---
id: "cc_slot_module:BetModule:methods:onUpdateBetLineNumber"
title: "BetModule.onUpdateBetLineNumber Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onUpdateBetLineNumber"]
---

# 📖 `BetModule.onUpdateBetLineNumber()`

<!-- convention-summary-start -->
### BetModule.onUpdateBetLineNumber Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.onUpdateBetLineNumber Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Updates the string displayed on `totalLineLabel`.

```typescript
public onUpdateBetLineNumber(betLineNumber: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateBetLineNumber(betLineNumber: number): void {
    if (this.totalLineLabel && betLineNumber) {
        this.totalLineLabel.string = `${betLineNumber}`;
    }
}
```
