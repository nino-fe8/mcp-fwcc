---
id: "cc_slot_module:PopupControllerModule:recipes:custom_popup_layer_hierarchy_setup"
title: "Recipe: Setting Up Master Popup Container"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "recipes", "setup"]
---

# 💡 Recipe: Setting Up Master Popup Container

<!-- convention-summary-start -->
### Recipe: Setting Up Master Popup Container Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Setting Up Master Popup Container.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Scene Setup

1. Create a node under `Canvas/Director/Popup`.
2. Attach `PopupControllerModule` component.
3. Instantiate popup prefabs (`Setting`, `Info`, `BetHistory`, `JackpotHistory`) as direct children.
