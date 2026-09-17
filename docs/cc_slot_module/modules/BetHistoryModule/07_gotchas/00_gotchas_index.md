---
id: "cc_slot_module:BetHistoryModule:gotchas:index"
title: "BetHistoryModule Gotchas Index"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BetHistoryModule Gotchas Index

<!-- convention-summary-start -->
### BetHistoryModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `01_missing_observer_release_leak.md`, `02_double_popup_open_during_animation.md`
- **Related Docs**: [`01_missing_observer_release_leak`](01_missing_observer_release_leak.md), [`02_double_popup_open_during_animation`](02_double_popup_open_during_animation.md)
<!-- convention-summary-end -->


---

## 1. Engine Gotchas Summary

| Gotcha Slug | Severity | Problem Summary |
| :--- | :--- | :--- |
| [`01_missing_observer_release_leak`](01_missing_observer_release_leak.md) | High | Failing to release observers in onDestroy leaks component callbacks across scene reloads. |
| [`02_double_popup_open_during_animation`](02_double_popup_open_during_animation.md) | Medium | Clicking close or next while popup tween is playing causes animation desync. |
