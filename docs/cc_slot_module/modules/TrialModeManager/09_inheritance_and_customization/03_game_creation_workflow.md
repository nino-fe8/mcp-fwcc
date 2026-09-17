---
id: "cc_slot_module:TrialModeManager:inheritance:game_creation_workflow"
title: "TrialModeManager Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 TrialModeManager Game Creation Setup Workflow

<!-- convention-summary-start -->
### TrialModeManager Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Create a node under `Canvas/Director/TrialMode`.
2. Attach `TrialModeManager`.
3. Add `TrialModeData` entries for each supported currency.
4. Optionally construct a scenario selection popup and link `trialModePanel` / `optionHolder`.
