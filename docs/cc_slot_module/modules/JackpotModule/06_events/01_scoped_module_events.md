---
id: "cc_slot_module:JackpotModule:events:scoped_module_events"
title: "JackpotModule Scoped Events"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 JackpotModule Scoped Events

<!-- convention-summary-start -->
### JackpotModule Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Scoped Events Emitted

| Event Name | Target Node | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `ON_UPDATE_VALUE` | `item.label.node` | `value: number, time: number` | Instructs `JackpotLabel` to execute `MoneyTween.runNumber` count-up. |
