---
id: "cc_slot_module:ToastInfoModule:overview:scene_and_prefabs"
title: "ToastInfoModule Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ ToastInfoModule Scene Node Hierarchy

<!-- convention-summary-start -->
### ToastInfoModule Scene Node Hierarchy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ToastInfoModule Scene Node Hierarchy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Canonical Hierarchy Placement

Mounted at `Canvas/Director/Toast`:

```text
Canvas/Director/Toast [Component: ToastInfoModule]
└── LabelNotify [Component: cc.Label, Message Text]
```
