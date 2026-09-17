---
id: "cc_slot_module:PayTablePanel:overview:lifecycle_flowchart"
title: "PayTablePanel Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 PayTablePanel Lifecycle Flowchart

<!-- convention-summary-start -->
### PayTablePanel Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PayTablePanel Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Paytable Scroll Flow

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Menu as MenuPanel
    participant Logic as GameLogic
    participant Panel as PayTablePanel

    Player->>Menu: Clicks Paytable
    Menu->>Logic: emit(OPEN_PAY_TABLE_PANEL)
    Logic-->>Panel: observer -> showPayTablePanel(true)
    Panel->>Panel: scrollView.scrollToTop(0)
    Panel->>Panel: togglePopup(true)
```
