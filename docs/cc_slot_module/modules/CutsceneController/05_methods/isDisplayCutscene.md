---
id: "cc_slot_module:CutsceneController:methods:isDisplayCutscene"
title: "CutsceneController.isDisplayCutscene Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "isDisplayCutscene"]
---

# 📖 `CutsceneController.isDisplayCutscene()`

<!-- convention-summary-start -->
### CutsceneController.isDisplayCutscene Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController.isDisplayCutscene Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Returns true if any registered cutscene with `fullDisplay = true` is currently active.

```typescript
public isDisplayCutscene(): boolean
```

---

## 2. Complete Source Code Implementation

```typescript
isDisplayCutscene(): boolean {
    let isDisplay = false;
    this.cutScenes.forEach(cutScene => {
        if (cutScene.node.active && cutScene.fullDisplay) {
            isDisplay = true;
        }
    });

    return isDisplay;
}
```
