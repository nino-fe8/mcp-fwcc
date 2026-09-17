---
id: "cc_slot_module:WalletModule:events:scoped_module_events"
title: "WalletModule Scoped Events"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 WalletModule Scoped Events

<!-- convention-summary-start -->
### WalletModule Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Scoped Events Emitted

| Event Name | Target Node | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `ON_UPDATE_VALUE` | `realWallet` / `trialWallet` | `value: number` | Pushes updated balance number to child labels. |
| `PAUSE_WALLET` | `realWallet` / `trialWallet` | None | Pauses active balance count-up tween. |
| `RESUME_WALLET` | `realWallet` / `trialWallet` | None | Concludes rolling balance count-up tween. |
