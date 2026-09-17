---
id: "cc_slot_module:VerticalCascadeModule:events:scoped_module_events"
title: "VerticalCascadeModule Scoped Events & Node Signals"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 VerticalCascadeModule Scoped Events & Node Signals

<!-- convention-summary-start -->
### VerticalCascadeModule Scoped Events & Node Signals Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule Scoped Events & Node Signals.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subscribed Scoped `moduleEvent` Steps

| Event Name | Handler | Payload | Action |
| :--- | :--- | :--- | :--- |
| `TABLE_START_RESPIN` | `startRespin` | `(matrix, traceWays)` | Eliminates winning nodes from table. |
| `TABLE_STOP_RESPIN` | `stopRespin` | `(matrix, traceWays)` | Drops surviving symbols and spawns top influx. |

---

## 2. Emitted Events on Symbol Nodes

| Event Name | Target | Purpose |
| :--- | :--- | :--- |
| `SHOW_STATIC` | `symbolNode` | Switches symbol to static sprite view during flight. |
| `PLAY_ANIMATION_APPEAR` | `symbolNode` | Triggers landing sparkle / impact animation upon hitting ground coordinate. |
