---
id: "cc_slot_module:WalletModule:gotchas:unreleased_wallet_observer_leak"
title: "Gotcha: Observer Memory Leak Across Mode Swaps"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "gotchas", "memory_leak"]
---

# ⚠️ Gotcha: Observer Memory Leak Across Mode Swaps

<!-- convention-summary-start -->
### Gotcha: Observer Memory Leak Across Mode Swaps Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Observer Memory Leak Across Mode Swaps.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`WalletModule` watches both `WalletData` and `UIManagerData`. If `this.observer.releaseAll()` is not invoked for both models in `onDestroy()`, stale handlers persist and duplicate balance emissions occur on subsequent game reloads.

---

## 2. Prevention

Always release both models:
```typescript
onDestroy(): void {
    this.observer.releaseAll(this.walletModel, this);
    this.observer.releaseAll(this.uiManagerData, this);
}
```
