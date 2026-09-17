---
id: "cc_slot_module:PaylineSymbolModule:method:mapSymbolToPayLine"
title: "PaylineSymbolModule.mapSymbolToPayLine Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "mapSymbolToPayLine"]
---

# 🚀 `PaylineSymbolModule.mapSymbolToPayLine(): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.mapSymbolToPayLine Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.mapSymbolToPayLine Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected mapSymbolToPayLine(): void
```

---

## 2. Full Source Code

```typescript
protected mapSymbolToPayLine(): void {
    if (!this.matrix) {
        return;
    }

    if (!this.mapTableSymbols) {
        this.mapTableSymbols = [];
    }

    for (let reel = 0; reel < this.matrix.length; reel++) {
        if (!this.mapTableSymbols[reel]) {
            this.mapTableSymbols[reel] = [];
        }
        for (let row = 0; row < this.matrix[reel].length; row++) {
            this.mapTableSymbols[reel][row] = this.getSymbol(reel, row);
        }
    }
}
```
