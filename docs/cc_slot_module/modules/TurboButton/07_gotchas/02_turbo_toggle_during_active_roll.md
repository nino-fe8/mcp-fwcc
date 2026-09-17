---
id: "cc_slot_module:TurboButton:gotchas:turbo_toggle_during_active_roll"
title: "Gotcha: Reel Deceleration Mid-Spin Glitch"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "gotchas", "mid_spin"]
---

# ⚠️ Gotcha: Reel Deceleration Mid-Spin Glitch

<!-- convention-summary-start -->
### Gotcha: Reel Deceleration Mid-Spin Glitch Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Reel Deceleration Mid-Spin Glitch.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If the player turns Turbo OFF while reels are already spinning in high-speed Turbo mode, transitioning abruptly to slow deceleration can cause easing overshoot glitches if reel step calculations assume constant velocity.

---

## 2. Prevention

`SlotTableDirector` caches the `isTurboActive` state at spin start for current reel easing formulas and applies newly toggled settings to subsequent spins.
