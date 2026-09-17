---
id: "cc_slot_module:WalletModule:methods:onSwitchMode"
title: "WalletModule.onSwitchMode Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onSwitchMode"]
---

# 📖 `WalletModule.onSwitchMode()`

<!-- convention-summary-start -->
### WalletModule.onSwitchMode Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule.onSwitchMode Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Dispatches `RESUME_WALLET` to the appropriate wallet node on demo/real mode switch.

```typescript
public onSwitchMode(isTrialModeActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSwitchMode(isTrialModeActive: boolean): void {
    if (isTrialModeActive) {
        this.trialWallet.emit("RESUME_WALLET");
    } else {
        this.realWallet.emit("RESUME_WALLET");
    }
}
```
