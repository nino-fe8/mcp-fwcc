---
id: "cc_network:game_flow:auto_and_turbo_spin_dynamics"
title: "Game Flow 06: Auto & Turbo Spin Network Dynamics"
category: "cc_network"
tags: ["game_flow", "auto_spin", "turbo_spin", "fast_to_result", "f2r", "quick_stop", "packet_queue"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# ⚡ Game Flow 06: Auto & Turbo Spin Network Dynamics

<!-- convention-summary-start -->
### Game Flow 06: Auto & Turbo Spin Network Dynamics Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Game Flow 06: Auto & Turbo Spin Network Dynamics.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 01_game_flow_and_lifecycle
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document details the high-frequency networking and state constraints operating during Auto Spin and Turbo Spin (Fast to Result / F2R) modes.

---

## 1. 📊 Auto Spin & Turbo Spin Execution Pipeline

```mermaid
sequenceDiagram
    autonumber
    participant AutoMgr as AutoSpinManager
    participant Logic as SlotGameLogic
    participant CmdMgr as CommandManager
    participant Server as Backend Slot Server
    participant Reels as SlotTable (Turbo Mode)

    AutoMgr->>AutoMgr: Start Auto Spin (e.g. 50 spins selected)

    loop Auto Spin Iterations (While autoSpinsRemaining > 0)
        AutoMgr->>Logic: triggerSpin()
        alt In Turbo Mode
            Logic->>Reels: Set Turbo Spin Timing (0.3s reel spin duration, skip bounce)
        else Normal Speed
            Logic->>Reels: Standard Spin Timing (1.2s - 2.0s duration)
        end

        Logic->>CmdMgr: executeCommand("spin", {betAmount, commandId})
        CmdMgr->>Server: Send Fast Spin Frame
        Server-->>CmdMgr: Return Spin Result & Deduct Balance
        CmdMgr->>Logic: _onStateUpdate(spinResult)
        Logic->>Reels: Quick Stop (F2R)
        Logic->>AutoMgr: Decrement remaining count (autoSpinsRemaining--)

        alt Stop Conditions Triggered
            Note over AutoMgr: Stop condition met (Free Game triggered, Balance below bet, Single Win > Limit)
            AutoMgr->>AutoMgr: Stop Auto Spin Loop & Notify Player
        end
    end
```

---

## 2. ⚡ Key Network Constraints & Bug Fix References

1. **Auto Spin Persistence Across Free Game (`BUG_006`)**:
   As documented in `BUG_006_autogen_turn_off_after_bigwin_freegame_transition.md`, Auto Spin state must be cleanly paused during Big Win or Free Game transitions, and automatically restored upon returning to Normal Game if configured.
2. **Turbo Reel Strip Blurring (`BUG_004`)**:
   In Turbo Mode, blur symbols on horizontal sub-reels must follow the standard blur exclusion rules to avoid visual artifacts.
