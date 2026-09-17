---
id: "cc_slot_module:WinEffectModule:events:scoped_module_events"
title: "WinEffectModule Scoped Node Events"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 WinEffectModule Scoped Node Events

<!-- convention-summary-start -->
### WinEffectModule Scoped Node Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule Scoped Node Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Node Emitters

| Event Name | Target | Purpose |
| :--- | :--- | :--- |
| `SHOW_COINS_EFFECT` | `coinsEffect` Node | Spawns falling gold coin particle system. |
| `HIDE_COINS_EFFECT` | `coinsEffect` Node | Stops gold coin particle emissions. |
