---
id: "cc_slot_module:ToastInfoModule:properties_and_state:inspector_properties"
title: "ToastInfoModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ ToastInfoModule Inspector Properties Specification

<!-- convention-summary-start -->
### ToastInfoModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ToastInfoModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `lblNotify` | `cc.Label` | `null` | Label displaying notification message string. |
| `delayTime` | `number` | `1.5` | Dwell duration in seconds before auto-dismissal. |
