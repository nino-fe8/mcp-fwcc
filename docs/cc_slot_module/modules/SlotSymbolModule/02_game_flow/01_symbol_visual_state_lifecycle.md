---
id: "cc_slot_module:SlotSymbolModule:game_flow:visual_state_lifecycle"
title: "SlotSymbolModule Visual State Lifecycle & Transitions"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "game_flow", "visual_state", "transitions", "timing"]
---

# 🔄 SlotSymbolModule Visual State Lifecycle & Transitions

<!-- convention-summary-start -->
### SlotSymbolModule Visual State Lifecycle & Transitions Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotSymbolModule Visual State Lifecycle & Transitions.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Visual State Transition Matrix

| Current State | Triggering Method / Event | Target State | Visual Component Behavior |
| :--- | :--- | :--- | :--- |
| **Idle** | `changeToBlurSymbol()` | **Blur Scrolling** | `sprite.node.active = true` (Blur Frame), `spine.node.active = false`. |
| **Blur Scrolling** | `showStatic()` / `changeToSymbol()` | **Static Idle** | `sprite.node.active = true` (Static Frame), `spine.node.active = false`. |
| **Static Idle** | `playAnimationWin()` | **Spine Win Loop** | `sprite.node.active = false`, `spine.node.active = true` (`setAnimation(0, "win", true)`). |
| **Spine Win Loop** | `stopAnimation()` | **Static Idle** | `spine.setToSetupPose()`, `sprite.node.active = true`, `spine.node.active = false`. |
| **Any State** | `disableHighlight()` | **Dimmed State** | Vertex color multiplied by `colorDim` (`#7F7F7F`). |
| **Dimmed State** | `enableHighlight()` | **Restored State** | Vertex color restored to `colorNormal` (`#FFFFFF`). |
