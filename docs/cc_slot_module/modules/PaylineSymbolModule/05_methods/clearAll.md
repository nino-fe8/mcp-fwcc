---
id: "cc_slot_module:PaylineSymbolModule:method:clearAll"
title: "PaylineSymbolModule.clearAll Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "clearAll"]
---

# 🚀 `PaylineSymbolModule.clearAll(): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.clearAll Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.clearAll Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected clearAll(): void
```

---

## 2. Full Source Code

```typescript
protected clearAll(): void {
    const symbols = eno.ArrayUtils.flatOnce(this.mapTableSymbols).filter(Boolean);
    for (const symbol of symbols) {
        symbol.emit("ENABLE_HIGHLIGHT");
        this.factory.returnSymbol(symbol);
    }
    this.mapTableSymbols = [];
}
```
