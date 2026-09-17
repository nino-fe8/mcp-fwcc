---
id: "cc_slot_module:systems:popups_history_settings:modal_queue"
title: "Modal Queue & Popup Controller Architecture"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "popup_controller", "base_ui_popup", "modal_queue", "input_blocking"]
---

# 🪟 Modal Queue & Popup Controller Architecture

<!-- convention-summary-start -->
### Modal Queue & Popup Controller Architecture Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Modal Queue & Popup Controller Architecture.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_popups_history_settings_system
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Architectural Role

`PopupControllerModule` mounted at `Canvas/Director/Popup` orchestrates all fullscreen and floating modal dialogs in the slot game. It provides:
- Single-popup exclusivity or FIFO queue management.
- Dynamic semi-transparent backdrop creation with touch interception (`cc.BlockInputEvents`).
- Standardized scale-in ($0.3\text{s}$ `backOut`) and scale-out ($0.2\text{s}$ `sineIn`) tween animations.
- Integration with `BaseUIPopup` lifecycle hooks (`show()`, `hide()`, `onShowCompleted()`, `onHideCompleted()`).

---

## 2. Modal Presentation Sequence

```mermaid
sequenceDiagram
    participant UI as UIManager / Button
    participant Ctrl as PopupControllerModule
    participant Popup as BaseUIPopup (e.g. SettingPanel)
    participant Mask as Dark Mask (BlockInputEvents)

    UI->>Ctrl: showPopup(SettingPanel)
    Ctrl->>Mask: Set active = true, opacity tween to 180
    Ctrl->>Popup: show()
    Popup->>Popup: node.active = true, scale = 0.5
    Popup->>Popup: cc.tween scale to 1.0 (backOut)
    Popup-->>Ctrl: onShowCompleted()
    
    UI->>Popup: closeBtn clicked
    Popup->>Popup: cc.tween scale to 0.0 (sineIn)
    Popup-->>Ctrl: onHideCompleted()
    Ctrl->>Mask: opacity tween to 0 -> active = false
    Ctrl->>Popup: node.active = false
```
