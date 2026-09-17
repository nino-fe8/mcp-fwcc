---
id: "cc_slot_mechanics:NudgeReelModule:overview:lifecycle_flowchart"
title: "NudgeReelModule Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 NudgeReelModule Lifecycle & Sequence Flowchart

<!-- convention-summary-start -->
### NudgeReelModule Lifecycle & Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NudgeReelModule Lifecycle & Sequence Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 01_overview
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as NudgeReelModule
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
