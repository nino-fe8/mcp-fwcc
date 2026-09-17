---
id: "cc_slot_module:LoadingScreenModule:methods:onLoad"
title: "LoadingScreenModule.onLoad Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `LoadingScreenModule.onLoad()`

<!-- convention-summary-start -->
### LoadingScreenModule.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
    if (this.sceneName === '') {
        return;
    }
    this.resetProgress();
    this.updatedScene = this.sceneName;
    this.loadHistory = false;
    this.startLoadingPipeline();
}
```
