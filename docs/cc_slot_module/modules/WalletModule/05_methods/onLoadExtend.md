---
id: "cc_slot_module:WalletModule:methods:onLoadExtend"
title: "WalletModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `WalletModule.onLoadExtend()`

<!-- convention-summary-start -->
### WalletModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Registers listeners for global wallet lifecycle events on `eventManager`.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.WALLET.PAUSE_WALLET, this.pauseWallet, this);
    this.eventManager.on(GameUIEvents.WALLET.RESUME_WALLET, this.resumeWallet, this);
    this.eventManager.on(GameUIEvents.WALLET.SYNC_WALLET, this.syncWallet, this);
}
```
