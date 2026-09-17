---
id: "cc_slot_module:PaylineLineModule:methods:showPayLine"
title: "PaylineLineModule.showPayLine Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "showPayLine"]
---

# 📖 `PaylineLineModule.showPayLine()`

<!-- convention-summary-start -->
### PaylineLineModule.showPayLine Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule.showPayLine Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Displays an individual payline by its `payLineID`.

```typescript
protected showPayLine(payLine: PayLineInfo, hideAll: boolean = true): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showPayLine(payLine: PayLineInfo, hideAll: boolean = true): void {
    if (hideAll) {
        this.hideAll();
    }

    if (!payLine.payLineID) {
        return;
    }

    this.showLineNumber(payLine.payLineID);
}
```
