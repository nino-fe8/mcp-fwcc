---
id: "cc_slot_module:TrialModeManager:director_writer:pipeline_orchestration"
title: "TrialModeManager Pipeline Integration"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 TrialModeManager Pipeline Integration

<!-- convention-summary-start -->
### TrialModeManager Pipeline Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager Pipeline Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Emits startup initialization event:
```typescript
this.gameLogic.emit(GameLogicUIEvents.INIT_TRIAL_MODE, this.trialModeData);
```
Dispatches user selection events:
- `GameLogicUIEvents.PLAY_TUTORIAL_OPTION`
- `GameLogicUIEvents.SKIP_TRIAL_DATA`
