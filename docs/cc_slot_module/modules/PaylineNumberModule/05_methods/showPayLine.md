---
id: "cc_slot_module:PaylineNumberModule:methods:showPayLine"
title: "PaylineNumberModule.showPayLine Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "showPayLine"]
---

# 📖 `PaylineNumberModule.showPayLine()`

<!-- convention-summary-start -->
### PaylineNumberModule.showPayLine Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule.showPayLine Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stage 2 handler isolating a single payline number.

```typescript
protected showPayLine(payline: PayLineInfo): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showPayLine(payline: PayLineInfo): void {
    this.hideAll();
    this.showNumber(payline.payLineID);
}
```
