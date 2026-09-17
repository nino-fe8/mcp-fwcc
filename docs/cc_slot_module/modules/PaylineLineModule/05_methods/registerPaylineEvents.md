---
id: "cc_slot_module:PaylineLineModule:methods:registerPaylineEvents"
title: "PaylineLineModule.registerPaylineEvents Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "registerPaylineEvents"]
---

# 📖 `PaylineLineModule.registerPaylineEvents()`

<!-- convention-summary-start -->
### PaylineLineModule.registerPaylineEvents Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule.registerPaylineEvents Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Subscribes to internal `payLineEmitter` events.

```typescript
protected registerPaylineEvents(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected registerPaylineEvents(): void {
    if (!this.payLineEmitter) {
        return;
    }

    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.setupPaylines, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_BLINK_ALL, this.blinkAllPayLines, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_LINE, this.showPayLine, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.hideAll, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.clearAll, this);
}
```
