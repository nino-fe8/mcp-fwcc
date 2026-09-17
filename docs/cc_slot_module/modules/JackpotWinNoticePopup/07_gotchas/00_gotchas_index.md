---
id: "cc_slot_module:JackpotWinNoticePopup:gotchas:index"
title: "JackpotWinNoticePopup Gotchas Index"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ JackpotWinNoticePopup Gotchas Index

<!-- convention-summary-start -->
### JackpotWinNoticePopup Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `01_unscheduled_callback_leak_on_destroy.md`
- **Related Docs**: [`01_unscheduled_callback_leak_on_destroy`](01_unscheduled_callback_leak_on_destroy.md)
<!-- convention-summary-end -->


---

## 1. Gotchas Table

| Gotcha | Problem Summary |
| :--- | :--- |
| [`01_unscheduled_callback_leak_on_destroy`](01_unscheduled_callback_leak_on_destroy.md) | Orphaned scheduleOnce callbacks fire after scene unload causing null reference errors. |
