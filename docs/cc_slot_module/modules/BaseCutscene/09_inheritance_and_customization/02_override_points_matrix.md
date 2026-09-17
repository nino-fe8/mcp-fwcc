---
id: "cc_slot_module:BaseCutscene:inheritance:override_points_matrix"
title: "BaseCutscene Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 BaseCutscene Override Points & Extension Matrix

<!-- convention-summary-start -->
### BaseCutscene Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `init` | No (`super.init()` optional) | Customize node event bindings. |
| `play` | Yes (`super.play(...)`) | Intercept play payload before showing. |
| `enter` | No (Pure hook) | Core modal animation and coin count-up logic. |
| `skip` | No (Virtual) | Custom touch-to-skip fast forward logic. |
| `exit` | Yes (`super.exit(...)`) | Custom cleanup before firing close events. |
