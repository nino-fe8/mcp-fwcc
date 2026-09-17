---
id: "cc_slot_module:PaylineSymbolModule:method:showSinglePayLine"
title: "PaylineSymbolModule.showSinglePayLine Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "showSinglePayLine"]
---

# 🚀 `PaylineSymbolModule.showSinglePayLine(payLine, duration): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.showSinglePayLine Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.showSinglePayLine Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected showSinglePayLine(payLine: PayLineInfo | PayWayInfo, duration?: number): void
```

---

## 2. Full Source Code

```typescript
protected showSinglePayLine(payLine: PayLineInfo | PayWayInfo, duration?: number): void {
    const symbolSet: cc.Node[] = this.getWinSymbolsInPayLine(payLine);
    this.showListWinSymbols(symbolSet, duration);
}
```
