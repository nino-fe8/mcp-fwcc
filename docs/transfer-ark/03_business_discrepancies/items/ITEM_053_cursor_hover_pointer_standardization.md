---
id: "transfer-ark:discrepancy:item_053_cursor_hover_pointer_standardization"
title: "Item #53: Mouse Cursor Hover Pointer Styling Standardization"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["DesktopAdapter", "SlotButtonNormal"]
tags: ["discrepancy_item_53", "cursor", "pointer", "desktop", "hover", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #53: Mouse Cursor Hover Pointer Styling Standardization

<!-- convention-summary-start -->
### Mouse Cursor Hover Pointer Styling Standardization Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #53: Mouse Cursor Hover Pointer Styling Standardization.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#53` in `Compare Cocos vs Pixijs.xlsx` (Section 4: Popups, Settings, Audio & Network)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Mouse Cursor on Hover** | Switches to Hand Pointer icon for active buttons, Default Arrow for disabled buttons. | Uniform default pointer styling across all clickable areas without custom hand icons. | **Theo Ref**: Retain standard cursor behavior without custom OS override conflicts. |
