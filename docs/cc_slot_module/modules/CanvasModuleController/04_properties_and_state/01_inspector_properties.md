---
id: "cc_slot_module:CanvasModuleController:properties:inspector_properties"
title: "CanvasModuleController Inspector Properties"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "properties", "inspector"]
---

# 📋 CanvasModuleController Inspector Properties

<!-- convention-summary-start -->
### CanvasModuleController Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CanvasModuleController Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Serialized Fields

| Property | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **`autoOrientation`** | `boolean` | `false` | Enables dynamic orientation switching. |
| **`isPortrait`** | `boolean` | `true` | Indicates default portrait layout. |
| **`canvas`** | `cc.Canvas` | `null` | Reference to target Canvas component. |
| **`fitByOrientation`** | `boolean` | `true` | Automatically toggles `fitWidth` vs `fitHeight`. |
| **`useCustomDesignResolution`** | `boolean` | `false` | Uses custom design resolution width and height. |
| **`customDSWidth`** | `number` | `1280` | Custom design resolution width. |
| **`customDSHeight`** | `number` | `720` | Custom design resolution height. |
| **`widgetNodes`** | `cc.Widget[]` | `[]` | Widgets forced to update alignment after resize. |
| **`minScreenRatio`** | `number` | `0` | Minimum aspect ratio threshold. |
| **`isDebug`** | `boolean` | `false` | Outputs viewport debugging logs. |
