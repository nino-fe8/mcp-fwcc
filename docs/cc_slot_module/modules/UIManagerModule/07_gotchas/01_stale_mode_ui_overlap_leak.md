---
id: "cc_slot_module:UIManagerModule:gotchas:stale_mode_ui_overlap_leak"
title: "Gotcha: UI Overlap from Direct Node Activations"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "gotchas", "ui_overlap"]
---

# ⚠️ Gotcha: UI Overlap from Direct Node Activations

<!-- convention-summary-start -->
### Gotcha: UI Overlap from Direct Node Activations Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: UI Overlap from Direct Node Activations.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If a custom script directly modifies `normalSpinButton.active = true` without calling `UIManagerModule.updateGameModeUI(GAME_MODE_ENUM.NORMAL_GAME)`, previous elements (such as `freeSpinTimes` or `freeSpinButton`) may remain active, causing visual overlap and duplicate touch hits.

---

## 2. Prevention

Always route mode UI switches through `eventManager.emit(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, mode)` or `UIManagerModule.updateGameModeUI(mode)`.
