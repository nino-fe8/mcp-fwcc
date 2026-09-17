---
id: "cc_slot_module:PaylineLineModule:properties_and_state:inspector_properties"
title: "PaylineLineModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ PaylineLineModule Inspector Properties Specification

<!-- convention-summary-start -->
### PaylineLineModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Property Matrix

| Property | Type | Default | Inspector Visibility | Description |
| :--- | :--- | :--- | :--- | :--- |
| `container` | `cc.Node` | `null` | Always Visible | Parent node holding active line instances. |
| `usePrefab` | `boolean` | `true` | Always Visible | If `true`, dynamically instantiates `template`; if `false`, uses `lines` array. |
| `lines` | `cc.Node[]` | `[]` | Visible when `usePrefab === false` | Pre-placed scene node references indexed by `lineID`. |
| `template` | `cc.Prefab` | `null` | Visible when `usePrefab === true` | Prefab asset spawned for line rendering. |
