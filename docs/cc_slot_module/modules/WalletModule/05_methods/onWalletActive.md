---
id: "cc_slot_module:WalletModule:methods:onWalletActive"
title: "WalletModule.onWalletActive Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onWalletActive"]
---

# 📖 `WalletModule.onWalletActive()`

<!-- convention-summary-start -->
### WalletModule.onWalletActive Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule.onWalletActive Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes `realWallet.active` with `uiManagerData.isWalletActive`.

```typescript
public onWalletActive(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onWalletActive(isActive): void {
    this.realWallet.active = isActive;
}
```
