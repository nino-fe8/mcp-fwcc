---
id: "cc_slot_module:WalletModule:methods:onTrialWalletActive"
title: "WalletModule.onTrialWalletActive Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onTrialWalletActive"]
---

# 📖 `WalletModule.onTrialWalletActive()`

<!-- convention-summary-start -->
### WalletModule.onTrialWalletActive Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule.onTrialWalletActive Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes `trialWallet.active` with `uiManagerData.isWalletTrialActive`.

```typescript
public onTrialWalletActive(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTrialWalletActive(isActive): void {
    this.trialWallet.active = isActive;
}
```
