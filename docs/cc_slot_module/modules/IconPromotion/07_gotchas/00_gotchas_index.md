---
id: "cc_slot_module:IconPromotion:gotchas:index"
title: "IconPromotion Gotchas Index"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ IconPromotion Gotchas Index

<!-- convention-summary-start -->
### IconPromotion Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IconPromotion Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_promotional_state_observer_leak.md`, `./02_promotional_badge_occlusion.md`
- **Related Docs**: [`01_promotional_state_observer_leak`](./01_promotional_state_observer_leak.md), [`02_promotional_badge_occlusion`](./02_promotional_badge_occlusion.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_promotional_state_observer_leak`](./01_promotional_state_observer_leak.md)** | Unreleased Observer on PromotionData | HIGH | Failing to call `releaseAll` in `onDestroy()` leaks observer callbacks on reload. |
| **[`02_promotional_badge_occlusion`](./02_promotional_badge_occlusion.md)** | UI Layer Occlusion | MEDIUM | Placing promotional icons under reel layers causes visual clipping during active rounds. |
