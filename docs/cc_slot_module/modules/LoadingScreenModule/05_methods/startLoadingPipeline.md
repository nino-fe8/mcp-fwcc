---
id: "cc_slot_module:LoadingScreenModule:methods:startLoadingPipeline"
title: "LoadingScreenModule.startLoadingPipeline Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "startLoadingPipeline"]
---

# 📖 `LoadingScreenModule.startLoadingPipeline()`

<!-- convention-summary-start -->
### LoadingScreenModule.startLoadingPipeline Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule.startLoadingPipeline Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
startLoadingPipeline(): void {
    const { IS_FINISHED_REMOTE } = environment.getConfig();
    if (IS_FINISHED_REMOTE) {
        this.redirectSceneName();
        this.addHomeEvent();
        this.startLoadScene();
    } else {
        setTimeout(() => {
            this.startLoadingPipeline();
        }, 100);
    }
}
```
