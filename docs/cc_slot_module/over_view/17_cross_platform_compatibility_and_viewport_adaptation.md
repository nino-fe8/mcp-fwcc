---
id: "cc_slot_module:overview:cross_platform_compatibility"
title: "Cross-Platform Compatibility & Viewport Adaptation"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "compatibility", "viewport_adaptation", "responsive", "safe_area"]
---

# 📐 Cross-Platform Compatibility & Viewport Adaptation

<!-- convention-summary-start -->
### Cross-Platform Compatibility & Viewport Adaptation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Cross-Platform Compatibility & Viewport Adaptation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, over_view
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Multi-Resolution Responsive Engine
Slot games must run seamlessly across diverse form factors: 16:9 desktop monitors, 21:9 ultra-wide displays, 4:3 iPad tablets, and 9:19.5 notched smartphones.

## 2. Adaptation Triad
1. **Canvas Viewport Controller (`CanvasModuleController`)**: Dynamically toggles `fitWidth` vs `fitHeight` based on aspect ratio comparisons and forces `cc.Widget` alignment reflow.
2. **Cover Background Scaler (`AutoScaleBackgroundModule`)**: Computes aspect-ratio preserving cover scales to eliminate black letterbox bars.
3. **Safe Area Management**: Calculates dynamic padding to protect HUD elements from camera notches and mobile navigation bars.
