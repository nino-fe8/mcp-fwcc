---
id: "game-implement:9666:transform:flow"
title: "Red Cliff (g9666) Transform Symbol Trigger, Animation & Lifecycle Flow"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TransformSymbolModule9666", "animation_flow", "lifecycle", "events"]
---

# 🎬 Red Cliff (g9666) Transform Symbol Animation & Lifecycle Flow

<!-- convention-summary-start -->
### Red Cliff (g9666) Transform Symbol Animation & Lifecycle Flow Summary

- **Core Architecture / Purpose**: Step-by-step sequencing of server trigger parsing, morphing animation playback, payline integration, and pool return.
- **Key Mechanisms & Design**: Coordinates `onTransformSymbol()`, `changeToSymbol('K')`, `playAnimationAppear()`, and cleanup on `TABLE_STOP_SPIN`.
- **Domain Capabilities**: game_implement, 05_transform_symbol_subsystem
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/TransformSymbolModule9666 .ts`
- **Related Docs**: [01_transform_architecture_and_pool.md](./01_transform_architecture_and_pool.md)
<!-- convention-summary-end -->

---

## 1. Sequence Execution Diagram

```mermaid
sequenceDiagram
    autonumber
    participant D as NormalGameDirector
    participant TData as TransformSymbolModuleData9666
    participant TMod as TransformSymbolModule9666
    participant SMgr as SlotSymbolManager9666
    participant Node as TransformSymbolNode (Overlay)
    participant Table as SlotTableModule

    D->>TMod: runAction("TransformSymbol") / onTransformSymbol()
    TMod->>TData: getTransformData()
    TData-->>TMod: [{ symbolIndex: 8, targetSymbol: "K" }]
    
    loop For each item in transformData
        TMod->>Table: getSymbolByColRow(col, row)
        Table-->>TMod: underlyingSlotNode
        TMod->>SMgr: getSymbolFromPool()
        SMgr-->>TMod: Node
        TMod->>Node: setPosition(localPos) & owner = TRANSFORM_SYMBOL
        TMod->>Node: changeToSymbol("K")
        TMod->>Node: playAnimationAppear()
        Note over Node: Spawns Grass Boat Wild VFX over existing cell
    end

    Note over Table: Paylines & Ways evaluate with Wild K in place
    Table->>TMod: emit("TABLE_STOP_SPIN")
    TMod->>TMod: clearTransformSymbols()
    TMod->>SMgr: returnToPool(Node)
```

---

## 2. Event Lifecycle & Step Breakdown

1. **Trigger Condition**:
   - During respin / cascade evaluation, server payload supplies `transformSymbols` indices.
   - `NormalGameDirectorModule9666` or `CompositeCascade9666` calls `onTransformSymbol()`.
2. **Visual Transformation**:
   - The overlay symbol plays `appear` animation with particle trail.
   - The underlying standard symbol is hidden or darkened while the Wild `K` occupies the cell.
3. **Payline Integration**:
   - The slot engine includes the Wild `K` in AllWays matching combinations.
4. **Cleanup & Synchronization**:
   - When `TABLE_STOP_SPIN` fires, all active overlay nodes in `_transformSymbols` are returned to the pool and cleared to prevent memory leaks or ghost symbols.
