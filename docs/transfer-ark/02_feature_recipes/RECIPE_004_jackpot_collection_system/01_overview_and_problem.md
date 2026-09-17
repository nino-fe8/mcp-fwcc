---
id: "transfer-ark:feature:jackpot_collection:01_overview"
title: "Jackpot Collection - Overview & Feature Requirements"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotBaseModule", "BaseDataModule"]
tags: ["overview", "requirements", "jackpot", "collection"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 1. 📌 Overview & Feature Requirements

<!-- convention-summary-start -->
### Jackpot Collection - Overview & Feature Requirements Summary

- **Core Architecture / Purpose**: Detailed specifications and gameplay requirements for the progressive Jackpot Collection mechanic.
- **Key Mechanisms & Design**: Real-time progress updates per cascade step, visual completion feedback, and seamless cutscene handover.
- **Domain Capabilities**: feature, RECIPE_004_jackpot_collection_system
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/`
- **Related Docs**: [Master Index](./INDEX.md), [02. Architecture & Data Flow](./02_architecture_and_data_flow.md)
<!-- convention-summary-end -->

---

## 1.1 Business Requirements

In modern cascading slot titles (e.g. Red Cliff 9666), winning symbols are not merely calculated for monetary payout; winning top-tier symbols also contribute toward fulfilling a persistent **Jackpot Collection Meter**.

### Core Gameplay Flow:
1. **Meter Presence**: A dedicated UI banner or side panel displays collection slots for designated symbols (e.g., Symbol A, B, C, D, E, F) with target quotas (e.g., `0/5`, `0/4`).
2. **Step-by-Step Collection**: When a winning combination explodes during a spin tumble/cascade, the corresponding symbol counters increment immediately, playing individual collect bursts and character reactions.
3. **Symbol Completion (Tick Effect)**: When an individual symbol fulfills its quota:
   - The label displays full progress (e.g., `5/5`).
   - A celebratory Spine tick/checkmark pops in with a dynamic bounce (`in_eff_tick_coll_symbol`) and transitions to an ongoing idle shimmer (`idle_eff_tick_coll_symbol`).
   - The collection effect locks into a persistent completed state (`eff_coll_done_symbol`).
4. **All Symbols Completed**: When every required symbol achieves its target:
   - A distinct fanfare SFX (`COLLECT_COMPLETE`) fires.
   - The board finishes remaining cascade steps.
   - When all symbol drops settle (`CASCADE_SYMBOLS_FILLED`), the game director automatically triggers the **Jackpot Win Celebration Cutscene**.

---

## 1.2 Vendor SDK vs ARK Business Discrepancy

```
+-------------------------------------------------------------------------+
|                           VENDOR SDK DEFAULT                            |
|  - No collection concept in SlotTableModule or SlotReelModule.          |
|  - Evaluates results in a monolithic batch at the end of a spin.        |
|  - Reconnection dumps raw server states without step-by-step playback.  |
+-------------------------------------------------------------------------+
                                    vs
+-------------------------------------------------------------------------+
|                         ARK BUSINESS STANDARD                           |
|  - 4-Tier decoupled collection system (Config, Data, Controller, Item). |
|  - Incremental step updates triggered via UPDATE_JACKPOT_COLLECTION.    |
|  - Multi-stage Spine choreography (Active -> Collect -> Tick In -> Idle)|
|  - Smart Reconnection rollback (deducts current cascade winning counts).|
+-------------------------------------------------------------------------+
```

---

## 1.3 Target UX Expectations

1. **Immediate Visual Feedback**: Players must instantly perceive which symbol just scored and see the meter fill up before new symbols fall in.
2. **Audio Sync**: Each increment plays a crisp symbol collect sound (`COLLECT_SYMBOL`); full completion plays a loud fanfare (`COLLECT_COMPLETE`).
3. **Flawless Reconnection**: If the browser refreshes mid-spin, the collection bar must not glitch to completed instantly, but smoothly replay the winning sequence from the exact cascade step.
