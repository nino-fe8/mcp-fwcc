---
id: "cc_slot_module:systems:pooling_compatibility:asset_preloader"
title: "Asset Preloader & Multi-Target Scene Routing"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "loading_screen", "preloader", "scene_routing", "howler_warmup"]
---

# 🚀 Asset Preloader & Multi-Target Scene Routing

<!-- convention-summary-start -->
### Asset Preloader & Multi-Target Scene Routing Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Asset Preloader & Multi-Target Scene Routing.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 11_pooling_compatibility_and_utility_services
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Multi-Target Scene Routing
`LoadingScreenModule` inspects environment parameters and device capabilities at launch:
- Loads `sdSceneName` on low-memory mobile devices.
- Loads `sceneNameHistory` if URL contains `?history=true`.
- Warms up WebAudio audio context via `JsbUtils.registerLoadHowl()`.
- Interpolates visual progress bar values via `cc.tween` sine curves to avoid visual stutter.
