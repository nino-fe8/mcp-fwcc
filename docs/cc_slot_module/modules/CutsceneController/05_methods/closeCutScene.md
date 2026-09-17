---
id: "cc_slot_module:CutsceneController:methods:closeCutScene"
title: "CutsceneController.closeCutScene Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "closeCutScene"]
---

# 📖 `CutsceneController.closeCutScene()`

<!-- convention-summary-start -->
### CutsceneController.closeCutScene Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController.closeCutScene Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Explicitly forces closure of a specified cutscene and returns a `Promise<void>`.

```typescript
public closeCutScene({ cutsceneType, cutsceneData }): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
closeCutScene({ cutsceneType, cutsceneData }): Promise<void> {
    return new Promise((resolve) => {
        if (this.cutScenes.has(cutsceneType)) {
            this.cutScenes.get(cutsceneType).exit(cutsceneData, () => {
                resolve();
            });
        } else {
            resolve();
        }
    });
}
```
