---
id: "cc_slot_module:AutoScaleBackgroundModule:overview:lifecycle_flowchart"
title: "AutoScaleBackgroundModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 AutoScaleBackgroundModule Lifecycle Flowchart

<!-- convention-summary-start -->
### AutoScaleBackgroundModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoScaleBackgroundModule Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Sequence

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant ASB as AutoScaleBackground

    Engine->>ASB: onLoad() -> bind resize / canvas-resize listener
    Engine->>ASB: start() -> scaleCanvasByOrientation()
    Engine->>ASB: onScreenResized() -> scaleCanvasByOrientation()
    Engine->>ASB: onDestroy() -> unbind resize listener
```
