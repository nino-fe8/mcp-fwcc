---
id: "cc_slot_module:CutsceneController:methods:makeCutSceneList"
title: "CutsceneController.makeCutSceneList Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "makeCutSceneList"]
---

# 📖 `CutsceneController.makeCutSceneList()`

<!-- convention-summary-start -->
### CutsceneController.makeCutSceneList Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController.makeCutSceneList Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Discovers all child `BaseCutscene` components and hydrates the `this.cutScenes` map.

```typescript
public makeCutSceneList(): void
```

---

## 2. Complete Source Code Implementation

```typescript
makeCutSceneList(): void {
    this.cutScenes.clear();
    if (this.cutsceneList.length > 0) {
        this.cutsceneList.forEach(cutsceneMode => {
            cutsceneMode.init();
            this.cutScenes.set(cutsceneMode.cutsceneType, cutsceneMode);
        });
    } else {
        const cutSceneModes = this.node.getComponentsInChildren(BaseCutscene);
        cutSceneModes.forEach(cutSceneMode => {
            if (cutSceneMode) {
                cutSceneMode.init();
                this.cutScenes.set(cutSceneMode.cutsceneType, cutSceneMode);
            }
        });
    }
}
```
