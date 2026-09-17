---
id: "cc_slot_module:SlotBaseModule:gotchas:premature_service_access_in_constructor"
title: "Gotcha: Accessing Injected Fields in Constructor"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "gotchas", "injection_timing"]
---

# ⚠️ Gotcha: Accessing Injected Fields in Constructor

<!-- convention-summary-start -->
### Gotcha: Accessing Injected Fields in Constructor Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Accessing Injected Fields in Constructor.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`@inject` properties are not yet bound when the JavaScript constructor executes. Accessing `this.gameLogic` or `this.eventManager` in property initializers or constructors resolves to `undefined`.

---

## 2. Prevention

Perform all initializations in `onLoadExtend()` or `start()`, where `applyInjections()` has already completed.
