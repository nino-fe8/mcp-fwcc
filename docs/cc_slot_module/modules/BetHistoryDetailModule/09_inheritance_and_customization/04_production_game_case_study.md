---
id: "cc_slot_module:BetHistoryDetailModule:inheritance:production_game_case_study"
title: "BetHistoryDetailModule Production Case Study"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🏛️ BetHistoryDetailModule Production Case Study: Red Cliff (`g9666L`)

<!-- convention-summary-start -->
### BetHistoryDetailModule Production Case Study Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Production Case Study.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Production Architecture in Red Cliff

In Red Cliff (`g9666L`), `BetHistoryDetailModule` renders step replays across Normal Spins and Free Spins with wild multiplier banners. The module recycles `ScrollItem` tabs smoothly using `NodePool` without any frame drops during horizontal swipe gestures.
