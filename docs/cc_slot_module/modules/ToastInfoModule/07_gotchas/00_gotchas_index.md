---
id: "cc_slot_module:ToastInfoModule:gotchas:index"
title: "ToastInfoModule Gotchas Index"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ ToastInfoModule Gotchas Index

<!-- convention-summary-start -->
### ToastInfoModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ToastInfoModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_rapid_toast_tween_conflict.md`, `./02_unstopped_toast_tween_on_destroy.md`
- **Related Docs**: [`01_rapid_toast_tween_conflict`](./01_rapid_toast_tween_conflict.md), [`02_unstopped_toast_tween_on_destroy`](./02_unstopped_toast_tween_on_destroy.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_rapid_toast_tween_conflict`](./01_rapid_toast_tween_conflict.md)** | Overlapping Scale Tweens on Rapid Alerts | HIGH | Arriving messages must explicitly stop previous `_tweenToast` handles to prevent scale jitter. |
| **[`02_unstopped_toast_tween_on_destroy`](./02_unstopped_toast_tween_on_destroy.md)** | Unstopped Tween Callback on Destroy | MEDIUM | Failing to stop tweens before node removal throws callback errors during scene destruction. |
