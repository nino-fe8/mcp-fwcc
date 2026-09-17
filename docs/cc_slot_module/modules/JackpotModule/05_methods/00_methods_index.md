---
id: "cc_slot_module:JackpotModule:methods:index"
title: "JackpotModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "index"]
---

# 📚 JackpotModule Methods Catalog Index

<!-- convention-summary-start -->
### JackpotModule Methods Catalog Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule Methods Catalog Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoadExtend.md`, `./setupObserver.md`, `./setupJackpotObserver.md`
- **Related Docs**: [`onLoadExtend`](./onLoadExtend.md), [`setupObserver`](./setupObserver.md), [`setupJackpotObserver`](./setupJackpotObserver.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Index (All 11 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Binds pause, resume, and manual update events. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Observes `index`, `pauseUpdateJackpot`, `jackpots`, and trial mode. |
| **[`setupJackpotObserver`](./setupJackpotObserver.md)**| `public` | `void` | Observes `isJackpotActive` to toggle visibility. |
| **[`updateJackpotData`](./updateJackpotData.md)** | `public` | `void` | Renders jackpot pools on data model modification. |
| **[`showJackpot`](./showJackpot.md)** | `public` | `void` | Toggles container node visibility. |
| **[`updateJackpotValue`](./updateJackpotValue.md)**| `public` | `void` | Updates specific tier jackpot label with new value. |
| **[`renderAllJackpot`](./renderAllJackpot.md)** | `public` | `void` | Emits `ON_UPDATE_VALUE` to all tier items in `jackpotItems`. |
| **[`onSwitchMode`](./onSwitchMode.md)** | `public` | `void` | Resumes jackpot ticker when entering trial mode. |
| **[`pauseJackpot`](./pauseJackpot.md)** | `public` | `void` | Sets `jackpotData.setPauseJackpot(true)`. |
| **[`resumeJackpot`](./resumeJackpot.md)** | `public` | `void` | Sets `jackpotData.setPauseJackpot(false)` and re-renders pools. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Releases reactive observer subscriptions. |
