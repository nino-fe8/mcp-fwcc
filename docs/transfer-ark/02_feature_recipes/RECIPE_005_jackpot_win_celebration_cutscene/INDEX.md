---
id: "transfer-ark:feature:jackpot_win_cutscene:index"
title: "Recipe: Jackpot Win Celebration Cutscene with Dual-Spine Sync, Bone Tracking & Debounced Skip"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotWinModule", "BaseCutscene", "CutsceneController"]
tags: ["jackpot", "cutscene", "spine_sync", "bone_tracking", "state_machine", "space_skip", "recipe", "index"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 🎆 RECIPE-005: Jackpot Win Celebration Cutscene

<!-- convention-summary-start -->
### Jackpot Win Celebration Cutscene Master Index

- **Core Architecture / Purpose**: Production reference, API contract, and implementation guide for the Jackpot Win Celebration cutscene popup.
- **Key Mechanisms & Design**: 4-state lifecycle state machine, dual-Spine choreography (Symbol parade + Banner), real-time bone tracking (`slot_coin`), Spine Event hooks (`money_count`, `money_out`), Space/Touch debounced skip, and contextual BGM cross-fade.
- **Domain Capabilities**: feature, RECIPE_005_jackpot_win_celebration_cutscene
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/`
- **Related Docs**: [01. Overview & Requirements](./01_overview_and_problem.md), [02. State Machine & Lifecycle](./02_state_machine_and_lifecycle.md), [05. Full Implementation Code](./05_full_implementation_code.md)
<!-- convention-summary-end -->

> **Location**: `mcp/mcp-fwcc/docs/transfer-ark/02_feature_recipes/RECIPE_005_jackpot_win_celebration_cutscene/`  
> **Status**: Production Verified (Derived from Game 9666 Red Cliff)  
> **Target Modules**: `JackpotWinModule9666` extending `JackpotWinModule`

---

## 📚 Table of Contents

| Section | Document | Description |
| :--- | :--- | :--- |
| **01** | [**01. Overview & Business Requirements**](./01_overview_and_problem.md) | Visual choreography, SDK discrepancy & player experience goals |
| **02** | [**02. State Machine & Lifecycle Flow**](./02_state_machine_and_lifecycle.md) | 4-state lifecycle, sequence diagram, transition flow & dismiss conditions |
| **03** | [**03. Dual-Spine & Bone Tracking**](./03_dual_spine_and_bone_tracking.md) | Symbol parade spine sync, `slot_coin` bone world-to-local coordinate tracking |
| **04** | [**04. Space & Touch Skip with Debounce**](./04_space_and_touch_skip_debounce.md) | Multi-input skip (Click + Space), 1s debounce lock, 3s auto-close, UI dialog shield |
| **05** | [**05. Full Implementation Code**](./05_full_implementation_code.md) | Complete copy-paste ready TypeScript source code for `JackpotWinModule` |
| **06** | [**06. Gotchas & Audio Cross-Fade**](./06_gotchas_and_audio_fade.md) | Spacebar bounce bug, world transform first-frame lag, Free Game vs Main Game BGM fade |
| **07** | [**07. Reusability & Setup Guide**](./07_reusability_and_setup_guide.md) | Step-by-step checklist to configure `JackpotWin.prefab`, inspector mappings & `CutsceneControl` |
