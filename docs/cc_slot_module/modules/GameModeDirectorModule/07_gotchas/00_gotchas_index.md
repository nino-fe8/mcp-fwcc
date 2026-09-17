---
id: "cc_slot_module:GameModeDirectorModule:gotchas:index"
title: "GameModeDirectorModule Gotchas Index"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ GameModeDirectorModule Gotchas Index

<!-- convention-summary-start -->
### GameModeDirectorModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_moduleList_wiring_breaks_scoped_events.md`
- **Related Docs**: [`01_missing_moduleList_wiring_breaks_scoped_events`](./01_missing_moduleList_wiring_breaks_scoped_events.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_moduleList_wiring_breaks_scoped_events`](./01_missing_moduleList_wiring_breaks_scoped_events.md)** | `SlotTableModule` or `PaylineModule` does not spin or show win lines when spin finishes. | The component node was not added to the `moduleList` Inspector array on `GameModeDirectorModule`. | 🔴 Critical (Reels Never Spin) |
