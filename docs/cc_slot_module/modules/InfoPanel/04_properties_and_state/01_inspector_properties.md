---
id: "cc_slot_module:InfoPanel:properties:inspector_properties"
title: "InfoPanel Inspector Properties"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ InfoPanel Inspector Properties

<!-- convention-summary-start -->
### InfoPanel Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Properties Table

| Property | Type | Purpose |
| :--- | :--- | :--- |
| `nextBtn` | `cc.Button` | Next page button. |
| `preBtn` | `cc.Button` | Previous page button. |
| `infoTitle` | `cc.Sprite` | Top header title sprite. |
| `titles` | `cc.SpriteFrame[]`| Array of title sprites corresponding to each page index. |
| `pageView` | `cc.PageView` | Landscape multi-page view container. |
| `scrollView` | `cc.ScrollView`| Portrait vertical scroll container. |
