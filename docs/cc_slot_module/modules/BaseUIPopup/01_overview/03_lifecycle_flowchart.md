---
id: "cc_slot_module:BaseUIPopup:overview:lifecycle_flowchart"
title: "BaseUIPopup Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 BaseUIPopup Lifecycle Flowchart

<!-- convention-summary-start -->
### BaseUIPopup Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup Lifecycle Flowchart.
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
    participant Sub as Popup Subclass (e.g. SettingPanel)
    participant Base as BaseUIPopup
    participant PB as PopupBehavior

    Sub->>Base: onLoadExtend()
    Base->>Base: Query or add FadePopupBehavior
    
    Sub->>Base: togglePopup(true, onCompleteCb)
    Base->>PB: showPopup(onCompleteCb)
    PB->>PB: Runs scale/fade tween
    PB-->>Sub: onCompleteCb() executes
    
    Sub->>Base: closeAllPopups()
    Base->>Base: playSfxClick()
    Base->>Sub: emit(CLOSE_ALL_POPUPS)
```
