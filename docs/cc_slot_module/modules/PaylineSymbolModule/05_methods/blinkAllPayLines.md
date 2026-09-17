---
id: "cc_slot_module:PaylineSymbolModule:method:blinkAllPayLines"
title: "PaylineSymbolModule.blinkAllPayLines Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "blinkAllPayLines"]
---

# 🚀 `PaylineSymbolModule.blinkAllPayLines(data): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.blinkAllPayLines Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.blinkAllPayLines Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected blinkAllPayLines(data: { blinkDuration: number }): void
```

---

## 2. Full Source Code

```typescript
protected blinkAllPayLines(data: { blinkDuration: number }): void {
    const symbolSet: cc.Node[] = this.getAllWinSymbols();
    this.showListWinSymbols(symbolSet, data.blinkDuration);
}
```
