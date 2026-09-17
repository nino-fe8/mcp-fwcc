---
id: "cc_slot_module:LoadingScreenModule:gotchas:stuck_at_99_percent"
title: "LoadingScreenModule Gotcha: Progress Bar Hanging at 99%"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "gotchas", "progress_hang"]
---

# ⚠️ LoadingScreenModule Gotcha: Progress Bar Hanging at 99%

<!-- convention-summary-start -->
### LoadingScreenModule Gotcha: Progress Bar Hanging at 99% Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule Gotcha: Progress Bar Hanging at 99%.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Cause
If `preloadScene` completes while the visual catch-up tween in `update()` has not caught up to 1.0, the bar may appear stuck at 99% until scene launch.

## 2. Fix
`setProgressFull(delay, callback)` forcibly animates `CurrentProgress` to `1.0` using `easing: "sineIn"` and updates the label to "100%" before calling `director.loadScene()`.
