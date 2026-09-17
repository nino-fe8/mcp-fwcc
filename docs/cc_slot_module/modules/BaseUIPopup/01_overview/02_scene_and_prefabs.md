---
id: "cc_slot_module:BaseUIPopup:overview:scene_and_prefabs"
title: "BaseUIPopup Prefab Structure & Node Architecture"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ BaseUIPopup Prefab Structure & Node Architecture

<!-- convention-summary-start -->
### BaseUIPopup Prefab Structure & Node Architecture Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup Prefab Structure & Node Architecture.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Canonical Hierarchy Placement

Mounted under `Canvas/Director/Popup/<PopupPrefab>`:

```text
Canvas/Director/Popup/<ModalNode> [Component: BaseUIPopup subclass, PopupBehavior]
├── BackgroundBlocker [Component: cc.Button, Black Screen Overlay]
├── DialogContainer [Component: cc.Node, Animated Modal Body]
│   ├── Title [Component: cc.Label]
│   ├── ContentContainer [Component: cc.Node]
│   └── CloseButton [Component: cc.Button, Calls closeAllPopups]
```
