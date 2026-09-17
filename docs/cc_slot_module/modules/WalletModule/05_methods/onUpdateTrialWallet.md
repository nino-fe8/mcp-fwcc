---
id: "cc_slot_module:WalletModule:methods:onUpdateTrialWallet"
title: "WalletModule.onUpdateTrialWallet Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onUpdateTrialWallet"]
---

# 📖 `WalletModule.onUpdateTrialWallet()`

<!-- convention-summary-start -->
### WalletModule.onUpdateTrialWallet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule.onUpdateTrialWallet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Dispatches `ON_UPDATE_VALUE` to the `trialWallet` display node with the latest demo balance.

```typescript
public onUpdateTrialWallet(value: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateTrialWallet(value): void {
    this.trialWallet.emit('ON_UPDATE_VALUE', value);
}
```
