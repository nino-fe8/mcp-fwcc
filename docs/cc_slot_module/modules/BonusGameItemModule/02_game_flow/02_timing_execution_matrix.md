---
id: "cc_slot_module:BonusGameItemModule:game_flow:timing_execution_matrix"
title: "BonusGameItemModule Item Animation Timing Matrix"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BonusGameItemModule Item Animation Timing Matrix

<!-- convention-summary-start -->
### BonusGameItemModule Item Animation Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BonusGameItemModule Item Animation Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Timing Matrix

| Phase | Duration | Execution Mode | Behavior |
| :--- | :--- | :--- | :--- |
| `onClickItem` | Immediate | Synchronous | Dispatches `CLICK_ITEM` custom event up the node tree. |
| `playAnimOpen` Phase 1 | `0.5s` | Tween Delay | Chest opening visual anticipation. |
| `playAnimOpen` Phase 2 | `0.5s` | Tween Delay | Score count-up / prize display before invoking `callback()`. |
| `dim` / `undim` | Immediate | Synchronous | Tint color mutation (`colorDim` vs `colorNormal`). |
