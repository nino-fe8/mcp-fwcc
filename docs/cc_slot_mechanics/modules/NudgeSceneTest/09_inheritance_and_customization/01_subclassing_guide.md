---
id: "cc_slot_mechanics:NudgeSceneTest:inheritance:subclassing_guide"
title: "NudgeSceneTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ NudgeSceneTest Subclassing Guide

<!-- convention-summary-start -->
### NudgeSceneTest Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NudgeSceneTest Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
