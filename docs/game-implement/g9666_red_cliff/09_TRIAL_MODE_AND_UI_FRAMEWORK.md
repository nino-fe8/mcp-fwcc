---
id: "game-implement:9666:ui:trial_mode_and_ui_framework"
title: "Red Cliff (g9666) Trial Mode Subsystem & UI Framework"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TrialModeLoopController9666", "TrialModeToggleButton9666", "UIManagerModule9666", "ui_framework", "trial"]
---

# 🎮 Red Cliff (g9666) Trial Mode Subsystem & UI Framework

<!-- convention-summary-start -->
### Red Cliff (g9666) Trial Mode Subsystem & UI Framework Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Trial Mode Subsystem & UI Framework.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, g9666_red_cliff
- **Scope & Code Paths**: `./09_trial_mode_and_ui_framework/`
- **Related Docs**: [00. Step-by-Step Task & Debugging Checklist](./09_trial_mode_and_ui_framework/00_TASK_LIST_TRIAL_MODE.md), [01. Trial Mode Architecture & Lifecycle](./09_trial_mode_and_ui_framework/01_trial_mode_architecture_and_lifecycle.md), [02. Trial Loop Controller & SDK Tutorial Bypass](./09_trial_mode_and_ui_framework/02_loop_controller_and_sdk_bypass.md)
<!-- convention-summary-end -->


---

## 📚 Detailed Documentation Sub-chapters

Comprehensive technical documentation for the Trial Mode (Chơi Thử) Subsystem in Red Cliff 9666 is organized within:
[`09_trial_mode_and_ui_framework/`](./09_trial_mode_and_ui_framework/)

1. **[00. Step-by-Step Task & Debugging Checklist](./09_trial_mode_and_ui_framework/00_TASK_LIST_TRIAL_MODE.md)**: Exhaustive verification checklist, dual-mode state validation, and diagnostic quick-fix table.
2. **[01. Trial Mode Architecture & Lifecycle](./09_trial_mode_and_ui_framework/01_trial_mode_architecture_and_lifecycle.md)**: Dual state FSM model (`RealMode` $\leftrightarrow$ `TrialMode`), core component registry, and bootstrap initialization.
3. **[02. Trial Loop Controller & SDK Tutorial Bypass](./09_trial_mode_and_ui_framework/02_loop_controller_and_sdk_bypass.md)**: `TrialModeLoopController9666`, overriding SDK `playTrialMode`, scheduler tick finalization, and suppressing forced tutorial modal popups.
4. **[03. Mock Network Provider & Step Sequencer](./09_trial_mode_and_ui_framework/03_mock_network_and_data_sequencer.md)**: `TutorialMockNetwork9666`, `TutorialMockSequencer9666`, routing mock requests (`MockRequestRoute9666`), and deterministic feature loops.
5. **[04. Trial Toggle Button & Pending Reconciliation](./09_trial_mode_and_ui_framework/04_toggle_button_and_pending_reconciliation.md)**: `TrialModeToggleButton9666`, optimistic visual switching, and asynchronous pending state reconciliation.
6. **[05. Trial Mode Edge Cases & Gotchas](./09_trial_mode_and_ui_framework/05_edge_cases_and_gotchas.md)**: Cutscene interaction locks, promotion overlay blocking, and isolated virtual wallet balances.
