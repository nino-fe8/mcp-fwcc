---
id: "cc_slot_module:VerticalCascadeModule:overview:lifecycle_flowchart"
title: "VerticalCascadeModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 VerticalCascadeModule Lifecycle Sequence Flowchart

<!-- convention-summary-start -->
### VerticalCascadeModule Lifecycle Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule Lifecycle Sequence Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Writer as Mode Writer
    participant VCM as VerticalCascadeModule
    participant Data as CascadeModuleData
    participant SM as SlotSymbolManager

    Note over Writer, SM: 1. Start Respin (Eliminate Wins)
    Writer->>VCM: moduleEvent.emit("TABLE_START_RESPIN")
    VCM->>Data: formatData()
    VCM->>VCM: checkForDropSymbols()
    VCM->>VCM: removeDroppedSymbols()
    VCM->>SM: removeSymbol(symbol)

    Note over Writer, SM: 2. Stop Respin (Cascade Tumble)
    Writer->>VCM: moduleEvent.emit("TABLE_STOP_RESPIN")
    VCM->>VCM: processOldSymbols() (downward drop calculation)
    VCM->>VCM: processNewSymbols() (top incoming symbols)
    VCM->>SM: getSymbolByIndex() (pull fresh symbols)
    VCM->>VCM: fallingSymbols() (launch tweens)
    VCM-->>Writer: Promise resolved after CASCADING_TIME_COMPLETED
```
