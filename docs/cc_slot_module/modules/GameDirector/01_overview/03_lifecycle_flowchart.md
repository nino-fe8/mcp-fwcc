---
id: "cc_slot_module:GameDirector:overview:lifecycle_flowchart"
title: "GameDirector Mode Transition & Event Routing Flowchart"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "overview", "lifecycle", "flowchart", "mode_switch"]
---

# 🔄 GameDirector Mode Transition & Event Routing Flowchart

<!-- convention-summary-start -->
### GameDirector Mode Transition & Event Routing Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Mode Transition & Event Routing Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Mode Dispatch & Stack Flowchart

```mermaid
graph TD
    Start([start(): registerUIEvents & setUpGameMode]) --> DefSwitch[onSwitchGameMode: NORMAL_GAME]
    DefSwitch --> NormActive[NormalGame active = true & enter()]
    
    NormActive --> FeatureTrigger{SWITCH_GAME_MODE received?}
    FeatureTrigger -->|Trigger FreeGame| SwitchFree[onSwitchGameMode FREE_GAME]
    SwitchFree --> PushStack[Push FreeGame to currentModes]
    PushStack --> HideNorm[NormalGame active = false]
    HideNorm --> ShowFree[FreeGame active = true & enter()]
    
    ShowFree --> FeatureExit{EXIT_GAME_MODE received?}
    FeatureExit -->|Feature Finished| PopStack[onExitGameMode: Pop currentModes]
    PopStack --> HideFree[FreeGame exit() & active = false]
    HideFree --> RestoreNorm[NormalGame active = true & onBackToGameMode]
```
