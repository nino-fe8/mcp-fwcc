---
id: "cc_network:game_flow:jackpot_and_big_win_celebrations"
title: "Game Flow 07: Jackpot Ticker Sync & Big Win Celebrations"
category: "cc_network"
tags: ["game_flow", "jackpot", "big_win", "mega_win", "super_win", "ticker", "celebration", "lock"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🏆 Game Flow 07: Jackpot Ticker Sync & Big Win Celebrations

<!-- convention-summary-start -->
### Game Flow 07: Jackpot Ticker Sync & Big Win Celebrations Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Game Flow 07: Jackpot Ticker Sync & Big Win Celebrations.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 01_game_flow_and_lifecycle
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document covers real-time Jackpot synchronization and the network synchronization requirements of Big Win celebration sequences.

---

## 1. 📊 Jackpot Ticker & Big Win Flow

```mermaid
sequenceDiagram
    autonumber
    participant Server as Backend Server / Jackpot Ticker
    participant MsgMgr as MessageManager
    participant JackMgr as JackpotManager / Header
    participant WinFX as WinEffectModule (BigWin/MegaWin/SuperWin)
    participant UI as Spin Button & Action Panel

    loop Real-time Ticker Updates (Every 1s - 3s)
        Server-->>MsgMgr: Broadcast "jackpot-ticker-update" {Mini, Minor, Major, Grand values}
        MsgMgr->>JackMgr: Update Jackpot Header Display with MoneyTween
    end

    Note over Server, WinFX: High Win Multiplier Spin Occurs (e.g. Win >= 20x Bet)
    Server-->>MsgMgr: Return Spin Result {winAmount, winLevel: "BIG_WIN"}
    MsgMgr->>WinFX: triggerBigWinEffect({amount, level})

    WinFX->>UI: Lock Spin Controls & Auto Spin Timer
    WinFX->>WinFX: Play Tally Sound & Increment Number (Tally Animation)
    WinFX->>WinFX: Trigger Confetti / Spine Celebration VFX

    alt Player Clicks Screen to Skip
        WinFX->>WinFX: Fast-forward Tally to Final Amount
    else Full Animation Runs
        WinFX->>WinFX: Finish celebration duration
    end

    WinFX->>UI: Unlock Spin Controls
```

---

## 2. ⚡ Key Business Rules & Network Gotchas
1. **Turbo Big Win Handling (`BUG_005`)**:
   As documented in `BUG_005_turbo_bigwin_skips_freegame_cutscene.md`, in Turbo Mode with Big Win, the celebration must never prematurely swallow or skip a pending Free Game cutscene transition.
2. **Server-Verified Payouts**:
   The client never decides win amounts locally. The exact Big Win tier and coin tally duration are derived directly from the server's validated `winAmount` packet.
