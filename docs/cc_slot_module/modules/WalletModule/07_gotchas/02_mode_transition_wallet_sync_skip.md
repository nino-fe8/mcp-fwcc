---
id: "cc_slot_module:WalletModule:gotchas:mode_transition_wallet_sync_skip"
title: "Gotcha: Skipping Wallet Resume During Free Spins"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "gotchas", "free_spins"]
---

# ⚠️ Gotcha: Skipping Wallet Resume During Free Spins

<!-- convention-summary-start -->
### Gotcha: Skipping Wallet Resume During Free Spins Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Skipping Wallet Resume During Free Spins.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`resumeWallet()` explicitly gates execution with `this.dataStore.currentGameMode !== GAME_MODE_ENUM.NORMAL_GAME`. Calling `resumeWallet()` in Free Game scripts will deliberately do nothing, as free spin wins are accumulated in `TotalWinModule` and credited to the main wallet balance only upon returning to `NORMAL_GAME`.

---

## 2. Prevention

Rely on `TotalWinModule` to present free spin wins during free game cycles; do not force wallet count-ups per individual free spin.
