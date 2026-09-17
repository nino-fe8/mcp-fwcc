---
id: "cc_slot_module:SlotSymbolModule:overview:lifecycle_flowchart"
title: "SlotSymbolModule Lifecycle & Display State Transitions"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "overview", "lifecycle", "flowchart", "state_machine"]
---

# 🔄 SlotSymbolModule Lifecycle & Display State Transitions

<!-- convention-summary-start -->
### SlotSymbolModule Lifecycle & Display State Transitions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule Lifecycle & Display State Transitions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symbol Display State Machine Flowchart

```mermaid
stateDiagram-v2
    [*] --> POOLED: Instantiated in NodePool
    POOLED --> BLUR: Checked out during Reel Spin (changeToBlurSymbol)
    BLUR --> STATIC: Column Landing (showStatic / changeToSymbol)
    STATIC --> WIN_SPINE: Payline Evaluation (playAnimationWin)
    WIN_SPINE --> STATIC: Payline Cycle Stop (stopAnimation)
    STATIC --> POOLED: Column Recycling (resetBeforeBackToPool)
```

---

## 2. Granular Frame-by-Frame Execution Flow

```mermaid
sequenceDiagram
    autonumber
    participant Reel as SlotReelModule
    participant Pool as SlotSymbolManager
    participant Sym as SlotSymbolModule
    participant Res as SlotSymbolResourceManager
    participant Spine as sp.Skeleton

    Reel->>Pool: checkout SymbolNode
    Pool->>Sym: init(symbolCode, size)
    Sym->>Res: getSymbolFrame(symbolName)
    Sym->>Sym: switchToStatic(true)
    
    alt During Spin Roll
        Reel->>Sym: changeToBlurSymbol()
        Sym->>Res: getBlurSymbolFrame(symbolName)
    else Column Bounce Landing
        Reel->>Sym: showStatic() + emit("PLAY_ANIMATION_APPEAR")
    else Winning Payline Triggered
        Reel->>Sym: playAnimationWin(loop = true)
        Sym->>Res: getSymbolSkeleton(symbolCode)
        Sym->>Spine: skeletonData = skeletonData
        Sym->>Sym: switchToStatic(false)
        Sym->>Spine: setAnimation(0, "win", true)
    else Reel Recycle / Teardown
        Reel->>Sym: resetBeforeBackToPool()
        Sym->>Sym: clearSkeletonData() -> skeletonData = null
        Pool->>Pool: put(node) back into cc.NodePool
    end
```
