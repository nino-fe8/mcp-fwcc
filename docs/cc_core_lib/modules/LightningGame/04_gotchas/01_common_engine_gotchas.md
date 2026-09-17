---
id: "cc_core_lib:LightningGame:gotchas:common"
title: "LightningGame Engine Gotchas & Troubleshooting"
category: "cc_core_lib"
tags: ["LightningGame", "lightning_game", "cc_core_lib", "gotchas", "troubleshooting"]
---

# ⚠️ `LightningGame` Engine Gotchas & Troubleshooting

<!-- convention-summary-start -->
### LightningGame Engine Gotchas & Troubleshooting Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LightningGame Engine Gotchas & Troubleshooting.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 04_gotchas
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Gotcha: Memory Leaks on Fast Re-Spin & Scene Teardown
- **Symptom**: Memory consumption increases continuously or orphaned callback handles execute after scene unload.
- **Root Cause**: Uncancelled tweens, timers, or event listeners retaining references to detached `cc.Node` objects.
- **Fix**: Always invoke explicit cleanup methods (e.g. `destroy()`, `stopAllTweens()`, or `unscheduleAll()`) inside `onDestroy()`.

---

## 2. Gotcha: Unhandled Asynchronous Pipeline Interruption
- **Symptom**: Game table freezes during fast-stop or skip click.
- **Root Cause**: A Promise within the execution chain never resolved because the target animation was skipped abruptly.
- **Fix**: Ensure all action scripts wrap async calls in timeout protection or listen for `FAST_STOP` events.
