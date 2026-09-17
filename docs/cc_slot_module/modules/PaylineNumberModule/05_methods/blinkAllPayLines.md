---
id: "cc_slot_module:PaylineNumberModule:methods:blinkAllPayLines"
title: "PaylineNumberModule.blinkAllPayLines Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "blinkAllPayLines"]
---

# 📖 `PaylineNumberModule.blinkAllPayLines()`

<!-- convention-summary-start -->
### PaylineNumberModule.blinkAllPayLines Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule.blinkAllPayLines Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stage 1 handler illuminating the line number badges for all winning lines.

```typescript
protected blinkAllPayLines(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected blinkAllPayLines(): void {
    this.payLines.forEach(payline => {
        this.showNumber(payline.payLineID);
    });
}
```
