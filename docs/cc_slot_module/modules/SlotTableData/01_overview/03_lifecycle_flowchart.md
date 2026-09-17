---
id: "cc_slot_module:SlotTableData:overview:lifecycle_flowchart"
title: "SlotTableData Lifecycle & Reactive Ingestion Flow"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "overview", "lifecycle", "flowchart", "reactive_flow"]
---

# 🔄 SlotTableData Lifecycle & Reactive Ingestion Flow

<!-- convention-summary-start -->
### SlotTableData Lifecycle & Reactive Ingestion Flow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableData Lifecycle & Reactive Ingestion Flow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Sequence Flow of State Ingestion & Matrix Resolution

```mermaid
sequenceDiagram
    autonumber
    participant Server as WebSocket Server
    participant GDS as GameDataStore
    participant Data as SlotTableData
    participant Config as TableModuleConfig
    participant View as SlotTableModule

    Note over Data,Config: Co-located on Table Node during onLoad
    Data->>Config: getComponent(TableModuleConfig)
    Data->>GDS: dataStore.registerModule(this) via BaseDataModule.start()
    
    Server->>GDS: Receives Spin Response Payload { matrix: ["2","3","4",...] }
    GDS->>Data: onDataUpdate("matrix", ["2","3","4",...])
    Data->>Data: this["matrix"] = ["2","3","4",...]
    
    View->>Data: getMatrix()
    Data->>Config: Reads TABLE_FORMAT: [3, 3, 3, 3, 3]
    Data->>Data: eno.SlotUtils.convertSlotMatrix(rawMatrix, TABLE_FORMAT)
    Data-->>View: Returns 2D Matrix string[5][3]
```
