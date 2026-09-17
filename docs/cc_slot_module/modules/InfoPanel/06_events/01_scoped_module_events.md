---
id: "cc_slot_module:InfoPanel:events:scoped_module_events"
title: "InfoPanel Scoped Events"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "events", "scoped"]
---

# 📡 InfoPanel Scoped Node Events

<!-- convention-summary-start -->
### InfoPanel Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Scoped Events Listened

| Event Name | Source | Handler | Purpose |
| :--- | :--- | :--- | :--- |
| `NEXT_GAME_INFO` | Indicator / Child | `next()` | Advances page. |
| `PREVIOUS_GAME_INFO` | Indicator / Child | `previous()` | Moves to previous page. |
