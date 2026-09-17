---
id: "cc_slot_module:CanvasModuleController:gotchas:widget_alignment_desync"
title: "CanvasModuleController Gotcha: UI Widgets Out of Alignment on Resize"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "gotchas", "widget_desync"]
---

# ⚠️ CanvasModuleController Gotcha: UI Widgets Out of Alignment on Resize

<!-- convention-summary-start -->
### CanvasModuleController Gotcha: UI Widgets Out of Alignment on Resize Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CanvasModuleController Gotcha: UI Widgets Out of Alignment on Resize.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Fix
If critical UI widgets (e.g. Spin Button, Bet panel) do not reflow on window resize, add their `cc.Widget` components to `widgetNodes` in the Inspector so the wrapper forces `widget.updateAlignment()` on every resize tick.
