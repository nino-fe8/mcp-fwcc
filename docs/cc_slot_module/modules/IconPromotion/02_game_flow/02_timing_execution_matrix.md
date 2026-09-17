---
id: "cc_slot_module:IconPromotion:game_flow:timing_execution_matrix"
title: "IconPromotion Timing Matrix"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ IconPromotion Timing Matrix

<!-- convention-summary-start -->
### IconPromotion Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for IconPromotion Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing

| Event | Execution Duration |
| :--- | :--- |
| `showPromotion` | Immediate ($0.0\text{s}$) |
