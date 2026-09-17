---
id: "cc_slot_module:PortraitBetModule:methods:index"
title: "PortraitBetModule Methods Index"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "methods", "index"]
---

# 📑 PortraitBetModule Methods Index

<!-- convention-summary-start -->
### PortraitBetModule Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PortraitBetModule Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `setupObserver.md`, `onEnableBetChange.md`, `onMinBetEnable.md`
- **Related Docs**: [`setupObserver`](setupObserver.md), [`onEnableBetChange`](onEnableBetChange.md), [`onMinBetEnable`](onMinBetEnable.md)
<!-- convention-summary-end -->


---

## 1. Master Methods Overview

`PortraitBetModule` extends `BetModule` to provide mobile-tailored betting HUD controls with dedicated Minimum Bet (`minBetBtn`) and Maximum Bet (`maxBetBtn`) shortcut buttons and toast feedback.

---

## 2. Methods Table

| Method | Visibility | Parameters | Return | Summary Description |
| :--- | :--- | :--- | :--- | :--- |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Observes `enableBetChange` from `BetData` and hides boundary buttons initially. |
| [`onEnableBetChange`](onEnableBetChange.md) | `public` | `enable: boolean` | `void` | Toggles interactability of `minBetBtn` and `maxBetBtn` according to spin lock states. |
| [`onMinBetEnable`](onMinBetEnable.md) | `public` | `minBetEnable: boolean` | `void` | Updates `minBetBtn` active visibility (hides button when already at minimum bet). |
| [`onMaxBetEnable`](onMaxBetEnable.md) | `public` | `maxBetEnable: boolean` | `void` | Updates `maxBetBtn` active visibility (hides button when already at maximum bet). |
| [`onMaxBetClick`](onMaxBetClick.md) | `public` | None | `void` | Dispatches `GameUIEvents.UI_TOAST.HIT_MAX_BET` notification toast. |
| [`onMinBetClick`](onMinBetClick.md) | `public` | None | `void` | Dispatches `GameUIEvents.UI_TOAST.HIT_MIN_BET` notification toast. |
| [`disableBet`](disableBet.md) | `public` | None | `void` | Locks interactability of boundary buttons during in-flight spins. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Releases observer bindings on `BetData` to prevent memory leaks. |
