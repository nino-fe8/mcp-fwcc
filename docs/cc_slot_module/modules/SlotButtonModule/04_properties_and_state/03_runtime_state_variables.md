---
id: "cc_slot_module:SlotButtonModule:properties_and_state:runtime_state_variables"
title: "SlotButtonModule & Subclasses Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "SlotButtonSpine", "SlotButtonSprite", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotButtonModule & Subclasses Runtime State Variables

<!-- convention-summary-start -->
### SlotButtonModule & Subclasses Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule & Subclasses Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Base Class: `SlotButtonModule` Runtime Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `touchNode` | `cc.Node` | `null` | Resolved touch area node (`spinButtonTouch` or `display`). |
| `modelName` | `string` | `"SpinButton"`| Key used to retrieve reactive data model from `GameLogic`. |
| `buttonModel` | `any` | `null` | Observed reactive data model instance. |

---

## 2. Specialized Subclass: `SlotButtonNormal` Runtime Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `uiManagerModel` | `eno.UIManagerData` | `null` | Observed UI manager data model (`isSwitchingMode`). |
| `promotionDataModel` | `eno.PromotionData` | `null` | Observed promotional campaign data model (`isActive`). |
| `_isSwitchingMode` | `boolean` | `false` | Gate preventing spin clicks during game mode transitions. |
| `isHold` | `boolean` | `false` | Gate flag indicating active auto spin hold gesture. |
| `hasPromotion` | `boolean` | `false` | Flag suppressing auto-spin during promotional rounds. |
| `holdAction` | `Function` | `null` | Active scheduled timer callback for auto-spin hold detection. |
| `state` | `number` | `0` | Cached `SPIN_BUTTON_STATE_ENUM` integer state. |

---

## 3. View Renderers (`SlotButtonSpine` / `SlotButtonSprite`) Runtime Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `isOnHover` | `boolean` | `false` | Tracks desktop mouseover state. |
| `isAutoSpin` | `boolean` | `false` | Tracks active auto-spin animation state. |
| `lastState` | `number` | `NORMAL` | Previous state cached for transition comparison. |
| `buttonSprite` | `cc.Sprite` | `null` | Resolved sprite component on `SlotButtonSprite`. |
