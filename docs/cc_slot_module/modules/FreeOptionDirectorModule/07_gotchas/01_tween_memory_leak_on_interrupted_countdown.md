---
id: "cc_slot_module:FreeOptionDirectorModule:gotcha:tween_memory_leak_on_interrupted_countdown"
title: "Gotcha: Repeating Tween Timer Leak Across Scene Transitions"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "gotchas", "tween", "memory_leak"]
---

# ⚠️ Gotcha: Repeating Tween Timer Leak Across Scene Transitions

<!-- convention-summary-start -->
### Gotcha: Repeating Tween Timer Leak Across Scene Transitions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Repeating Tween Timer Leak Across Scene Transitions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
`_repeatCountDown` tween callbacks continue ticking in the background, logging errors against destroyed label components.

---

## 2. Root Cause Analysis
`repeatForever()` tweens are managed by Cocos TweenManager and persist until explicitly stopped.

---

## 3. Recommended Resolution
Always invoke `stopCountDown()` inside `optionClick()`, `_runAutoTrigger()`, and `onDestroy()`.
