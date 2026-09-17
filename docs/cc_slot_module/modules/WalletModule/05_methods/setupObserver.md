---
id: "cc_slot_module:WalletModule:methods:setupObserver"
title: "WalletModule.setupObserver Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `WalletModule.setupObserver()`

<!-- convention-summary-start -->
### WalletModule.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Registers observers on visibility flags and real vs trial balance values.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.uiManagerData, 'isWalletActive', this.onWalletActive.bind(this), this, { fireImmediately: true });
    this.observer.watch(this.uiManagerData, 'isWalletTrialActive', this.onTrialWalletActive.bind(this), this, { fireImmediately: true });
    this.observer.watch(this.uiManagerData, "isTrialModeActive", this.onSwitchMode.bind(this), this);

    const { WALLET_TYPE } = this.walletModel;
    this.observer.watch(this.walletModel, `wallets.${WALLET_TYPE.NORMAL}`, this.onUpdateWallet.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
    this.observer.watch(this.walletModel, `wallets.${WALLET_TYPE.TRIAL}`, this.onUpdateTrialWallet.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
}
```
