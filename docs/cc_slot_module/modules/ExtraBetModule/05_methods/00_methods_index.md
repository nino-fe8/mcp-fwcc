---
id: "cc_slot_module:ExtraBetModule:methods:index"
title: "ExtraBetModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "index"]
---

# 📚 ExtraBetModule Methods Catalog Index

<!-- convention-summary-start -->
### ExtraBetModule Methods Catalog Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Methods Catalog Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./start.md`, `./setupObserver.md`, `./disableExtraBet.md`
- **Related Docs**: [`start`](./start.md), [`setupObserver`](./setupObserver.md), [`disableExtraBet`](./disableExtraBet.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Index (All 11 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`start`](./start.md)** | `public` | `void` | Disables buttons initially, locates `BetData`, and initializes observers. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Subscribes to `minExtraBetEnable`, `maxExtraBetEnable`, `totalBet`. |
| **[`disableExtraBet`](./disableExtraBet.md)** | `public` | `void` | Disables both increment and decrement extra bet buttons. |
| **[`onMinExtraBetEnable`](./onMinExtraBetEnable.md)** | `public` | `void` | Synchronizes `decreaseExtraBet.interactable`. |
| **[`onMaxExtraBetEnable`](./onMaxExtraBetEnable.md)** | `public` | `void` | Synchronizes `increaseExtraBet.interactable`. |
| **[`onUpdateTotalBet`](./onUpdateTotalBet.md)** | `public` | `void` | Updates string on `extraBetLabel`. |
| **[`onIncreaseExtraBet`](./onIncreaseExtraBet.md)** | `public` | `void` | Plays sound and dispatches `INCREASE_EXTRA_BET`. |
| **[`onDecreaseExtraBet`](./onDecreaseExtraBet.md)** | `public` | `void` | Plays sound and dispatches `DECREASE_EXTRA_BET`. |
| **[`playSfxIncreaseExtraBet`](./playSfxIncreaseExtraBet.md)**| `public`| `void`| Plays sound on extra bet increment. |
| **[`playSfxDecreaseExtraBet`](./playSfxDecreaseExtraBet.md)**| `public`| `void`| Plays sound on extra bet decrement. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Releases reactive observer subscriptions. |
