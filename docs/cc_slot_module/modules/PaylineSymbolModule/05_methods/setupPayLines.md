---
id: "cc_slot_module:PaylineSymbolModule:method:setupPayLines"
title: "PaylineSymbolModule.setupPayLines Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "setupPayLines"]
---

# 🚀 `PaylineSymbolModule.setupPayLines(data): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.setupPayLines Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.setupPayLines Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected setupPayLines(data: { matrix: string[][], payLines: PayLineInfo[] }): void
```

---

## 2. Full Source Code

```typescript
protected setupPayLines(data: { matrix: string[][], payLines: PayLineInfo[] }): void {
    if (this.paylineConfig.IS_DEBUG) {
        log("[PaylineSymbolModule] setupPaylines", data);
    }
    this.matrix = Array.from(data.matrix);
    this.payLines = Array.from(data.payLines);
}
```
