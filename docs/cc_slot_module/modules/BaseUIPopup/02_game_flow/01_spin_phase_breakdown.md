---
id: "cc_slot_module:BaseUIPopup:game_flow:spin_phase_breakdown"
title: "BaseUIPopup Game Flow Lifecycle"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 BaseUIPopup Game Flow Lifecycle

<!-- convention-summary-start -->
### BaseUIPopup Game Flow Lifecycle Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BaseUIPopup Game Flow Lifecycle.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Game Flow Breakdown

| Phase / State | BaseUIPopup Status |
| :--- | :--- |
| **Idle** | Can open upon user click on Header / Menu buttons. |
| **Active Open** | Blocks background input; updates view components. |
| **Close** | Plays exit transition and re-enables underlying UI. |
