---
id: "cc_slot_module:CutsceneController:methods:getDisplayCutscene"
title: "CutsceneController.getDisplayCutscene Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "getDisplayCutscene"]
---

# 📖 `CutsceneController.getDisplayCutscene()`

<!-- convention-summary-start -->
### CutsceneController.getDisplayCutscene Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController.getDisplayCutscene Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Returns the name string of the currently active cutscene node.

```typescript
public getDisplayCutscene(): string
```

---

## 2. Complete Source Code Implementation

```typescript
getDisplayCutscene(): string {
    this.cutScenes.forEach(cutScene => {
        if (cutScene.node.active) {
            return cutScene.name;
        }
    });

    return '';
}
```
