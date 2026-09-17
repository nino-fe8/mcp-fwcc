---
id: "cc_slot_module:systems:portrait_mobile_ui:vertical_paytable"
title: "Vertical Paytable & Symbol Payout Viewer"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "paytable_panel", "symbol_paytable_viewer", "vertical_scroll"]
---

# 📖 Vertical Paytable & Symbol Payout Viewer

<!-- convention-summary-start -->
### Vertical Paytable & Symbol Payout Viewer Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Vertical Paytable & Symbol Payout Viewer.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 10_portrait_mobile_ui_experience_system
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Continuous Vertical Scroll
`PayTablePanel` replaces multi-page horizontal book layouts with a fluid, momentum-scrolled vertical layout optimized for touch scrolling.

## 2. Interactive Symbol Inspector (`SymbolPaytableViewer`)
Tapping any symbol in the paytable or table matrix displays an interactive popup detailing its payout multiplier curve ($3\times, 4\times, 5\times$) and feature mechanics.
