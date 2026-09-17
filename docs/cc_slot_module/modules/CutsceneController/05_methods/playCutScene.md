---
id: "cc_slot_module:CutsceneController:methods:playCutScene"
title: "CutsceneController.playCutScene Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "playCutScene", "promise"]
---

# 📖 `CutsceneController.playCutScene()`

<!-- convention-summary-start -->
### CutsceneController.playCutScene Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController.playCutScene Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Looks up target cutscene by enum and returns a `Promise<void>` that resolves when the cutscene exits.

```typescript
public playCutScene({ cutsceneType, cutsceneData }): Promise<void>
```

---

## 2. Complete Source Code Implementation

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
