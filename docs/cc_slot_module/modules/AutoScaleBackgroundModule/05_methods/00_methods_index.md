---
id: "cc_slot_module:AutoScaleBackgroundModule:methods:methods_index"
title: "AutoScaleBackgroundModule Methods Master Index"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "methods", "index"]
---

# 📖 AutoScaleBackgroundModule Methods Master Index

<!-- convention-summary-start -->
### AutoScaleBackgroundModule Methods Master Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoScaleBackgroundModule Methods Master Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods

| Method | Scope | Description |
| :--- | :--- | :--- |
| **`onLoad()`** | `void` | Binds resize listeners on window or `cc.view`. |
| **`start()`** | `void` | Triggers initial scaling calculation. |
| **`scaleCanvasByOrientation()`** | `void` | Computes ratioW and ratioH to apply cover scale. |
| **`onDestroy()`** | `void` | Removes bound resize listeners. |
| **`onScreenResized()`** | `void` | Handler invoked on screen resize events. |
