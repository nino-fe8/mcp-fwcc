---
id: "cc_slot_module:SettingPanel:inheritance:subclassing_guide"
title: "SettingPanel Subclassing Guide"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SettingPanel Subclassing Guide

<!-- convention-summary-start -->
### SettingPanel Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Extend `SettingPanel`.
2. Do not override `onLoad()`; implement `onLoadExtend()`.
3. In `onDestroy()`, invoke `super.onDestroy()` to unbind observers.
