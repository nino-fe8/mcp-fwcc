---
id: "cc_slot_module:SlotReelModule:properties:injected_services"
title: "SlotReelModule Injected Services & Managers"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "properties", "injected_services", "symbol_manager"]
---

# 💉 SlotReelModule Injected Services & Managers

<!-- convention-summary-start -->
### SlotReelModule Injected Services & Managers Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotReelModule Injected Services & Managers.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Direct Dependency Injection Reference

| Service / Manager | Type | Injection Method | Role in Module |
| :--- | :--- | :--- | :--- |
| `symbolManager` | `SlotSymbolManager` | `initReel({ pool })` | Instantiates and recycles static/blur symbol nodes via object pool. |
| `reelManager` | `ReelManager` | `initReelManager()` | Internal state machine tracking step counts, scroll velocity, and reel state. |

---

## 2. Callback Delegates

* `reelStopCB`: Function invoked when column completes its final bounce landing animation (`reelStopCB(this.reelIndex)`).
* `reelPreStopCB`: Function invoked just before the column begins its deceleration curve (`reelPreStopCB(this.reelIndex)`).
