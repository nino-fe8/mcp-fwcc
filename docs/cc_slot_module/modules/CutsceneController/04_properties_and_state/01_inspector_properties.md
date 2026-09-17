---
id: "cc_slot_module:CutsceneController:properties_and_state:inspector_properties"
title: "CutsceneController Inspector Properties Specification"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ CutsceneController Inspector Properties Specification

<!-- convention-summary-start -->
### CutsceneController Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `cutsceneList` | `BaseCutscene[]` | `[]` | Explicit list of cutscene components (optional, auto-discovered if empty). |
