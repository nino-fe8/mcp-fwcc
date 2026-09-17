---
id: "cc_slot_module:BetHistoryModule:overview:lifecycle_flowchart"
title: "BetHistoryModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 BetHistoryModule Lifecycle Flowchart

<!-- convention-summary-start -->
### BetHistoryModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Modal Lifecycle Sequence

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Setting as SettingPanel
    participant Logic as GameLogic (EventBus)
    participant Module as BetHistoryModule
    participant Data as BetHistoryData (Model)
    participant Detail as BetHistoryDetailModule

    Player->>Setting: Clicks "Bet History"
    Setting->>Logic: emit(OPEN_BET_HISTORY_PANEL)
    Logic->>Data: isShowing = true
    Data-->>Module: Observer triggered (showContent)
    Module->>Module: togglePopup(true) -> popupBehavior.showPopup()
    Module->>Logic: emit(INIT_BET_HISTORY, { itemPerPage: 5 })
    Logic->>Logic: Request HTTP/WS history payload
    Data-->>Module: isEnableLoading = true -> Spinner ON
    Logic-->>Data: Ingest payload -> recordData = [...]
    Data-->>Module: recordData updated -> onRecordDataChange()
    Module->>Module: recordView.emit("UPDATE_DATA", records)
    
    opt Player opens detail round
        Player->>Module: Clicks session row
        Module->>Logic: emit(OPEN_BET_HISTORY_DETAIL_PANEL, rowData)
        Logic->>Data: isShowingDetail = true
        Data-->>Module: onShowingDetail(true)
        Module->>Detail: detailView.emit("INIT_DETAIL_VIEW", detailData)
    end

    Player->>Module: Clicks Close Button
    Module->>Logic: emit(CLOSE_BET_HISTORY_PANEL)
    Logic->>Data: isShowing = false
    Data-->>Module: togglePopup(false) -> popupBehavior.hidePopup()
```
