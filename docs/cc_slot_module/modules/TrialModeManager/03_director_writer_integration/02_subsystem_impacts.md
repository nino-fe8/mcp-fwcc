---
id: "cc_slot_module:TrialModeManager:director_writer:subsystem_impacts"
title: "TrialModeManager Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 TrialModeManager Cross-Subsystem Impacts

<!-- convention-summary-start -->
### TrialModeManager Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Toggles `isTrialModeActive` across all HUD submodules. |
| **`WalletModule`** | Displays `trialWallet` instead of `realWallet`. |
| **`SlotGameSettings`** | Sets `isTrialMode = true`. |
