---
id: "cc_slot_module:CutsceneController:methods:closeAllNotices"
title: "CutsceneController.closeAllNotices Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "closeAllNotices"]
---

# 📖 `CutsceneController.closeAllNotices()`

<!-- convention-summary-start -->
### CutsceneController.closeAllNotices Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController.closeAllNotices Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits `CLOSE_NOTICE` on all registered cutscene nodes.

```typescript
public closeAllNotices(): void
```

---

## 2. Complete Source Code Implementation

```typescript
closeAllNotices(): void {
    this.cutScenes.forEach(cutScene => {
        cutScene.node.emit("CLOSE_NOTICE");
    });
}
```
