---
id: "cc_slot_module:PayTablePanel:methods:index"
title: "PayTablePanel Methods Index"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "methods", "index"]
---

# 📑 PayTablePanel Methods Index

<!-- convention-summary-start -->
### PayTablePanel Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PayTablePanel Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `onLoadExtend.md`, `setupObserver.md`, `showPayTablePanel.md`
- **Related Docs**: [`onLoadExtend`](onLoadExtend.md), [`setupObserver`](setupObserver.md), [`showPayTablePanel`](showPayTablePanel.md)
<!-- convention-summary-end -->


---

## 1. Master Methods Overview

`PayTablePanel` provides a vertical scrollable paytable viewer optimized for portrait aspect ratios.

---

## 2. Methods Table

| Method | Visibility | Parameters | Return | Summary Description |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Sets up `UIManagerData` reactive observers on component initialization. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Watches `UIManagerData.isPayTablePanelOpen` to toggle popup visibility. |
| [`showPayTablePanel`](showPayTablePanel.md) | `public` | `isActive: boolean` | `void` | Toggles popup modal, resets ScrollView position to the top on opening. |
| [`openPanel`](openPanel.md) | `public` | None | `void` | Direct activation of node visibility. |
| [`closePanel`](closePanel.md) | `public` | None | `void` | Direct deactivation of node visibility. |
| [`onClosePanel`](onClosePanel.md) | `public` | None | `void` | Plays click audio, checks popup behavior state, and emits `CLOSE_PAY_TABLE_PANEL`. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Safely unbinds all observers on `UIManagerData`. |
