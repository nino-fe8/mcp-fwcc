---
id: "cc_slot_module:BaseCutscene:properties_and_state:inspector_properties"
title: "BaseCutscene Inspector Properties Specification"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BaseCutscene Inspector Properties Specification

<!-- convention-summary-start -->
### BaseCutscene Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `cutsceneType` | `CUTSCENE_TYPE_ENUM` | `CUTSCENE_TYPE_ENUM.NONE` | Unique identifier enum used by `CutsceneController` registry map. |
