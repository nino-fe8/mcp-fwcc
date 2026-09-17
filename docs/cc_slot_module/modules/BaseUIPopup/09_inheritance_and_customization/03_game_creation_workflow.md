---
id: "cc_slot_module:BaseUIPopup:inheritance:game_creation_workflow"
title: "BaseUIPopup Game Creation Workflow"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 BaseUIPopup Game Creation Workflow

<!-- convention-summary-start -->
### BaseUIPopup Game Creation Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup Game Creation Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Create a modal root node under `Canvas/Director/Popup`.
2. Attach a component inheriting from `BaseUIPopup`.
3. Optionally add `FadePopupBehavior` or `SlidePopupBehavior`.
4. Link close buttons to `closeAllPopups()`.
