---
id: "cc_slot_module:LoadingScreenModule:properties:inspector_properties"
title: "LoadingScreenModule Inspector Properties"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "properties", "inspector"]
---

# 📋 LoadingScreenModule Inspector Properties

<!-- convention-summary-start -->
### LoadingScreenModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Fields

| Property | Type | Default | When Set | Where Read | Impact if Invalid |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **`sceneName`** | `string` | `''` | Inspector | `onLoad()` | Aborts loading if empty |
| **`sdSceneName`** | `string` | `''` | Inspector | `redirectSceneName()` | High-res assets loaded on low-end mobile |
| **`sceneNameIframe`** | `string` | `''` | Inspector | `redirectSceneName()` | Uses default scene in iframe |
| **`sceneNameHistory`** | `string` | `''` | Inspector | `redirectSceneName()` | History replay URL parameter ignored |
| **`progressBar`** | `cc.ProgressBar` | `null` | Inspector | `update()`, `setProgressFull()` | Progress bar does not fill |
| **`progressLabel`** | `cc.Label` | `null` | Inspector | `updateLabelProgress()` | No percentage text display |
| **`homeBtn`** | `cc.Node` | `null` | Inspector | `addHomeEvent()` | Player cannot exit during long loads |
