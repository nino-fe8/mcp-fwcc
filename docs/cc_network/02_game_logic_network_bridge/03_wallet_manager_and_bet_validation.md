---
id: "cc_network:logic_bridge:wallet_manager_and_bet_validation"
title: "WalletManager, PlayerInfoStateManager & Bet Validation Integration"
category: "cc_network"
tags: ["logic_bridge", "WalletManager", "PlayerInfoStateManager", "BetManager", "balance_check", "coin_value"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 💰 `WalletManager`, `PlayerInfoStateManager` & Bet Validation Integration

<!-- convention-summary-start -->
### WalletManager, PlayerInfoStateManager & Bet Validation Integration Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for WalletManager, PlayerInfoStateManager & Bet Validation Integration.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 02_game_logic_network_bridge
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document details the real-time balance calculations, multi-wallet balance selection, and bet validation pipelines.

---

## 1. 🔍 Bet Calculation Formula
```
Total Bet = Bet Size * Bet Level * Base Multiplier (e.g. 20 credits)
```

Before dispatching a spin command, `BetManager` queries `WalletManager.getWalletBalance()`:
```typescript
const currentBalance = walletManager.getWalletBalance();
const totalBet = betManager.getTotalBet();

if (currentBalance < totalBet) {
    slotGameLogic.showPopupNoMoney();
    return false;
}
```

---

## 2. ⚡ Multi-Wallet Handling (`main` vs `promotion`)

`PlayerInfoStateManager` manages two distinct wallet allocations:
1. **`main` Wallet**: Real cash balance used for standard betting.
2. **`promotion` Wallet**: Bonus / promotional credits awarded via special campaigns.

When server sends `wud` or `wallet-updated` packets, the version-checked updater updates balances atomically without interrupting active reel animations.
