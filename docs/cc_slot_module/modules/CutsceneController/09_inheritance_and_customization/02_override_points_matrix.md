---
id: "cc_slot_module:CutsceneController:inheritance:override_points_matrix"
title: "CutsceneController Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 CutsceneController Override Points & Extension Matrix

<!-- convention-summary-start -->
### CutsceneController Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `makeCutSceneList` | Optional | Custom dynamic prefab loading into map. |
| `playCutScene` | Optional | Custom queueing or analytics logging. |
| `closeCutScene` | Optional | Custom exit interceptors. |
| `skipCutScenes` | Optional | Custom global fast-forward actions. |
| `isDisplayCutscene` | Optional | Custom condition for full display blocking. |
