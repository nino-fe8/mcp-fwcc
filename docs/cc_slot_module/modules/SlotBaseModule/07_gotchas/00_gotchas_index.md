---
id: "cc_slot_module:SlotBaseModule:gotchas:index"
title: "SlotBaseModule Gotchas Index"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotBaseModule Gotchas Index

<!-- convention-summary-start -->
### SlotBaseModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotBaseModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_duplicate_game_mode_registration_crash.md`, `./02_unreleased_event_and_observer_leak.md`, `./03_premature_service_access_in_constructor.md`
- **Related Docs**: [`01_duplicate_game_mode_registration_crash`](./01_duplicate_game_mode_registration_crash.md), [`02_unreleased_event_and_observer_leak`](./02_unreleased_event_and_observer_leak.md), [`03_premature_service_access_in_constructor`](./03_premature_service_access_in_constructor.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_duplicate_game_mode_registration_crash`](./01_duplicate_game_mode_registration_crash.md)** | Multi-GameMode Registration Error | CRITICAL | Attempting to reuse a single module instance across multiple GameModes throws a fatal registration error. |
| **[`02_unreleased_event_and_observer_leak`](./02_unreleased_event_and_observer_leak.md)** | Memory Leaks from Unreleased Observers & Events | HIGH | Failing to call `observer.releaseAll()` and `eventManager.targetOff(this)` leaves zombie callbacks active after node destruction. |
| **[`03_premature_service_access_in_constructor`](./03_premature_service_access_in_constructor.md)** | Accessing Injected Fields in Constructor / Before onLoad | HIGH | `@inject` dependencies (`gameLogic`, `eventManager`, `observer`) are `null` until `applyInjections` runs inside `onLoad()`. |
