---
id: "cc_slot_module:SlotSymbolManager:method:onLoadExtend"
title: "SlotSymbolManager.onLoadExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "onLoadExtend"]
---

# `SlotSymbolManager.onLoadExtend(): void`

<!-- convention-summary-start -->
### SlotSymbolManager.onLoadExtend() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager.onLoadExtend() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
onLoadExtend(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Invokes `this.initSymbolPool()` to create and pre-fill the `symbolPool`.
2. Under development builds (`CC_DEV`), registers global debug listeners on `cc.director`:
   * `'show-log-using-symbols-owner'` ➔ `this.showLogUsingSymbolsWithOwner`
   * `'show-log-using-symbols'` ➔ `this.showLogUsingSymbols`

---

## 3. Un-truncated Source Code Implementation
```typescript
onLoadExtend(): void {
    this.initSymbolPool();
    //@ts-ignore
    if (CC_DEV) {
        director.on('show-log-using-symbols-owner', this.showLogUsingSymbolsWithOwner, this);
        director.on('show-log-using-symbols', this.showLogUsingSymbols, this);
    }
}
```
