---
id: "game-implement:9666:index"
title: "Red Cliff (g9666) Knowledge Dossier Master Index"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "g9666", "red_cliff", "index", "dossier"]
---

# 📚 Red Cliff (g9666) Complete Knowledge Dossier

<!-- convention-summary-start -->
### Red Cliff (g9666) Knowledge Dossier Master Index Summary

- **Core Architecture / Purpose**: Master technical index and navigation hub for Red Cliff (g9666) slot engine documentation.
- **Key Mechanisms & Design**: Encompasses mathematical specifications, scene trees, 10 core gameplay features, state machine directors, and per-class module dictionaries.
- **Domain Capabilities**: game_implement, g9666_red_cliff
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/`, `assets/cc-common/`
- **Related Docs**: [00_EXECUTIVE_SUMMARY_AND_SPEC.md](./00_EXECUTIVE_SUMMARY_AND_SPEC.md), [00_ALL_GAME_FEATURES_DEEP_DIVE.md](./00_ALL_GAME_FEATURES_DEEP_DIVE.md)
<!-- convention-summary-end -->

---

## 🌟 Master Specification & Complete Features Guides

1. **[00_EXECUTIVE_SUMMARY_AND_SPEC.md](./00_EXECUTIVE_SUMMARY_AND_SPEC.md)** - Official math model, symbol registry (`2..D`, `A`, `K`, `K1`, `K2`), and paytable values.
2. **[00_ALL_GAME_FEATURES_DEEP_DIVE.md](./00_ALL_GAME_FEATURES_DEEP_DIVE.md)** - **Comprehensive Master Guide to all 10 in-game features**, event maps, and interaction flows.
3. **[01_ARCHITECTURE_AND_CORE_FLOW.md](./01_ARCHITECTURE_AND_CORE_FLOW.md)** - Master FSM state machine and round lifecycle flow.
4. **[02_scene_and_prefab_hierarchy.md](./02_scene_and_prefab_hierarchy.md)** - 100% exact scene node trees and prefab components.
5. **[03_COMPOSITE_CASCADE_SUBSYSTEM.md](./03_COMPOSITE_CASCADE_SUBSYSTEM.md)** - Dual cascade mathematics & parallel execution.
6. **[04_MULTIPLIER_SUBSYSTEM.md](./04_MULTIPLIER_SUBSYSTEM.md)** - Multiplier Ingot Wilds (`K1-x`), floating collection, banner scale tween, and smart reload.
7. **[05_STACK_WILD_SUBSYSTEM.md](./05_STACK_WILD_SUBSYSTEM.md)** - Zhuge Liang Expanding Stack Wild (`K2`), flame column Spine effects, and table replacement.
8. **[06_JACKPOT_COLLECTION_SUBSYSTEM.md](./06_JACKPOT_COLLECTION_SUBSYSTEM.md)** - 4-Tier troop token collection and smart resume deduction math.
9. **[07_PAYLINE_AND_SPINE_BONE_SYNC.md](./07_PAYLINE_AND_SPINE_BONE_SYNC.md)** - AllWays 10,000 ways & real-time Spine bone tracking (`hsn`, `money`).
10. **[08_GAME_DIRECTORS_AND_WRITERS.md](./08_GAME_DIRECTORS_AND_WRITERS.md)** - Normal & Free game script command pipelines.
11. **[09_TRIAL_MODE_AND_UI_FRAMEWORK.md](./09_TRIAL_MODE_AND_UI_FRAMEWORK.md)** - Trial loop controller and responsive UI framework.
12. **[10_AUDIO_CUTSCENE_AND_EVENTS_MAP.md](./10_AUDIO_CUTSCENE_AND_EVENTS_MAP.md)** - Audio clips and Master Event Bus.
13. **[11_CHEAT_MOCKUP_AND_DEBUG_GUIDE.md](./11_CHEAT_MOCKUP_AND_DEBUG_GUIDE.md)** - Hotkeys, mock matrices, and debug guides.
14. **[12_TROUBLESHOOTING_AND_BUG_COOKBOOK.md](./12_TROUBLESHOOTING_AND_BUG_COOKBOOK.md)** - Diagnostic guides, symptom analysis, root causes & verified code fixes.
15. **[13_MASTER_CLASS_AND_SYMBOL_CHEATSHEET.md](./13_MASTER_CLASS_AND_SYMBOL_CHEATSHEET.md)** - Instant lookup table for all symbols, paytables, and 115 engine classes.
16. **[14_NETWORK_PROTOCOLS_AND_DATA_STORES.md](./14_NETWORK_PROTOCOLS_AND_DATA_STORES.md)** - WebSocket message schemas, spin request/response formats, and data stores.

---

## 📂 Modular Subsystem Breakdown Folders

- **[01_game_overview/](./01_game_overview/)**: Math formulas, symbol codes, FSM lifecycle.
- **[02_scene_and_prefabs/](./02_scene_and_prefabs/)**: Complete scene node hierarchies, prefabs, and Z-index layering.
- **[03_composite_cascade/](./03_composite_cascade/)**: Vertical gravity drops, horizontal slides, synchronization & gotchas.
- **[04_multiplier_subsystem/](./04_multiplier_subsystem/)**: Multiplier badge collection, unexploded wild reversion, and gotchas.
- **[05_stack_wild_subsystem/](./05_stack_wild_subsystem/)**: Zhuge Liang stacked wild expansion and animation synchronization.
- **[05_transform_symbol_subsystem/](./05_transform_symbol_subsystem/)**: Transform symbol pool instantiation, Grass Boat morphing, and cleanup.
- **[06_scatter_and_free_game/](./06_scatter_and_free_game/)**: Scatter flag collection, Free Game progressive multipliers, $+1$ extra spin mechanics.
- **[06_jackpot_collection/](./06_jackpot_collection/)**: 4-Tier token meters, fly-in particles, smart resume deduction algorithm.
- **[07_anticipation_and_near_win/](./07_anticipation_and_near_win/)**: Near-win cascade refill slowdown, 30% audio ducking, and Sure Win presentation.
- **[07_payline_and_spine_sync/](./07_payline_and_spine_sync/)**: Real-time Spine bone tracking (`syncNodeToBone`), MoneyTweens, Speed Decorators.
- **[08_directors_and_writers/](./08_directors_and_writers/)**: Command pipelines, GameDataStore session caching & gotchas.
- **[09_trial_mode_and_ui_framework/](./09_trial_mode_and_ui_framework/)**: Trial mode loop controller, Bet selector, and Fast-stop.
- **[10_audio_and_cutscenes/](./10_audio_and_cutscenes/)**: Sound registry, Cutscene state machines, Master Event Bus.
- **[10_recipes_and_debugging/](./10_recipes_and_debugging/)**: Mock data injection recipes, Cheat codes, and Troubleshooting cookbook.
- **[modules/](./modules/)**: Exhaustive variable-by-variable and method-by-method analysis for all 115 TypeScript classes in `g9666`.
