---
id: "cc_slot_module:SlotObjectPool:properties:inspector_properties"
title: "SlotObjectPool Inspector Properties"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "properties", "inspector"]
---

# 📋 SlotObjectPool Inspector Properties

<!-- convention-summary-start -->
### SlotObjectPool Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotObjectPool Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Serialized Fields

| Property | Type | Default | When Set | Where Read | Impact if Invalid |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **`prefabObject`** | `cc.Prefab` | `null` | Editor Inspector | `get()` | `get()` outputs error log and returns `null` |
| **`initCount`** | `number` | `15` | Editor Inspector | `onLoad()` | Defines initial pool capacity |
