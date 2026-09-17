---
id: "cc_slot_module:MenuPanel:overview:lifecycle_flowchart"
title: "MenuPanel Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 MenuPanel Lifecycle Flowchart

<!-- convention-summary-start -->
### MenuPanel Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Drawer Navigation Flow

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant UI as MenuButton
    participant Drawer as MenuPanel
    participant Logic as GameLogic

    Player->>UI: Taps Hamburger Menu
    UI->>Logic: emit(OPEN_MENU_PANEL)
    Logic-->>Drawer: isMenuPanelOpen = true -> togglePopup(true)

    Player->>Drawer: Taps Paytable Button
    Drawer->>Logic: emit(OPEN_PAY_TABLE_PANEL)
    opt autoHideMenuPanel == true
        Drawer->>Logic: emit(CLOSE_MENU_PANEL)
    end
```
