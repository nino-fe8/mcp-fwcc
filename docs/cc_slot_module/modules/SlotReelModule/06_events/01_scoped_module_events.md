---
id: "cc_slot_module:SlotReelModule:events:scoped_module_events"
title: "SlotReelModule Scoped Module Events"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "events", "scoped_events", "callbacks"]
---

# 📡 SlotReelModule Scoped Module Events & Callbacks

<!-- convention-summary-start -->
### SlotReelModule Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotReelModule Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Direct Parent Table Callback Contracts

Because `SlotReelModule` instances are low-overhead rendering engines, they communicate with `SlotTableModule` primarily through fast, direct function delegates:

| Delegate Name | Injected When | Triggered Moment | Receiving Component |
| :--- | :--- | :--- | :--- |
| `reelPreStopCB(reelIndex)` | `showResult()` | Just before deceleration bounce initiates. | `SlotTableNearWinModule` (Plays anticipation VFX). |
| `reelStopCB(reelIndex)` | `showResult()` | After bounce tween completes and reel resets. | `SlotTableModule` (Increments `reelCount++`). |

---

## 2. Child Symbol Event Emits

* `PLAY_ANIMATION_APPEAR`: Broadcast to child symbols upon bounce settling to play entrance/idle Spine loops.
