---
id: "cc_slot_module:PaylineSymbolModule:method:registerPaylineEvents"
title: "PaylineSymbolModule.registerPaylineEvents Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "registerPaylineEvents"]
---

# 🚀 `PaylineSymbolModule.registerPaylineEvents(): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.registerPaylineEvents Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.registerPaylineEvents Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected registerPaylineEvents(): void
```

---

## 2. Full Source Code

```typescript
protected registerPaylineEvents(): void {
    if (this.payLineEmitter) {
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.setupPayLines, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_BLINK_ALL, this.blinkAllPayLines, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.stopAllPayLines, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_DIM_ALL, this.dimAllPayLines, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_LINE, this.showSinglePayLine, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, this.showSpecialSymbolById, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_JACKPOT_LINE, this.showJackpotLine, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.clearAll, this);
    }

    if (this.moduleEvent) {
        this.moduleEvent.on("SHOW_IDLE_SYMBOLS", this.showIdleSymbols, this);
    }
}
```
