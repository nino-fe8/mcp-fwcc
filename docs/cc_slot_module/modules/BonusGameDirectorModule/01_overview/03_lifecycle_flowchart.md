---
id: "cc_slot_module:BonusGameDirectorModule:overview:lifecycle_flowchart"
title: "BonusGameDirectorModule Interactive Pick Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "overview", "lifecycle", "flowchart", "pick_game"]
---

# 🔄 BonusGameDirectorModule Interactive Pick Lifecycle Flowchart

<!-- convention-summary-start -->
### BonusGameDirectorModule Interactive Pick Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule Interactive Pick Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Interactive Selection State Machine Flowchart

```mermaid
graph TD
    Entry([enter: startBonusGame & startCountDown]) --> Wait[Wait for User Pick or Timer Expiry]
    
    Wait -->|User Clicks Chest| Manual[onClickItem: Stop Timer & Block UI]
    Wait -->|Timer Reaches 0| Auto[_runAutoTrigger: Emit AUTO_PLAY_BONUS_GAME]
    
    Manual --> Req[GameLogic: SEND_BONUS_GAME_REQUEST]
    Auto --> Req
    
    Req --> Rec[Server Returns Pick Result]
    Rec --> Open[_openItem / _openFinalItem]
    
    Open --> NextCheck{nextMode === BONUS_GAME?}
    NextCheck -->|Yes: Picks Remain| Loop[_unblockBonusGame & Restart Countdown]
    Loop --> Wait
    
    NextCheck -->|No: Feature Over| Settle[_openAllItems & _playFinalResultEffect]
    Settle --> Exit[exitGameMode -> RESET_BONUS_GAME -> Return to NormalGame]
```
