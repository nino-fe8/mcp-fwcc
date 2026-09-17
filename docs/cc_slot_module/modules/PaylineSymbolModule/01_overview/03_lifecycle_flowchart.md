---
id: "cc_slot_module:PaylineSymbolModule:overview:lifecycle_flowchart"
title: "PaylineSymbolModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 PaylineSymbolModule Lifecycle Flowchart

<!-- convention-summary-start -->
### PaylineSymbolModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symbol Reparenting & Animation Loop

```mermaid
sequenceDiagram
    autonumber
    participant Emitter as payLineEmitter
    participant PSM as PaylineSymbolModule
    participant SSM as SlotSymbolManager
    participant Sym as SlotSymbolModule

    Emitter->>PSM: PAYLINE_SET_DATA { matrix, payLines }
    PSM->>PSM: Stores matrix and payLines data
    
    Emitter->>PSM: PAYLINE_BLINK_ALL { blinkDuration }
    PSM->>PSM: getAllWinSymbols()
    PSM->>SSM: getSymbolByIndex(index, PAYLINE)
    PSM->>PSM: changeParent(symbol, this.container)
    PSM->>Sym: symbol.emit("PLAY_ANIMATION_WIN")
    PSM->>Emitter: emit("SYMBOL_PLAY_ANIMATION_WIN")
    PSM->>SSM: updateSymbolSiblingIndex()

    Emitter->>PSM: PAYLINE_CLEAR
    PSM->>SSM: factory.returnSymbol(symbol)
```
