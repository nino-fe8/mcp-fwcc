---
id: "cc_slot_module:WaitingSceneModule:gotchas:observer_leak"
title: "WaitingSceneModule Gotcha: Dangling Observer Reference"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "gotchas", "observer_leak"]
---

# ⚠️ WaitingSceneModule Gotcha: Dangling Observer Reference

<!-- convention-summary-start -->
### WaitingSceneModule Gotcha: Dangling Observer Reference Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WaitingSceneModule Gotcha: Dangling Observer Reference.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Solution
Always invoke `this.observer.releaseAll(this.waitingSceneData, this)` in `onDestroy()` to prevent callbacks executing on destroyed nodes.
