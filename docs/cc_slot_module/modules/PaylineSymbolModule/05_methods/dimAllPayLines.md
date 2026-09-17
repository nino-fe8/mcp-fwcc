---
id: "cc_slot_module:PaylineSymbolModule:method:dimAllPayLines"
title: "PaylineSymbolModule.dimAllPayLines Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "dimAllPayLines"]
---

# 🚀 `PaylineSymbolModule.dimAllPayLines(excludeSymbols): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.dimAllPayLines Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.dimAllPayLines Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected dimAllPayLines(excludeSymbols: cc.Node[] = []): void
```

---

## 2. Full Source Code

```typescript
protected dimAllPayLines(excludeSymbols: cc.Node[] = []): void {
    const excludeSet = (excludeSymbols && excludeSymbols.length > 0) ? new Set(excludeSymbols) : null;
    for (const symbol of this.symbols) {
        if (!excludeSet || !excludeSet.has(symbol)) {
            symbol.emit('SHOW_STATIC');
            symbol.emit('DISABLE_HIGHLIGHT');
        }
    }
}
```
