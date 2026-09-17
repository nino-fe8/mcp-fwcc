---
id: "cc_slot_module:TrialModeManager:events:global_event_bus"
title: "TrialModeManager Global Event Bus Specification"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "events", "global_bus"]
---

# 🌐 TrialModeManager Global Event Bus Specification

<!-- convention-summary-start -->
### TrialModeManager Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.INIT_TRIAL_MODE` | `this.trialModeData` | `GameLogic` | Initializes trial configuration. |
| `GameLogicUIEvents.PLAY_TUTORIAL_OPTION` | `option: number` | `GameLogic` | Triggers specific demo scenario. |
| `GameLogicUIEvents.SKIP_TRIAL_DATA` | None | `GameLogic` | Closes demo selection panel. |
