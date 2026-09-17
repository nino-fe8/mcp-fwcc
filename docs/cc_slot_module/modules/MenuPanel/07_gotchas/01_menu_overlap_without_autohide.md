---
id: "cc_slot_module:MenuPanel:gotchas:01_menu_overlap_without_autohide"
title: "Menu Overlap Without AutoHide"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "gotchas", "autohide"]
---

# ⚠️ Menu Overlap Without AutoHide

<!-- convention-summary-start -->
### Menu Overlap Without AutoHide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Menu Overlap Without AutoHide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Solution

Set `autoHideMenuPanel = true` in the Inspector to automatically close the hamburger drawer when opening sub-modals like PayTable or Bet History.
