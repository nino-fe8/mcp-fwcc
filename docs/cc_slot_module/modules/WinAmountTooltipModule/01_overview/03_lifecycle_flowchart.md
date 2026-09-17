---
id: "cc_slot_module:WinAmountTooltipModule:overview:lifecycle_flowchart"
title: "WinAmountTooltipModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 WinAmountTooltipModule Lifecycle Flowchart

<!-- convention-summary-start -->
### WinAmountTooltipModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Ticker & Win Presentation Flow

```mermaid
sequenceDiagram
    autonumber
    participant Engine as EventManager
    participant Tooltip as WinAmountTooltipModule

    Note over Tooltip: Idle Mode: Scrolling feature hints
    Tooltip->>Tooltip: showText() -> Sliding featureSf across movingTime

    Engine->>Tooltip: SHOW_TOOLTIP_WIN_AMOUNT (Win Event)
    Tooltip->>Tooltip: stopAllTweens() -> Hides feature tip
    Tooltip->>Tooltip: showWinAmount() -> Starts rolling money count-up
    Tooltip->>Tooltip: showWinText(false) -> Shows "WIN" sprite

    Engine->>Tooltip: HIDE_TOOLTIP (Spin Reset)
    Tooltip->>Tooltip: hideWinAmount() -> Resumes showText() ticker
```
