---
id: "cc_slot_module:SlotReelModule:customization:override_points_matrix"
title: "SlotReelModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "customization", "override_points", "hooks"]
---

# 📋 SlotReelModule Override Points Matrix

<!-- convention-summary-start -->
### SlotReelModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotReelModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points & Hook Methods

| Hook Method | Base Behavior | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `customizeNewSymbol(symbol)` | Empty virtual hook | `YES (Recommended)` | Optional | Trigger custom Spine skins or particles when new symbol spawns. |
| `playStopAnimation()` | Two-phase bounce tween | `YES` | `MANDATORY` | Custom column landing VFX and sound triggers. |
| `getPositionStopStep()` | Computes bounce offset | `YES` | Optional | Custom bounce distance and easing curves. |
| `onReelPreStop()` | Emits `reelPreStopCB` | `YES` | `MANDATORY` | Column pre-stop anticipation teasers. |
| `resetReel()` | Coordinate offset reset | `YES` | `MANDATORY` | Clean up custom column VFX and restore resting anchors. |
