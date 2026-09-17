---
id: "cc_slot_module:WalletModule:methods:pauseWallet"
title: "WalletModule.pauseWallet Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "pauseWallet"]
---

# 📖 `WalletModule.pauseWallet()`

<!-- convention-summary-start -->
### WalletModule.pauseWallet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule.pauseWallet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Dispatches `PAUSE_WALLET` to the active wallet node (`trialWallet` or `realWallet`) to hold balance counting during celebratory cutscenes.

```typescript
public pauseWallet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
pauseWallet(): void {
    if (this.gameSettings.isTrialMode) {
        this.trialWallet.emit("PAUSE_WALLET");
    } else {
        this.realWallet.emit("PAUSE_WALLET");
    }
}
```
