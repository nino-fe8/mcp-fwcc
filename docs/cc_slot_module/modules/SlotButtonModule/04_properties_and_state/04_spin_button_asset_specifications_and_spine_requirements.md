---
id: "cc_slot_module:SlotButtonModule:properties_and_state:spin_button_asset_specifications_and_spine_requirements"
title: "SlotButtonModule Asset Specifications & Spine State Bindings"
category: "cc_slot_module"
tags: ["SlotButtonModule", "spin_button_assets", "spine_requirements", "button_states", "sfx"]
---

# 🔘 SlotButtonModule Asset Specifications & Spine State Bindings

<!-- convention-summary-start -->
### SlotButtonModule Asset Specifications & Spine State Bindings Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule Asset Specifications & Spine State Bindings.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Asset Configuration Checklist for Spin Button

| Asset Component | Type | Assigned In Inspector | Key Requirements |
| :--- | :--- | :--- | :--- |
| **Spine Controller** | `SlotButtonSpine` | `spineBtn: SlotButtonSpine` | Contains animations: `normal_idle`, `normal_press`, `normal_hover`, `normal_disable`, `auto_spin`, `stop`, `turbo_active`. |
| **Normal State Sprite** | `cc.SpriteFrame` | `normalSprite` | Crisp resting state texture. |
| **Auto State Sprite** | `cc.SpriteFrame` | `autoSprite` | Active auto-spin badge overlay texture. |
| **Stop State Sprite** | `cc.SpriteFrame` | `stopSprite` | Active fast-stop square icon texture. |
| **Click Audio SFX** | `cc.AudioClip` | `soundPlayer` list | Bound to sound key `spin_click`. |
