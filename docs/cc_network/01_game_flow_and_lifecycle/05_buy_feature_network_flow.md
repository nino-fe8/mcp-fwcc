---
id: "cc_network:game_flow:buy_feature_network_flow"
title: "Game Flow 05: Buy Feature Network Flow"
category: "cc_network"
tags: ["game_flow", "buy_feature", "feature_purchase", "price_calculation", "wallet_deduction"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🛒 Game Flow 05: Buy Feature Network Flow

<!-- convention-summary-start -->
### Game Flow 05: Buy Feature Network Flow Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Game Flow 05: Buy Feature Network Flow.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 01_game_flow_and_lifecycle
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document details the network interaction when a player chooses to purchase a direct entry into Free Spins or Bonus Mode via the Buy Feature button.

---

## 1. 📊 Sequence Diagram: Buy Feature Purchase

```mermaid
sequenceDiagram
    autonumber
    participant Player as Player / Buy Feature Button
    participant BuyMgr as BuyFeatureModule / BetManager
    participant Logic as SlotGameLogic
    participant CmdMgr as CommandManager
    participant Server as Backend Slot Server
    participant Director as GameModeDirectorModule

    Player->>BuyMgr: Click "Buy Feature"
    BuyMgr->>BuyMgr: Calculate Feature Cost (e.g. 50x to 100x Current Total Bet)
    BuyMgr->>Player: Show Confirmation Modal with Price

    Player->>BuyMgr: Confirm Purchase
    BuyMgr->>BuyMgr: Verify Player Balance >= Feature Cost

    alt Sufficient Balance
        BuyMgr->>CmdMgr: executeCommand("buy-feature", {cost, betAmount, commandId})
        CmdMgr->>Server: Send Buy Feature Packet
        Server->>Server: Deduct Feature Cost from Wallet
        Server->>Server: Force Free Game Trigger (Place 4+ Scatters on Matrix)
        Server-->>CmdMgr: Return Buy Feature Result {matrix, wallet, freeSpinsAwarded}
        CmdMgr->>Logic: _onStateUpdate(buyFeatureResult)
        Logic->>Director: Direct Entry into Free Game Transition
    else Insufficient Balance
        BuyMgr->>Logic: showPopupNoMoney()
        Logic->>Player: Show "Insufficient Funds" Modal
    end
```

---

## 2. ⚡ Important Gotchas
- **Wallet Deductions**: The server deducts the entire feature cost (e.g. `$50.00`) in a single atomic transaction before generating the scatter matrix.
- **Client Safeguard**: The Buy Feature button is automatically locked during spins and auto-spin modes to prevent concurrent transaction collisions.
