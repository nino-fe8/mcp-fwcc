---
id: "cc_slot_module:SlotTableNearWinModule:gotchas:index"
title: "SlotTableNearWinModule Engine Gotchas Index"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotTableNearWinModule Engine Gotchas Index

<!-- convention-summary-start -->
### SlotTableNearWinModule Engine Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Engine Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_nearwin_sound_stuck_on_ftr.md`, `./02_missing_spine_animation_fallback.md`
- **Related Docs**: [`01_nearwin_sound_stuck_on_ftr.md`](./01_nearwin_sound_stuck_on_ftr.md), [`02_missing_spine_animation_fallback.md`](./02_missing_spine_animation_fallback.md)
<!-- convention-summary-end -->


---

## 1. Known Gotchas Summary

| Gotcha Document | Symptom | Severity | Engine Subsystem |
| :--- | :--- | :--- | :--- |
| **[`01_nearwin_sound_stuck_on_ftr.md`](./01_nearwin_sound_stuck_on_ftr.md)** | Tension audio loops indefinitely after fast-stopping a near-win spin. | `CRITICAL` | Audio / State Machine |
| **[`02_missing_spine_animation_fallback.md`](./02_missing_spine_animation_fallback.md)** | Null pointer exception when `useSpine: true` but `sp.Skeleton` is missing. | `HIGH` | Visual Rendering |
