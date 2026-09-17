---
id: "cc_slot_module:CoinsEffect:events:scoped_module_events"
title: "CoinsEffect Scoped Node Events"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "events", "scoped_events"]
---

# 📡 CoinsEffect Scoped Node Events

<!-- convention-summary-start -->
### CoinsEffect Scoped Node Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Scoped Node Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Node Event Listeners

| Event Name | Handler Method | Action |
| :--- | :--- | :--- |
| `SHOW_COINS_EFFECT` | `this.showCoinsEffect()` | Activates particles, resets systems, and fades opacity from 1 to 255. |
| `HIDE_COINS_EFFECT` | `this.hideCoinsEffect()` | Halts particle emissions via `stopSystem()`. |
