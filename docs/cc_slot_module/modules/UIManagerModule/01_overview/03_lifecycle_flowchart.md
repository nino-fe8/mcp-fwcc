---
id: "cc_slot_module:UIManagerModule:overview:lifecycle_flowchart"
title: "UIManagerModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 UIManagerModule Lifecycle Sequence Flowchart

<!-- convention-summary-start -->
### UIManagerModule Lifecycle Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Lifecycle Sequence Flowchart.
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
    participant Director as GameModeDirector
    participant UIM as UIManagerModule
    participant NormalUI as Normal Game Elements
    participant FreeUI as Free Game Elements
    participant SpinBtn as SlotButtonModule

    Director->>UIM: UPDATE_GAME_MODE_UI(FREE_GAME)
    UIM->>UIM: hideAllUI()
    UIM->>NormalUI: setNodeActive(false)
    UIM->>FreeUI: setNodeActive(true)
    UIM->>UIM: showJackpotUI()
    
    Note over SpinBtn: Player Presses Spacebar
    SpinBtn->>UIM: checkDisplayPopup()
    alt Popup or Cutscene Active
        UIM-->>SpinBtn: returns true -> Action blocked
    else Screen Clear
        UIM-->>SpinBtn: returns false -> Spin triggered
    end
```
