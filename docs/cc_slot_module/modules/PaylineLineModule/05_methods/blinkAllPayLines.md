---
id: "cc_slot_module:PaylineLineModule:methods:blinkAllPayLines"
title: "PaylineLineModule.blinkAllPayLines Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "blinkAllPayLines"]
---

# 📖 `PaylineLineModule.blinkAllPayLines()`

<!-- convention-summary-start -->
### PaylineLineModule.blinkAllPayLines Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule.blinkAllPayLines Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stage 1 handler rendering all hit line tracks simultaneously without hiding previously shown lines.

```typescript
protected blinkAllPayLines(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected blinkAllPayLines(): void {
    this.clearAll();
    this.payLines.forEach(payLine => {
        this.showPayLine(payLine, false);
    });
}
```
