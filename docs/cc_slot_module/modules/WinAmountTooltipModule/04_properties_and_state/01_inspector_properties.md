---
id: "cc_slot_module:WinAmountTooltipModule:properties:inspector_properties"
title: "WinAmountTooltipModule Inspector Properties"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ WinAmountTooltipModule Inspector Properties

<!-- convention-summary-start -->
### WinAmountTooltipModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Properties Table

| Property | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `featureSprite` | `cc.Sprite` | `null` | Sprite displaying moving feature tip art. |
| `featureSfs` | `CustomFeatureText[]`| `[]` | Array of feature tip sprite frames and pixel widths. |
| `winTextSprite` | `cc.Sprite` | `null` | Header sprite showing "WIN" or "TOTAL WIN". |
| `winTextSpriteFrame`| `cc.SpriteFrame` | `null` | "WIN" title sprite frame. |
| `totalWinTextSpriteFrame`| `cc.SpriteFrame`| `null` | "TOTAL WIN" title sprite frame. |
| `fadeTime` | `number` | `0.5` | Fade transition time. |
| `delayTime` | `number` | `1.5` | Center hold duration. |
| `movingTime` | `number` | `5` | Horizontal sliding duration. |
