---
id: "cc_slot_module:BetHistoryDetailModule:director_writer:subsystem_impacts"
title: "BetHistoryDetailModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BetHistoryDetailModule Subsystem Impacts

<!-- convention-summary-start -->
### BetHistoryDetailModule Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Impacts

- **Node Pool**: Recycles `ScrollItem` instances into `ScrollHistoryPool` upon view reset to prevent allocation overhead.
- **Audio Player**: Triggers `soundPlayer.playSFXClick()` on tab or navigation button click.
- **Data Model**: Watches `BetHistoryDetailData` properties: `gameModeData`, `currentData`, `currentIndex`, `isEnableNext`, `isEnablePrev`.
