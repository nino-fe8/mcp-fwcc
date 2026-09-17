---
id: "cc_network:game_flow:free_game_and_mode_transitions"
title: "Game Flow 04: Free Game & Game Mode Transitions"
category: "cc_network"
tags: ["game_flow", "free_game", "free_spins", "mode_transition", "cutscene", "summary_popup", "total_win"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🎁 Game Flow 04: Free Game & Game Mode Transitions

<!-- convention-summary-start -->
### Game Flow 04: Free Game & Game Mode Transitions Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Game Flow 04: Free Game & Game Mode Transitions.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 01_game_flow_and_lifecycle
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document covers the end-to-end network and presentation flow when transitioning into, playing through, and exiting Free Game (Free Spins) mode.

---

## 1. 📊 Sequence Diagram: Free Game Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Reels as SlotTable
    participant Logic as SlotGameLogic
    participant Director as GameModeDirectorModule
    participant CutScene as FreeGameTransitionModule
    participant Server as Backend Slot Server
    participant Popup as TotalWinPopup / Summary

    Reels->>Logic: 4+ Scatter Symbols Land on Reels
    Logic->>Director: Trigger Free Game Mode Transition
    Director->>CutScene: Play Entry Cutscene (Spine Zoom / Audio Jingle)
    CutScene->>Director: Transition Complete

    loop Each Free Spin (Until freeGameRemaining == 0)
        Director->>Server: Send Free Spin Command (betAmount = 0, locked bet)
        Server-->>Director: Return Free Spin Result {matrix, paylines, freeGameRemaining, winAmount}
        Director->>Reels: Animate Free Spin Reels Stop
        Director->>Director: Accumulate totalFreeSpinWinAmount
        alt Additional Scatter Lands
            Director->>Director: Increment freeGameRemaining (+1 spin per Scatter)
        end
    end

    Director->>Popup: Show Total Win Summary Popup {totalWinAmount}
    alt totalWinAmount == 0 (BUG_009 Rule)
        Popup->>Popup: Bypass summary popup if total win is 0
    else totalWinAmount > 0
        Popup->>Popup: Play coin fountain celebration
    end

    Popup->>Director: Close Summary Modal
    Director->>CutScene: Play Exit Transition (Return to Normal Scene)
    CutScene->>Director: Restore Base Game Theme & Bet Controls
```

---

## 2. ⚡ Key Business Rules & Network Gotchas

1. **Zero Bet Free Spins**: Free spin packets do not deduct player balance. The server evaluates payout using the locked `betAmount` established during the triggering base game spin.
2. **Total Win Popup Bypass (`BUG_009`)**: As specified in `BUG_009_bypass_total_win_popup_when_free_game_total_win_is_zero.md`, if the total accumulated win during free spins equals 0, the celebration popup is bypassed or immediately dismissed.
3. **Session Interruption Recovery**: If the network disconnects during Free Game, rejoining immediately resumes at the exact remaining spin count (`freeGameRemaining`) using cached server state.
