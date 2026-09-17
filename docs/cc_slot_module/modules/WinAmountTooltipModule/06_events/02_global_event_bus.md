---
id: "cc_slot_module:WinAmountTooltipModule:events:global_event_bus"
title: "WinAmountTooltipModule Global Event Bus"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "events", "global"]
---

# 🌐 WinAmountTooltipModule Global Event Bus

<!-- convention-summary-start -->
### WinAmountTooltipModule Global Event Bus Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule Global Event Bus.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Listened

| Event | Handler | Purpose |
| :--- | :--- | :--- |
| `SHOW_TOOLTIP_WIN_AMOUNT` | `showWinAmount()` | Starts line win rolling count-up. |
| `SHOW_TOOLTIP_TOTAL_WIN_AMOUNT`| `showTotalWinAmount()`| Starts total win rolling count-up. |
| `SHOW_TOOLTIP_TEXT` | `showText()` | Resumes feature hint ticker. |
| `HIDE_TOOLTIP` | `hideTooltip()` | Hides win labels. |
| `JOIN_GAME_SUCCESS` | `onJoinGameSuccess()` | Restores resume session wins. |
