---
id: "cc_slot_module:TrialModeManager:gotchas:trial_panel_selection_lockout"
title: "Gotcha: Panel Lockout on Skipped Scenarios"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "gotchas", "lockout"]
---

# ⚠️ Gotcha: Panel Lockout on Skipped Scenarios

<!-- convention-summary-start -->
### Gotcha: Panel Lockout on Skipped Scenarios Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Panel Lockout on Skipped Scenarios.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If a player dismisses the demo selection panel via an ad-hoc close button without emitting `SKIP_TRIAL_DATA`, `GameLogic` assumes the selection modal is still blocking input.

---

## 2. Prevention

Always bind the close/skip button in the trial modal to `onSkipPressed()`.
