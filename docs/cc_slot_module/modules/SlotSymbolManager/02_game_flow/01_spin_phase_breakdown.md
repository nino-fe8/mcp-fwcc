---
id: "cc_slot_module:SlotSymbolManager:game_flow:spin_phase_breakdown"
title: "SlotSymbolManager Spin Phase Recycling Breakdown"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 SlotSymbolManager Spin Phase Recycling Breakdown

<!-- convention-summary-start -->
### SlotSymbolManager Spin Phase Recycling Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotSymbolManager Spin Phase Recycling Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Spin Lifecycle Interactions

```mermaid
sequenceDiagram
    autonumber
    participant Table as SlotTableModule
    participant Manager as SlotSymbolManager
    participant Reel as SlotReelModule
    participant Payline as SlotTablePaylineModule

    Note over Table,Payline: Phase 1: Spin Start & Blur Allocation
    Table->>Manager: removeAllSymbols() (Non-sticky symbols returned to pool)
    Reel->>Manager: createBlurSymbol(code, size, parent, "REEL")
    Manager-->>Reel: Returns pooled/new symbol node configured for blur rendering

    Note over Table,Payline: Phase 2: Deceleration & Static Landing
    Reel->>Manager: createSymbol(code, size, parent, "REEL")
    Manager->>Manager: getSymbolModule(symbol).init(code) + changeToStaticSymbol()
    Reel->>Manager: returnSymbol(blurSymbolNode) (Blur nodes recycled)

    Note over Table,Payline: Phase 3: Payline Win Highlight & Z-Sorting
    Payline->>Manager: updateSymbolSiblingIndex(hitSymbols)
    Manager->>Manager: sortSymbols() based on layerConfig (Wilds/Scatters on top)
```
