---
id: "cc_slot_module:PortraitBetModule:director_writer:pipeline_orchestration"
title: "PortraitBetModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 PortraitBetModule Pipeline Orchestration

<!-- convention-summary-start -->
### PortraitBetModule Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PortraitBetModule Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Pipeline Integration

`PortraitBetModule` responds to `enableBetChange` notifications from the master spin director to guard against wager modifications during in-flight spins.
