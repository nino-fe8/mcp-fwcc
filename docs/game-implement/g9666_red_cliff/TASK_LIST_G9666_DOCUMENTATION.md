# 📋 Master Task List: Comprehensive Modular Documentation for Game 9666 (Red Cliff)

> **Game Target**: `assets/cc-release-slot/cc1-red-cliff` (113 Scripts / 12 Prefabs / 3 Scenes)  
> **Documentation Target**: `mcp/mcp-fwcc/docs/game-implement/g9666_red_cliff/`  
> **Standard**: Multi-file modular chapters, exact math formulas, de-obfuscated TypeScript, line-by-line breakdown, and exhaustive variable dictionaries.

---

## 📊 Modular Subsystem Progress Matrix

| Section | Subsystem / Chapter | Target Folder | Sub-Documents | Status |
| :---: | :--- | :--- | :---: | :---: |
| **00** | **Master Specification & Features** | Root Folder | 2 Files (`00_EXECUTIVE...`, `00_ALL_GAME_FEATURES...`) | ✅ Completed |
| **01** | **Game Overview & Math** | `01_game_overview/` | 3 Files | ✅ Completed |
| **02** | **Scene & Prefabs** | `02_scene_and_prefabs/` | 3 Files | ✅ Completed |
| **03** | **Composite Dual Cascade** | `03_composite_cascade/` | 5 Files | ✅ Completed |
| **04** | **Multiplier Wilds (Zhou Yu)** | `04_multiplier_subsystem/` | 5 Files | ✅ Completed |
| **05** | **Expanding Stack Wilds (Zhuge Liang)** | `05_stack_wild_subsystem/` | 4 Files | ✅ Completed |
| **05b**| **Transform Symbol Subsystem** | `05_transform_symbol_subsystem/` | 3 Files | ✅ Completed |
| **06** | **Scatter Flags & Free Game** | `06_scatter_and_free_game/` | 3 Files | ✅ Completed |
| **06b**| **Jackpot Collection Subsystem** | `06_jackpot_collection/` | 4 Files (Deepened) | ✅ Completed |
| **07** | **Anticipation & Near Win Refill** | `07_anticipation_and_near_win/` | 3 Files | ✅ Completed |
| **07b**| **Payline & Spine Sync** | `07_payline_and_spine_sync/` | 5 Files | ✅ Completed |
| **08** | **Directors & Writers** | `08_directors_and_writers/` | 4 Files | ✅ Completed |
| **09** | **Trial Mode & UI Framework** | `09_trial_mode_and_ui_framework/` | 5 Files | ✅ Completed |
| **10** | **Audio & Cutscenes** | `10_audio_and_cutscenes/` | 3 Files | ✅ Completed |
| **10b**| **Recipes & Debugging** | `10_recipes_and_debugging/` | 2 Files | ✅ Completed |
| **11** | **Per-Class Modules** | `modules/` (113 Classes) | 113 Folders | ✅ Completed |

---

## 📝 Granular Task Breakdown for In-Game Features

### 🔹 Section 00: Master Features Deep Dive
- [x] **Task 0.1**: `00_EXECUTIVE_SUMMARY_AND_SPEC.md` - Synchronized real engine symbols (`2..D`, `A`, `K`, `K1-x`, `K2`), AllWays 10,000 ways, and grid specifications.
- [x] **Task 0.2**: `00_ALL_GAME_FEATURES_DEEP_DIVE.md` - Master comprehensive architecture guide detailing all 10 core gameplay features, sequence maps, and interaction flows.

### 🔹 Section 05b: Transform Symbol Subsystem (`05_transform_symbol_subsystem/`)
- [x] **Task 5b.1**: `01_transform_architecture_and_pool.md` - Overlay node pooling architecture, `SymbolOwnerType.TRANSFORM_SYMBOL`, grid coordinate resolution.
- [x] **Task 5b.2**: `02_trigger_and_animation_flow.md` - Grass Boat morphing animation sequence, payline integration, cleanup on `TABLE_STOP_SPIN`.
- [x] **Task 5b.3**: `03_edge_cases_and_gotchas.md` - Fast-stop safety, multi-resolution resize drifting, pool starvation prevention.

### 🔹 Section 06: Scatter Flag Collection & Free Game (`06_scatter_and_free_game/`)
- [x] **Task 6.1**: `01_scatter_flag_collection.md` - `CollectScatterModule.ts` 4-flag HUD meter, particle trajectories, parallel dispatch with `TABLE_START_RESPIN`.
- [x] **Task 6.2**: `02_free_game_rules_and_extra_spins.md` - Free Game trigger tiers (7, 8, 9 spins), cascade-progressive multipliers ($\times 2 \rightarrow +2 \le \times 20$), $+1$ extra spin per scatter (`ADD_FREE_SPIN_TIMES`).
- [x] **Task 6.3**: `03_cutscenes_and_transitions.md` - Intro naval cutscene, Total Win presentation, and smart spin count deduction on join.

### 🔹 Section 06b: 4-Tier Troop Token Jackpot (`06_jackpot_collection/`)
- [x] **Task 6b.1**: `01_tier_architecture_and_thresholds.md` - Hero tokens (Zhao Yun 6, Zhang Fei 9, Liu Bei 12, Guan Yu 15), `collectSymbols` schema.
- [x] **Task 6b.2**: `02_token_meter_ui_and_fly_in.md` - `JackpotCollectionItem9666.ts`, particle flash, progress bars, SFX `COLLECT_SYMBOL` and `COLLECT_COMPLETE`.
- [x] **Task 6b.3**: `03_smart_resume_deduction_math.md` - Exhaustive mathematical derivation of $C_{\text{before}} = \max(0, C_{\text{server}} - W_{\text{current\_spin}})$ via `traceWay` and `parsedPaylines`.
- [x] **Task 6b.4**: `04_edge_cases_and_gotchas.md` - Multi-hero Wild double-counting prevention, mega symbol prefix stripping (`cleanSym`), memory leak prevention.

### 🔹 Section 07: Anticipation & Near Win Refill (`07_anticipation_and_near_win/`)
- [x] **Task 7.1**: `01_near_win_refill_mechanics.md` - Cascade-time anticipation, live matrix scatter counting, 4-scatter threshold evaluation.
- [x] **Task 7.2**: `02_audio_ducking_and_suspense_sfx.md` - BGM ducking to 30% (`bgmDuckVolumeRatio = 0.3`), `NEARWIN_REFILL` loop, and `NEARWIN_MISS` sfx.
- [x] **Task 7.3**: `03_sure_win_presentation.md` - `SureWinModule9666.ts` board darkening (`opacity: 150`), Spine cutscene playback.
