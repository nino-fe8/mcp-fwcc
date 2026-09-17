---
id: "cc_slot_module:MenuPanel:properties:inspector_properties"
title: "MenuPanel Inspector Properties"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ MenuPanel Inspector Properties

<!-- convention-summary-start -->
### MenuPanel Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Properties Table

| Property | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `musicOff` | `cc.Node` | `null` | BGM muted icon. |
| `musicOn` | `cc.Node` | `null` | BGM active icon. |
| `sfxOff` | `cc.Node` | `null` | SFX muted icon. |
| `sfxOn` | `cc.Node` | `null` | SFX active icon. |
| `buttonLayout` | `cc.Layout`| `null` | Layout managing drawer button distribution. |
| `spacingX` | `number` | `8` | Spacing offset for iframe modes. |
| `autoHideMenuPanel`| `boolean` | `false` | If true, closes drawer when a sub-panel opens. |
