---
id: "cc_slot_module:MenuPanel:inheritance:subclassing_guide"
title: "MenuPanel Subclassing Guide"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ MenuPanel Subclassing Guide

<!-- convention-summary-start -->
### MenuPanel Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Extend `MenuPanel`.
2. Connect `musicOn`/`musicOff` and `sfxOn`/`sfxOff` nodes in the Inspector.
3. Clean up observers in `onDestroy()`.
