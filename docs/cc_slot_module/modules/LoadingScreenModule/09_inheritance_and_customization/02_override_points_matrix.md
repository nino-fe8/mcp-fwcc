---
id: "cc_slot_module:LoadingScreenModule:inheritance:override_points_matrix"
title: "LoadingScreenModule Override Points Matrix"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧩 LoadingScreenModule Override Points Matrix

<!-- convention-summary-start -->
### LoadingScreenModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Matrix

| Method | Base Behavior | Safe to Override? | Required Super Call |
| :--- | :--- | :--- | :--- |
| **`redirectSceneName()`** | Resolves SD / Iframe / History scenes | `YES` | `Recommended` |
| **`updateLabelProgress()`** | Updates `progressLabel.string` | `YES` | `Optional` |
| **`onDestroy()`** | Unregisters Howler and cancels tweens | `YES` | `MANDATORY` |
