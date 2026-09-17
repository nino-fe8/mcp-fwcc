---
id: "game-implement:9666:jackpot:token_meter_ui"
title: "Red Cliff (g9666) Jackpot Token Meter UI, Fly-In Particles & SFX"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionItem9666", "particles", "fly_in", "progress_bar"]
---

# 🎯 Red Cliff (g9666) Jackpot Token Meter UI & Fly-In Particles

<!-- convention-summary-start -->
### Red Cliff (g9666) Jackpot Token Meter UI Summary

- **Core Architecture / Purpose**: Interactive UI specification for the 4-tier token meters, particle fly-in animations from winning symbols, progress updates, and SFX dispatching.
- **Key Mechanisms & Design**: Covers `JackpotCollectionItem9666.ts`, `UPDATE_JACKPOT_COLLECTION` event handling, SFX `COLLECT_SYMBOL` and `COLLECT_COMPLETE`.
- **Domain Capabilities**: game_implement, 06_jackpot_collection
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts`, `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionItem9666.ts`
- **Related Docs**: [01_tier_architecture_and_thresholds.md](./01_tier_architecture_and_thresholds.md), [03_smart_resume_deduction_math.md](./03_smart_resume_deduction_math.md)
<!-- convention-summary-end -->

---

## 1. Sequence Execution Diagram

```mermaid
sequenceDiagram
    autonumber
    participant Cascade as CompositeCascade9666
    participant JCM as JackpotCollectionModule9666
    participant Item as JackpotCollectionItem9666
    participant Audio as SlotSoundPlayerModule
    participant JPWin as JackpotWinModule9666

    Cascade->>JCM: emit("UPDATE_JACKPOT_COLLECTION")
    JCM->>JCM: getCollectInfoList()
    
    loop For each token tier
        alt info.collected > item.collected
            JCM->>Audio: playSfx("COLLECT_SYMBOL")
            JCM->>JCM: emit("ON_COLLECT_SYMBOL")
            JCM->>Item: updateProgress(info)
            Note over Item: Spawns particle flash & fills progress bar
        end
    end

    alt All tokens collected (all info.collected >= info.required)
        JCM->>Audio: playSfx("COLLECT_COMPLETE")
        JCM->>JCM: emit("ON_COLLECT_COMPLETE")
        JCM->>JPWin: enter() -> playSkeletonAnim() -> BGM_BONUS
    end
```

---

## 2. Token Meter Component Details

In [`JackpotCollectionItem9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionItem9666.ts):
- **Visual Nodes**:
  - `heroIcon`: Displays the hero avatar portrait (Zhao Yun, Zhang Fei, Liu Bei, Guan Yu).
  - `progressBar`: Dynamic fill ratio representing `collected / required`.
  - `progressLabel`: String formatted as `${collected}/${required}` (e.g. `12/15`).
- **Completion Effect**:
  - When `collected >= required`, the progress bar triggers a golden pulse animation and unlocks the jackpot reward.
