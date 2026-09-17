---
id: "cc_slot_module:GameConfig:customization:override_points_matrix"
title: "GameConfig Properties Override Matrix"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "customization", "override_matrix", "properties", "TABLE_FORMAT", "CURRENCY_CONFIG"]
---

# 📊 GameConfig Properties Override Matrix

<!-- convention-summary-start -->
### GameConfig Properties Override Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameConfig Properties Override Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Properties Override Reference Table

| Property Name | Default SDK Value | Override Requirement | Downstream Consumers | Customization Purpose in New Game |
| :--- | :--- | :--- | :--- | :--- |
| **`GAME_ID`** | `"9864"` | `MANDATORY` | `GameInit`, IoC Scopes, Audio | Identifies the unique title in the platform. |
| **`JP_PREFIX_EVENT`**| `"9864_"` | `MANDATORY` | `JackpotModule`, Network | WebSocket channel prefix for jackpot pushes. |
| **`PAY_SYSTEM`** | `ALLWAYS` (`1`) | `MANDATORY` | `SlotTablePaylineData`, Bet | Payout calculation model (`ALLWAYS` vs `LINES`). |
| **`TOTAL_BET_CREDIT`**| `25` | `MANDATORY (if ALLWAYS)` | `BetModule`, `WalletModule` | Credit multiplier determining total bet step. |
| **`LINE_NUMBER`** | `25` | `MANDATORY (if LINES)` | `BetModule`, Paylines | Total payline count in line-based games. |
| **`TABLE_FORMAT`** | `[3, 3, 3, 3, 3]` | `MANDATORY` | `SlotTableModule` | Symbol row counts defining reel columns. |
| **`SYMBOL_WIDTH`** | `140` | `RECOMMENDED` | `SlotTableModule` | Reel cell horizontal spacing (px). |
| **`SYMBOL_HEIGHT`**| `160` | `RECOMMENDED` | `SlotTableModule` | Reel cell vertical spacing (px). |
| **`WIN_LEVEL_CONFIG`**| `{ THRESHOLDS: [1,5,10] }` | `RECOMMENDED` | `GameDataStore`, WinEffects | Win level ratios and count-up audio timings. |
| **`SYMBOL_CONFIG`** | `{ Wild: 1, Scatter: 2 }` | `RECOMMENDED` | `SlotSymbolManager` | Spine symbol layering and ID mappings. |
| **`CURRENCY_CONFIG`**| VND, USD, THB schema | `OPTIONAL` | `MoneyFormatter` | Multi-currency decimal rules and prefixes. |
| **`EXTEND_GAME_TEXT`**| `null` | `RECOMMENDED` | `GameText`, Dialogs | Custom text string localization per language. |
| **`USE_MOCKUP`** | `false` | `DEVELOPER ONLY` | `GameInit` | Rapid UI offline testing without live socket. |
