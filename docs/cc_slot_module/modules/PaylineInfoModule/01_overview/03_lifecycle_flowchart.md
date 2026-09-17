---
id: "cc_slot_module:PaylineInfoModule:overview:lifecycle_flowchart"
title: "PaylineInfoModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 PaylineInfoModule Lifecycle Sequence Flowchart

<!-- convention-summary-start -->
### PaylineInfoModule Lifecycle Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule Lifecycle Sequence Flowchart.
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
    participant PLC as PaylineControllerModule
    participant PIM as PaylineInfoModule
    participant UI as UIManagerModule

    PLC->>PIM: emit("ON_SHOW_PAYLINE_INFO", paylineData)
    PIM->>PIM: shouldWorkInCurrentGameMode()?
    PIM->>PIM: convertPayLineInfo(paylineData)
    PIM->>PIM: Update lbLeft, sprSymbol, lbRight & node.active = true
    
    Note over PLC: Cycles through next line or spin starts
    PLC->>PIM: emit("ON_HIDE_PAYLINE_INFO")
    PIM->>PIM: node.active = false
```
