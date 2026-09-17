---
id: "cc_slot_module:BetHistoryModule:inheritance:production_game_case_study"
title: "BetHistoryModule Production Game Case Study"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🏛️ BetHistoryModule Production Game Case Study: Red Cliff (`g9666L`)

<!-- convention-summary-start -->
### BetHistoryModule Production Game Case Study Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Production Game Case Study.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Architectural Implementation in Red Cliff

In Red Cliff Slot (`g9666L`), `BetHistoryModule` coordinates between the base game UI and the standalone history replay scene. The module is configured with `itemPerPage = 5` and seamlessly routes replay session identifiers to `BetHistoryDetailModule` for step-by-step free spin waterfall replays.
