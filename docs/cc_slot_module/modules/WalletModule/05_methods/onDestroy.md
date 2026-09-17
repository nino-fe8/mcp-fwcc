---
id: "cc_slot_module:WalletModule:methods:onDestroy"
title: "WalletModule.onDestroy Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `WalletModule.onDestroy()`

<!-- convention-summary-start -->
### WalletModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Releases reactive observers registered against `walletModel` and `uiManagerData`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.walletModel, this);
    this.observer.releaseAll(this.uiManagerData, this);
}
```
