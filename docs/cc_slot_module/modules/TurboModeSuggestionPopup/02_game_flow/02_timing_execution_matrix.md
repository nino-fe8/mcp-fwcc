---
id: "cc_slot_module:TurboModeSuggestionPopup:game_flow:timing_execution_matrix"
title: "TurboModeSuggestionPopup Timing Matrix"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "game_flow", "timing"]
---

# 📊 TurboModeSuggestionPopup Timing Matrix

<!-- convention-summary-start -->
### TurboModeSuggestionPopup Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for TurboModeSuggestionPopup Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Method | Result |
| :--- | :--- | :--- |
| **Confirm** | `onConfirm()` | Emits `ON_ACTIVE_FROM_TURBO_INTRO`. |
| **Cancel** | `onCancel()` | Dismisses modal without activating Turbo. |
