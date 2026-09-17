---
id: "cc_slot_module:BetHistoryDetailModule:gotchas:index"
title: "BetHistoryDetailModule Gotchas Index"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BetHistoryDetailModule Gotchas Index

<!-- convention-summary-start -->
### BetHistoryDetailModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `01_node_pool_leak_on_repeated_reopen.md`, `02_scrollview_offset_negative_bounce.md`
- **Related Docs**: [`01_node_pool_leak_on_repeated_reopen`](01_node_pool_leak_on_repeated_reopen.md), [`02_scrollview_offset_negative_bounce`](02_scrollview_offset_negative_bounce.md)
<!-- convention-summary-end -->


---

## 1. Engine Gotchas Summary

| Gotcha Slug | Severity | Problem Summary |
| :--- | :--- | :--- |
| [`01_node_pool_leak_on_repeated_reopen`](01_node_pool_leak_on_repeated_reopen.md) | High | Unreturned scroll items create unbounded NodePool allocation when opening multiple detail views. |
| [`02_scrollview_offset_negative_bounce`](02_scrollview_offset_negative_bounce.md) | Medium | ScrollView scroll offset calculation without clamping causes elastic overshoot on low step counts. |
