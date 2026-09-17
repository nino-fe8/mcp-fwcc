---
id: "cc_slot_module:BonusGameDirectorModule:gotchas:index"
title: "BonusGameDirectorModule Gotchas Index"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BonusGameDirectorModule Gotchas Index

<!-- convention-summary-start -->
### BonusGameDirectorModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_rapid_clicks_during_network_transit.md`
- **Related Docs**: [`01_rapid_clicks_during_network_transit`](./01_rapid_clicks_during_network_transit.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_rapid_clicks_during_network_transit`](./01_rapid_clicks_during_network_transit.md)** | Player can tap multiple chests before the first network response returns. | Failure to call `blockBonusGame()` synchronously on the first touch event. | 🔴 Critical (State Corruption) |
