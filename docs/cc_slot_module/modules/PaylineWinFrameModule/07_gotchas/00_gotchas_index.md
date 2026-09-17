---
id: "cc_slot_module:PaylineWinFrameModule:gotchas:index"
title: "PaylineWinFrameModule Engine Gotchas Index"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PaylineWinFrameModule Engine Gotchas Index

<!-- convention-summary-start -->
### PaylineWinFrameModule Engine Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule Engine Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_unpooled_winframe_instantiation_lag.md`
- **Related Docs**: [`01_unpooled_winframe_instantiation_lag.md`](./01_unpooled_winframe_instantiation_lag.md)
<!-- convention-summary-end -->


---

## 1. Known Gotchas Summary

| Gotcha Document | Symptom | Severity | Engine Subsystem |
| :--- | :--- | :--- | :--- |
| **[`01_unpooled_winframe_instantiation_lag.md`](./01_unpooled_winframe_instantiation_lag.md)** | Frame drop during Big Win due to continuous `instantiate(this.template)` calls. | `MEDIUM` | Memory / GC |
