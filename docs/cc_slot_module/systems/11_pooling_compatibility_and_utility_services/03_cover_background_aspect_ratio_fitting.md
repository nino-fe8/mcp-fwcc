---
id: "cc_slot_module:systems:pooling_compatibility:cover_background_fitting"
title: "Cover Background Aspect Ratio Fitting"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "auto_scale_bg", "aspect_ratio", "letterbox_free"]
---

# 🖼️ Cover Background Aspect Ratio Fitting

<!-- convention-summary-start -->
### Cover Background Aspect Ratio Fitting Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Cover Background Aspect Ratio Fitting.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 11_pooling_compatibility_and_utility_services
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Scaling Formula
`AutoScaleBackgroundModule` ensures background images completely fill the screen without distortion:

$$\text{scale} = \max\left(\frac{\text{frameWidth}}{\text{bgBaseWidth} \times \text{deviceScale}}, \frac{\text{frameHeight}}{\text{bgBaseHeight} \times \text{deviceScale}}\right)$$

This eliminates black letterbox bars on ultra-wide 21:9 monitors and 4:3 iPad tablets alike.
