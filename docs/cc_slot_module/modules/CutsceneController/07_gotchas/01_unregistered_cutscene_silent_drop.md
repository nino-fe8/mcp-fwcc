---
id: "cc_slot_module:CutsceneController:gotchas:unregistered_cutscene_silent_drop"
title: "Gotcha: Unregistered cutsceneType Silently Resolves Without Display"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "gotchas", "unregistered_type", "silent_fail"]
---

# ⚠️ Gotcha: Unregistered `cutsceneType` Silently Resolves Without Display

<!-- convention-summary-start -->
### Gotcha: Unregistered cutsceneType Silently Resolves Without Display Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Unregistered cutsceneType Silently Resolves Without Display.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `CutsceneController.playCutScene()`:
```typescript
playCutScene({ cutsceneType, cutsceneData }): Promise<void> {
    return new Promise((resolve) => {
        if (this.cutScenes.has(cutsceneType)) {
            this.cutScenes.get(cutsceneType).play(cutsceneData, () => {
                resolve();
            });
        } else {
            resolve();
        }
    });
}
```
If a custom cutscene was not added as a child or has its `cutsceneType` misconfigured, `this.cutScenes.has(cutsceneType)` returns `false`. Instead of logging an error, it silently executes `resolve()`, causing the cutscene to be skipped without developer feedback.

---

## 2. Solution

Add defensive warnings during development or override `playCutScene()` to throw a warning in debug builds.
