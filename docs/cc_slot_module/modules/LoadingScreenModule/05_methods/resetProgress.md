---
id: "cc_slot_module:LoadingScreenModule:methods:resetProgress"
title: "LoadingScreenModule.resetProgress Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "resetProgress"]
---

# 📖 `LoadingScreenModule.resetProgress()`

<!-- convention-summary-start -->
### LoadingScreenModule.resetProgress Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule.resetProgress Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
resetProgress(): void {
    this.progressBar && (this.progressBar.progress = 0);
    this.progressLabel && (this.progressLabel.string = '0%');
}
```
