---
id: "cc_slot_module:WinAmountTooltipModule:gotchas:index"
title: "WinAmountTooltipModule Gotchas Index"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ WinAmountTooltipModule Gotchas Index

<!-- convention-summary-start -->
### WinAmountTooltipModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `01_infinite_tween_leak_on_destroy.md`
- **Related Docs**: [`01_infinite_tween_leak_on_destroy`](01_infinite_tween_leak_on_destroy.md)
<!-- convention-summary-end -->


---

## 1. Gotchas Table

| Gotcha | Problem Summary |
| :--- | :--- |
| [`01_infinite_tween_leak_on_destroy`](01_infinite_tween_leak_on_destroy.md) | Self-recursive showText tweens continue firing in background if stopAllTweens is omitted in onDestroy. |
