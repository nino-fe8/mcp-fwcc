---
id: "cc_network:PlayerInfoStateManager:overview"
title: "PlayerInfoStateManager Module Architecture & Multi-Wallet Manager"
category: "cc_network"
tags: ["PlayerInfoStateManager", "wallet", "multi_wallet", "currency", "real_user", "trial_user"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 💳 `PlayerInfoStateManager` Module Architecture & Multi-Wallet Manager

<!-- convention-summary-start -->
### PlayerInfoStateManager Module Architecture & Multi-Wallet Manager Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PlayerInfoStateManager Module Architecture & Multi-Wallet Manager.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, PlayerInfoStateManager
- **Scope & Code Paths**: `../../../../../../assets/cc-common/cc-network/game-network.js`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source Location**: Compiled in [`assets/cc-common/cc-network/game-network.js`](../../../../../../assets/cc-common/cc-network/game-network.js)
- **Role**: Maintains player identity, user mode classification (Real vs Trial), active currency, and version-checked multi-wallet balances (`main` and `promotion`).

---

## 1. 🏛️ Architecture & Role Specification

`PlayerInfoStateManager` is a singleton store providing:
1. **User Identity & Mode**: Tracks `userId`, `displayName`, `userType`, and determines whether the player is a real paying user (`isRealUser()`) or a guest/demo player (`isAnonymousUser()`).
2. **Multi-Wallet Stores**: Manages `walletInfos` separating `main` cash wallet and `promotion` bonus wallet.
3. **Version-Checked Balance Synchronization**: Compares sequence version numbers on incoming balance packets (`wallet-updated`, `wud-pAmt`, `state-pushed`) to guarantee that older/delayed packets never overwrite more recent balance updates.
