---
id: "cc_slot_module:AutoScaleBackgroundModule:gotchas:window_listener_leak"
title: "AutoScaleBackgroundModule Gotcha: Window Resize Listener Leak"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "gotchas", "memory_leak"]
---

# ⚠️ AutoScaleBackgroundModule Gotcha: Window Resize Listener Leak

<!-- convention-summary-start -->
### AutoScaleBackgroundModule Gotcha: Window Resize Listener Leak Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoScaleBackgroundModule Gotcha: Window Resize Listener Leak.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Solution
Always store `this._thisOnResized = this.onScreenResized.bind(this)` and call `window.removeEventListener('resize', this._thisOnResized)` inside `onDestroy()`.
