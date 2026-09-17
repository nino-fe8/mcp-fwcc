---
id: "cc_slot_module:TrialModeManager:recipes:custom_trial_demo_tutorial_setup"
title: "Recipe: Setting Up Feature Tutorial Scenarios in Demo Mode"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "recipes", "tutorial_modal"]
---

# 💡 Recipe: Setting Up Feature Tutorial Scenarios in Demo Mode

<!-- convention-summary-start -->
### Recipe: Setting Up Feature Tutorial Scenarios in Demo Mode Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Setting Up Feature Tutorial Scenarios in Demo Mode.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Node Hierarchy & Button Setup

1. Create `trialModePanel` under `Canvas/Director/TrialMode`.
2. Add `optionHolder` node containing scenario buttons:
   - Button 0: Custom Click Event invoking `playOption(event, 0)` -> Trigger Free Spins Demo
   - Button 1: Custom Click Event invoking `playOption(event, 1)` -> Trigger Bonus Game Demo
3. Set `useSelectionPanel = true` in `TrialModeManager` Inspector.
