---
id: "cc_slot_module:WalletModule:director_writer:subsystem_impacts"
title: "WalletModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 WalletModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### WalletModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Controls wallet node visibility (`isWalletActive`, `isWalletTrialActive`). |
| **`GameDataStore`** | Checks `currentGameMode` to restrict premature balance display in Free Spins. |
| **`SlotGameSettings`** | Reads `isTrialMode` to route events to `realWallet` vs `trialWallet`. |
| **`WinEffectModule`** | Triggers `PAUSE_WALLET` and `RESUME_WALLET` around celebration sequences. |
