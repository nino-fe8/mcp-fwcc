---
id: "cc_slot_module:ToastInfoModule:recipes:custom_toast_notification_popup_setup"
title: "Recipe: Setting Up System Toast Notification HUD"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "recipes", "toast_hud"]
---

# 💡 Recipe: Setting Up System Toast Notification HUD

<!-- convention-summary-start -->
### Recipe: Setting Up System Toast Notification HUD Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Setting Up System Toast Notification HUD.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Create a node under `Canvas/Director/Toast`.
2. Attach `ToastInfoModule`.
3. Add child label node `LabelNotify` and link to `lblNotify`.
4. Set `delayTime = 2.0`.
