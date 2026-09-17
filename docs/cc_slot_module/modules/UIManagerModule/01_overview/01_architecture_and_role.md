---
id: "cc_slot_module:UIManagerModule:overview:architecture_and_role"
title: "UIManagerModule Architectural Role & Master GUI Orchestration"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "overview", "architecture", "hud_master"]
---

# 🏛️ UIManagerModule Architectural Role & Master GUI Orchestration

<!-- convention-summary-start -->
### UIManagerModule Architectural Role & Master GUI Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Architectural Role & Master GUI Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Architectural Mission

`UIManagerModule` serves as the master coordinator for all player-facing HUD controls, betting controls, wallet counters, jackpot headers, and spin buttons mounted under `Canvas/Director/UIManager`. It translates game mode shifts (`GAME_MODE_ENUM`) into instant, atomic UI layout reconfigurations and enforces modal input blocking.

```mermaid
graph TD
    Director[GameModeDirector] -->|UPDATE_GAME_MODE_UI| UIM[UIManagerModule]
    Observer[UIManagerData / PromotionData] -->|Reactive State Watches| UIM
    
    UIM -->|showNormalGameUI()| NormalHUD[Normal Spin Button, Bet, ExtraBet, Wallet, WinAmount, Turbo, BuyFeature, NormalPayline]
    UIM -->|showFreeGameUI()| FreeHUD[Free Spin Button, Free Spin Times Badge, FreePayline, Locked Bet, Turbo]
    UIM -->|showJackpotUI()| JackpotHUD[Jackpot or TrialJackpot based on isTrialMode]
    UIM -->|checkDisplayPopup()| InputGuard[Blocks Spacebar when Popup or Cutscene active]
```

---

## 2. Key Responsibilities

1. **Contextual Game Mode Layouts (`updateGameModeUI`)**:
   - Deactivates all HUD elements and reactivates mode-specific controls atomically.
2. **Trial vs Real Currency Switching (`onSwitchMode`)**:
   - Toggles jackpot headers and isolates real currency from trial demo credits.
3. **Modal Input Interception (`checkDisplayPopup`)**:
   - Aggregates visibility from `PopupControllerModule` and `CutsceneController` to block keyboard shortcuts during modal presentations.
