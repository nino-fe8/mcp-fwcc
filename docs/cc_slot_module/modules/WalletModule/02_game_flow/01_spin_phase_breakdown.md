---
id: "cc_slot_module:WalletModule:game_flow:spin_phase_breakdown"
title: "WalletModule Spin Phase Synchronization"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 WalletModule Spin Phase Synchronization

<!-- convention-summary-start -->
### WalletModule Spin Phase Synchronization Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for WalletModule Spin Phase Synchronization.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Lifecycle Phases

| Phase | Wallet State | Trigger |
| :--- | :--- | :--- |
| **Bet Deduct** | Wager subtracted from balance. | Fired upon spin network request. |
| **Spin In-Flight** | Balance remains deducted. | Reels rolling. |
| **Win Presentation** | Pauses rolling balance (`pauseWallet`). | `PAUSE_WALLET` event from Director. |
| **Settle** | Adds total round win to balance (`resumeWallet`). | `RESUME_WALLET` / `SYNC_WALLET` event. |
