---
id: "cc_slot_module:SpinTimesModule:methods:index"
title: "SpinTimesModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "index"]
---

# 📚 SpinTimesModule Methods Catalog Index

<!-- convention-summary-start -->
### SpinTimesModule Methods Catalog Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Methods Catalog Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoadExtend.md`, `./setupObserver.md`, `./updateState.md`
- **Related Docs**: [`onLoadExtend`](./onLoadExtend.md), [`setupObserver`](./setupObserver.md), [`updateState`](./updateState.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Index (All 6 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Binds events, dispatches `SET_UP_SPIN_TIMES`, and initializes observers. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Subscribes to `autoSpinCount` and `state` on `SpinButtonNormal`. |
| **[`updateState`](./updateState.md)** | `public` | `void` | Resets spin times badge when button state returns to `NORMAL`. |
| **[`updateSpinTimes`](./updateSpinTimes.md)** | `public` | `void` | Updates badge string with remaining rounds or `'∞'`. |
| **[`resetSpinTimes`](./resetSpinTimes.md)** | `public` | `void` | Clears label string and deactivates badge node. |
| **[`onDestroy`](./onDestroy.md)** | `protected` | `void` | Releases reactive observer subscriptions. |
