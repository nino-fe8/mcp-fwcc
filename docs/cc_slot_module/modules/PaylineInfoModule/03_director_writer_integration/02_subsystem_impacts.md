---
id: "cc_slot_module:PaylineInfoModule:director_writer:subsystem_impacts"
title: "PaylineInfoModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PaylineInfoModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### PaylineInfoModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`PaylineControllerModule`** | Emits `ON_SHOW_PAYLINE_INFO` and `ON_HIDE_PAYLINE_INFO`. |
| **`GameConfig`** | Reads `PAY_SYSTEM` (`LINES`, `ALLWAYS`, `CLUSTER`, `SCATTER_PAY`). |
| **`GameLogic`** | Provides localized string translations (`getGameText`). |
