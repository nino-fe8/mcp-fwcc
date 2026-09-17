---
id: "cc_slot_module:CanvasModuleController:recipes:custom_resolution_setup"
title: "Recipe: Custom Design Resolution Setup for Wide Tablet Screens"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "recipes", "custom_resolution"]
---

# 💡 Recipe: Custom Design Resolution Setup for Wide Tablet Screens

<!-- convention-summary-start -->
### Recipe: Custom Design Resolution Setup for Wide Tablet Screens Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom Design Resolution Setup for Wide Tablet Screens.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Configuration
Set `useCustomDesignResolution = true`, `customDSWidth = 1920`, `customDSHeight = 1080` on the Canvas component to support high-DPI desktop and tablet layouts without asset distortion.
