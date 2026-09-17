---
id: "cc_slot_module:SlotSymbolManager:overview:lifecycle_flowchart"
title: "SlotSymbolManager Symbol Pooling & Recycling Flowchart"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "overview", "lifecycle", "flowchart", "node_pool"]
---

# 🔄 SlotSymbolManager Symbol Pooling & Recycling Flowchart

<!-- convention-summary-start -->
### SlotSymbolManager Symbol Pooling & Recycling Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager Symbol Pooling & Recycling Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Symbol Lifecycle Flowchart

```mermaid
graph TD
    Init([initSymbolPool]) --> WarmPool[Pre-instantiate initCount instances into symbolPool]
    
    BorrowRequest[Request Symbol: getSymbol / getSymbolByIndex] --> CheckPool{symbolPool.size > 0?}
    CheckPool -->|Yes| PopPool[symbolPool.get]
    CheckPool -->|No: Depleted| AllocNew[instantiate template]
    
    PopPool --> SetMeta[setOwner + setIndex + active=true]
    AllocNew --> SetMeta
    SetMeta --> PushUsing[usingSymbols.push]
    PushUsing --> InUse[Active Rendering in Reel / Payline]
    
    InUse --> RecycleRequest[Recycle: returnSymbol / removeSymbol]
    RecycleRequest --> CheckSticky{index === STICKY and !isForce?}
    CheckSticky -->|Yes: Persistent| Retain[Keep in usingSymbols without recycling]
    CheckSticky -->|No| ResetSymbol[resetBeforeBackToPool + setIndex UNUSED + setOwner NONE]
    
    ResetSymbol --> SpliceUsing[Splice from usingSymbols]
    SpliceUsing --> PutPool[symbolPool.put / destroy]
```
