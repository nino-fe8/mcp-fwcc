---
id: "cc_slot_module:WalletModule:methods:onUpdateWallet"
title: "WalletModule.onUpdateWallet Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onUpdateWallet"]
---

# 📖 `WalletModule.onUpdateWallet()`

<!-- convention-summary-start -->
### WalletModule.onUpdateWallet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule.onUpdateWallet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Dispatches `ON_UPDATE_VALUE` to the `realWallet` display node with the latest balance.

```typescript
public onUpdateWallet(value: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateWallet(value): void {
    this.realWallet.emit('ON_UPDATE_VALUE', value);
}
```
