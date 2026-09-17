---
id: "cc_slot_module:WinAmountModule:gotchas:unstopped_fade_tween_leak"
title: "Gotcha: Interrupted Fade-Out Opacity Lock"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "gotchas", "tween_fade"]
---

# ⚠️ Gotcha: Interrupted Fade-Out Opacity Lock

<!-- convention-summary-start -->
### Gotcha: Interrupted Fade-Out Opacity Lock Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Interrupted Fade-Out Opacity Lock.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If a fast respin triggers `updateWinAmount` while a previous `fadeOutNumber` tween is active, failing to stop `_tweenFade` causes the onComplete callback to execute and zero opacity on the new count-up.

---

## 2. Prevention

`_resetLabel()` and `updateWinAmount()` automatically halt `_tweenFade` and reset opacity to 255 before launching new count-ups.
