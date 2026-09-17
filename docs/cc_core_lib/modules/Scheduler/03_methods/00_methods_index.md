---
id: "cc_core_lib:Scheduler:methods:index"
title: "Scheduler Methods Master Index"
category: "cc_core_lib"
tags: ["Scheduler", "scheduler", "cc_core_lib", "methods", "index"]
---

# 📖 `Scheduler` Methods Master Index

<!-- convention-summary-start -->
### Scheduler Methods Master Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Scheduler Methods Master Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 03_methods
- **Scope & Code Paths**: `./scheduleInterval.md`, `./schedule.md`, `./unschedule.md`
- **Related Docs**: [`scheduleInterval()`](./scheduleInterval.md), [`schedule()`](./schedule.md), [`unschedule()`](./unschedule.md)
<!-- convention-summary-end -->


---

## 1. Declared Method Signatures

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| **[`scheduleInterval()`](./scheduleInterval.md)** | `callback: Function, time: number` | `any` | Executes scheduleInterval operation in `Scheduler`. |
| **[`schedule()`](./schedule.md)** | `callback: Function, interval: number, repeat: number, delay: number` | `any` | Executes schedule operation in `Scheduler`. |
| **[`unschedule()`](./unschedule.md)** | `callback_fn: Function` | `void` | Executes unschedule operation in `Scheduler`. |
| **[`destroy()`](./destroy.md)** | `void` | `void` | Executes destroy operation in `Scheduler`. |
