---
id: "cc_slot_module:PortraitBetModule:overview:lifecycle_flowchart"
title: "PortraitBetModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 PortraitBetModule Lifecycle Flowchart

<!-- convention-summary-start -->
### PortraitBetModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PortraitBetModule Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Bet Boundary Flow

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant HUD as PortraitBetModule
    participant Data as BetData
    participant Toast as ToastInfoModule

    Player->>HUD: Taps Max Bet Shortcut
    HUD->>Toast: emit(HIT_MAX_BET)
    Data-->>HUD: observer -> onMaxBetEnable(true)
    HUD->>HUD: maxBetBtn.node.active = false (Hidden at max bound)
```
