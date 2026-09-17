---
id: "cc_slot_module:SlotSymbolModule:game_flow:spine_animation_priority_matrix"
title: "SlotSymbolModule Spine Animation Tracks & Priority Matrix"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "game_flow", "spine", "animation_matrix", "priority"]
---

# 🎭 SlotSymbolModule Spine Animation Tracks & Priority Matrix

<!-- convention-summary-start -->
### SlotSymbolModule Spine Animation Tracks & Priority Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotSymbolModule Spine Animation Tracks & Priority Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Standard Spine Animation Names Dictionary (`SymbolAnimationName`)

| Animation Type | Standard Track Name | Loop Setting | When Triggered |
| :--- | :--- | :--- | :--- |
| **Appear** | `animName.appear` (`"appear"`) | `false` | Symbol lands on grid upon reel bounce. Followed by `idle`. |
| **Idle** | `animName.idle` (`"idle"`) | `true` | Standard resting breathing animation for special Wild / Scatter symbols. |
| **Win** | `animName.win` (`"win"`) | `true` | Symbol participates in active winning payline or cluster. |
| **Disappear** | `animName.disappear` (`"disappear"`) | `false` | Cascading explosion / symbol elimination in avalanche games. |

---

## 2. Animation Track Management (`setAnimation` vs `addAnimation`)

* **`playAnimationAppear()`**: Calls `playAnimation(appear, false)` on Track 0, then queues `addAnimation(idle, true)` so the Spine skeleton smoothly transitions into idle loop upon finishing the appear burst.
* **Fallback Safety**: If the requested animation name does not exist in the skeleton (`!SpineUtils.hasAnimation(this.spine, name)`), the module automatically falls back to static sprite rendering via `stopAnimation()`.
