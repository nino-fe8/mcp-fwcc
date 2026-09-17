---
id: "cc_slot_module:PaylineSymbolModule:method:stopAllPayLines"
title: "PaylineSymbolModule.stopAllPayLines Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "stopAllPayLines"]
---

# 🚀 `PaylineSymbolModule.stopAllPayLines(): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.stopAllPayLines Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.stopAllPayLines Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected stopAllPayLines(): void
```

---

## 2. Full Source Code

```typescript
protected stopAllPayLines(): void {
    for (const symbol of this.symbols) {
        symbol.emit('STOP_ANIMATION');
        symbol.emit('ENABLE_HIGHLIGHT');
    }
    this.updateSymbolSiblingIndex();
}
```
