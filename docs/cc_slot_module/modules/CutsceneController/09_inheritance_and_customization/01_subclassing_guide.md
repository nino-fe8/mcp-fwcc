---
id: "cc_slot_module:CutsceneController:inheritance:subclassing_guide"
title: "CutsceneController Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ CutsceneController Subclassing & Customization Guide

<!-- convention-summary-start -->
### CutsceneController Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Guidelines

- Extend `CutsceneController`.
- Override `playCutScene()` or `makeCutSceneList()` when introducing dynamic async modal loading or priority queues.
