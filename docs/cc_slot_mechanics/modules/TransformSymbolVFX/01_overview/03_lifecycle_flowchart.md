---
id: "cc_slot_mechanics:TransformSymbolVFX:overview:lifecycle_flowchart"
title: "TransformSymbolVFX Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TransformSymbolVFX Lifecycle & Sequence Flowchart

<!-- convention-summary-start -->
### TransformSymbolVFX Lifecycle & Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TransformSymbolVFX Lifecycle & Sequence Flowchart.
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
    participant Module as TransformSymbolVFX
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
