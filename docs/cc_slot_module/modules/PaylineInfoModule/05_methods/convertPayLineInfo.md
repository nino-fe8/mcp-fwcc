---
id: "cc_slot_module:PaylineInfoModule:methods:convertPayLineInfo"
title: "PaylineInfoModule.convertPayLineInfo Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "convertPayLineInfo"]
---

# 📖 `PaylineInfoModule.convertPayLineInfo()`

<!-- convention-summary-start -->
### PaylineInfoModule.convertPayLineInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.convertPayLineInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Routes payline data conversion to math-specific formatting routines.

```typescript
protected convertPayLineInfo(paylineInfo: any): any
```

---

## 2. Complete Source Code Implementation

```typescript
protected convertPayLineInfo(paylineInfo: any): any {
    switch (this.gameConfig.PAY_SYSTEM) {
        case PAY_SYSTEM_TYPE_ENUM.ALLWAYS:
            return this.convertPayLineInfoAllWays(paylineInfo);
        case PAY_SYSTEM_TYPE_ENUM.LINES:
            return this.convertPayLineInfoLine(paylineInfo);
        case PAY_SYSTEM_TYPE_ENUM.CLUSTER:
            return this.convertPayLineInfoCluster(paylineInfo);
        case PAY_SYSTEM_TYPE_ENUM.SCATTER_PAY:
            return this.convertPayLineInfoScatterPay(paylineInfo);
    }
}
```
