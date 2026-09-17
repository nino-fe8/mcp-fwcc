---
id: "cc_slot_module:SpinTimesModule:game_flow:spin_phase_breakdown"
title: "SpinTimesModule Spin Phase Lifecycle"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 SpinTimesModule Spin Phase Lifecycle

<!-- convention-summary-start -->
### SpinTimesModule Spin Phase Lifecycle Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SpinTimesModule Spin Phase Lifecycle.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Phase Breakdown

| Mode / Phase | SpinTimesModule Behavior |
| :--- | :--- |
| **Idle Normal Game** | Hidden (`node.active = false`). |
| **Auto Spin Active** | Visible, displays remaining auto-spins countdown. |
| **Free Spins Active**| Visible, displays remaining free spins countdown. |
| **Rounds Finished** | Invokes `resetSpinTimes()`, clears text, and hides. |
