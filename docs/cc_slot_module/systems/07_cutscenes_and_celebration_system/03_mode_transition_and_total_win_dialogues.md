---
id: "cc_slot_module:systems:cutscenes_and_celebration_system:mode_transition_and_total_win_dialogues"
title: "Mode Transitions, Intro Splash & Total Win Dialogues"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cutscenes", "intro_game", "intro_free_game", "total_win", "transitions"]
---

# 🔄 Mode Transitions, Intro Splash & Total Win Dialogues

<!-- convention-summary-start -->
### Mode Transitions, Intro Splash & Total Win Dialogues Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Mode Transitions, Intro Splash & Total Win Dialogues.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_cutscenes_and_celebration_system
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. `IntroGameModule` Splash Screen & LocalStorage Cache

When loading the main game:
1. Checks `sys.localStorage.getItem("HideIntroGame")`.
2. If marked "Do not show again", automatically emits `SKIP_INTRO_GAME` and hides itself immediately.
3. Automatically skips if session is a reconnection (`joinGameData.isResume`) or promotion spin.

---

## 2. `IntroFreeGameModule` Transition Countdown

Displays a 2-second dialog introducing Free Spins with audio fanfare before automatically transitioning the game state into `FreeGameDirectorModule`.

---

## 3. `TotalWinModule` Free Spins Summary Dialogue

At the conclusion of Free Spins:
- Ingests accumulated win from `content.winAmount` or `dataStore.getWinAmountPS()`.
- Runs rolling number count-up (`MoneyTween.runNumber`).
- Supports single-tap skip to fast-forward the sum and return cleanly to base game.
