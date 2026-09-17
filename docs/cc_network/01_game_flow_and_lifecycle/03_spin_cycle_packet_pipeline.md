---
id: "cc_network:game_flow:spin_cycle_packet_pipeline"
title: "Game Flow 03: Normal Spin Cycle Packet Pipeline"
category: "cc_network"
tags: ["game_flow", "spin_cycle", "spin_packet", "reels", "paylines", "wallet_deduction", "win_effect"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🎰 Game Flow 03: Normal Spin Cycle Packet Pipeline

<!-- convention-summary-start -->
### Game Flow 03: Normal Spin Cycle Packet Pipeline Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Game Flow 03: Normal Spin Cycle Packet Pipeline.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 01_game_flow_and_lifecycle
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document explains the standard lifecycle of a single reel spin from user click, through network dispatch and server calculation, to animation stop and payout.

---

## 1. 📊 Sequence Diagram: The Complete Spin Cycle

```mermaid
sequenceDiagram
    autonumber
    participant Player as Player / UI Button
    participant BetMgr as BetManager / WalletManager
    participant Logic as SlotGameLogic
    participant CmdMgr as CommandManager
    participant MsgMgr as MessageManager
    participant Server as Backend Slot Server
    participant Reels as SlotTable / Reel Strip Engine
    participant WinFX as WinEffectModule / PaylineDirector

    Player->>BetMgr: Click Spin Button
    BetMgr->>BetMgr: Validate Balance >= Total Bet

    alt Sufficient Balance
        BetMgr->>Logic: triggerSpin(betAmount)
        Logic->>Player: Lock Spin Button (Active/Spin state)
        Logic->>Reels: Start spinning reel animations (Continuous Blur Loop)

        Logic->>CmdMgr: executeCommand("spin", {betAmount, payLines, commandId})
        CmdMgr->>MsgMgr: sendMessage("spin", payload)
        MsgMgr->>Server: Send Spin WebSocket Frame

        Server->>Server: Deduct Bet & Calculate RNG Matrix & Wins
        Server-->>MsgMgr: Send ACK {status: "OK", messageId}
        MsgMgr->>CmdMgr: onAck(messageId) (Free concurrency lock)

        Server-->>MsgMgr: Return Spin Result {matrix, paylines, winAmount, balance, ...}
        MsgMgr->>Logic: _onStateUpdate(spinResultData)

        Logic->>Reels: Push final symbols to reel strips
        Reels->>Reels: Execute Column-by-Column Stop with Bounce / Anticipation SFX

        alt Has Winning Paylines
            Logic->>WinFX: Trigger Payline & Symbol Win Animations
            WinFX->>WinFX: Highlight winning symbol cells, show Win Ticker
            Logic->>Player: Credit Win to Balance Display
        else No Win
            Logic->>Logic: Reset Table state
        end

        Logic->>Player: Unlock Spin Button (Return to Idle)
    else Insufficient Balance
        BetMgr->>Logic: showPopupNoMoney()
        Logic->>Player: Display "Not Enough Balance" Modal
    end
```

---

## 2. ⚡ Critical Timing Points & Gotchas

1. **Optimistic Visual Spin vs Server Response**:
   Reels immediately begin their visual spinning loop (blur animation) on client button click before the server matrix response arrives. This provides responsive tactile feedback ($0$ms latency feel).
2. **Reel Stop Triggering**:
   Once the spin result packet arrives, the reel engine computes stop positions. If the network packet is delayed, reels continue spinning smoothly until the matrix data is fully received.
3. **Idempotent `commandId`**:
   The unique UUID attached to each spin command prevents double betting if the network connection flickers and the packet is resent.
