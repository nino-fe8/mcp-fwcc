---
id: "cc_slot_module:UIManagerModule:gotchas:blocking_popup_keyboard_leak"
title: "Gotcha: Spacebar Trigger During Cutscenes"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "gotchas", "spacebar_leak"]
---

# ⚠️ Gotcha: Spacebar Trigger During Cutscenes

<!-- convention-summary-start -->
### Gotcha: Spacebar Trigger During Cutscenes Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Spacebar Trigger During Cutscenes.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

When `SlotButtonModule.onKeyUp()` processes a Spacebar tap, if `UIManagerModule.checkDisplayPopup()` fails to check `CutsceneController.isDisplayCutscene()`, the player can spin the reels underneath a fullscreen Big Win animation.

---

## 2. Prevention

`UIManagerModule.checkDisplayPopup()` aggregates popup, cutscene, and visibility checks before allowing spacebar triggers.
