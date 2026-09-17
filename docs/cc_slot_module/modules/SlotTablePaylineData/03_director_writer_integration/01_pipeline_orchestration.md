---
id: "cc_slot_module:SlotTablePaylineData:director_writer:pipeline_orchestration"
title: "SlotTablePaylineData Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 SlotTablePaylineData Pipeline Orchestration

<!-- convention-summary-start -->
### SlotTablePaylineData Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Data Flow in Script Pipeline

```mermaid
graph LR
    WS[WebSocket Ingestion] -->|Populates playSession| DataStore[GameDataStore]
    DataStore -->|updateDataModules| PData[SlotTablePaylineData]
    Director[GameModeDirectorModule] -->|SETUP_PAYLINES| PM[SlotTablePaylineModule]
    PM -->|Requests converted lines| PData
    PData -->|Returns parsed tracks| PM
```
