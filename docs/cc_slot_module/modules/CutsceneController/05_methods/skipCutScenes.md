---
id: "cc_slot_module:CutsceneController:methods:skipCutScenes"
title: "CutsceneController.skipCutScenes Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "skipCutScenes"]
---

# 📖 `CutsceneController.skipCutScenes()`

<!-- convention-summary-start -->
### CutsceneController.skipCutScenes Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController.skipCutScenes Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Iterates through all registered cutscenes and invokes `skip()` on each.

```typescript
public skipCutScenes(): void
```

---

## 2. Complete Source Code Implementation

```typescript
skipCutScenes(): void {
    this.cutScenes.forEach(cutScene => cutScene.skip());
}
```
