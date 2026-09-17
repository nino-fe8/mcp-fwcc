---
id: "cc_slot_module:PaylineNumberModule:director_writer:pipeline_orchestration"
title: "PaylineNumberModule 3-Tier Pipeline Orchestration"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 PaylineNumberModule 3-Tier Pipeline Orchestration

<!-- convention-summary-start -->
### PaylineNumberModule 3-Tier Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule 3-Tier Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 3-Tier Flow

```text
GameModeDirectorModule / Writer
       │
       ▼ (moduleEvent: SETUP_PAYLINES)
SlotTablePaylineModule
       │
       ▼ (payLineEmitter: PAYLINE_SET_DATA, PAYLINE_BLINK_ALL, PAYLINE_SHOW_LINE)
PaylineNumberModule
       │
       ▼ (item.show() / hide())
PaylineNumberItem Component instances
```
