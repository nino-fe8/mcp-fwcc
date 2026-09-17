---
id: "transfer-ark:feature:jackpot_win_cutscene:02_state_machine"
title: "Jackpot Win Cutscene - State Machine & Lifecycle Flow"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotWinModule", "CutsceneController"]
tags: ["state_machine", "lifecycle", "sequence_diagram", "transitions"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 2. 🔄 State Machine & Lifecycle Flow

<!-- convention-summary-start -->
### Jackpot Win Cutscene - State Machine & Lifecycle Flow Summary

- **Core Architecture / Purpose**: Detailed specifications of the 4-state lifecycle machine controlling cutscene progression, event dispatching, and user interaction.
- **Key Mechanisms & Design**: `JackpotWinState` enum (`IDLE`, `COUNTING`, `COUNTING_COMPLETED`, `CLOSING`), sequence diagram, and safe state transitions.
- **Domain Capabilities**: feature, RECIPE_005_jackpot_win_celebration_cutscene
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/JackpotWinModule9666.ts`
- **Related Docs**: [01. Overview](./01_overview_and_problem.md), [03. Dual-Spine Tracking](./03_dual_spine_and_bone_tracking.md)
<!-- convention-summary-end -->

---

## 2.1 The 4 Lifecycle States

```typescript
export enum JackpotWinState {
    IDLE = 0,               // Cutscene hidden or waiting
    COUNTING = 1,           // Money tweening up with audio loop
    COUNTING_COMPLETED = 2, // Rollup finished; 1s debounce active; waiting for user click or auto-close
    CLOSING = 3             // Playing out-animation before calling exit()
}
```

---

## 2.2 Sequence & State Transitions

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Director as CutsceneController
    participant Module as JackpotWinModule
    participant SpineColl as jackpotCollectSpine
    participant SpineMain as jackpotSpine
    participant Sound as SoundPlayer

    Director->>Module: enter(data)
    Note over Module: State: IDLE
    Module->>Sound: switchMusicWithFade("BGM_JACKPOT")
    
    alt Has Collected Symbols
        Module->>SpineColl: setAnimation("idle_symbol_X")
        Module->>Module: syncSymbolIconsToSlots()
        SpineColl-->>Module: onComplete()
    end

    Module->>SpineMain: setAnimation("in", false)
    Note over Module: Spine Event "money_count" fires
    SpineMain-->>Module: Event: "money_count"
    
    Note over Module: State -> COUNTING
    Module->>Sound: startCountingLoopSfx("COUNTING")
    Module->>Module: Tween number 0 -> JackpotValue

    alt User Presses Space or Clicks
        Player->>Module: onClick()
        Note over Module: Skip Rollup
        Module->>Module: stopTween() & set value to target
    else Duration Elapsed
        Module->>Module: Rollup naturally finishes
    end

    Note over Module: State -> COUNTING_COMPLETED
    Module->>Sound: stopCountingLoopSfx()
    Module->>Sound: playSfx("COUNTING_STOP") & playSfx("JACKPOT_END")
    Module->>Module: Start 1.0s Debounce Timer (_canClickToClose = false)
    Module->>Module: Start 3.0s Auto-Close Timer

    Note over Player,Module: After 1.0s Debounce: _canClickToClose = true
    alt Player clicks OR 3s Timer triggers
        Player->>Module: onClick()
        Note over Module: State -> CLOSING
        Module->>SpineMain: setAnimation("out", false)
        SpineMain-->>Module: Event: "money_out" -> hideWinAmount()
        SpineMain-->>Module: onComplete("out")
        Module->>Module: emit("JACKPOT_WIN_COMPLETED")
        Module->>Director: exit()
        Note over Module: State -> IDLE
        Module->>Sound: resumeMainBGM() (Cross-fade to Free or Base BGM)
    end
```
