---
id: "cc_slot_module:SlotObjectPool:properties:runtime_state_variables"
title: "SlotObjectPool Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotObjectPool Runtime State Variables

<!-- convention-summary-start -->
### SlotObjectPool Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotObjectPool Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal Fields

| Field | Type | Default | Mutation Moment | Purpose |
| :--- | :--- | :---: | :--- | :--- |
| **`pool`** | `cc.NodePool` | `new NodePool()` | Initialized at declaration | Holds deactivated `cc.Node` objects |
| **`usingObjects`** | `cc.Node[]` | `[]` | Updated on `get()`, `put()`, `clear()` | Holds active nodes for batch reclamation |
