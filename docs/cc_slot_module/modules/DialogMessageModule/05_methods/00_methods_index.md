---
id: "cc_slot_module:DialogMessageModule:methods:index"
title: "DialogMessageModule Methods Index"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "index"]
---

# 📑 DialogMessageModule Methods Index

<!-- convention-summary-start -->
### DialogMessageModule Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `onLoadExtend.md`, `setupObserver.md`, `showDialog.md`
- **Related Docs**: [`onLoadExtend`](onLoadExtend.md), [`setupObserver`](setupObserver.md), [`showDialog`](showDialog.md)
<!-- convention-summary-end -->


---

## 1. Methods Table

| Method | Visibility | Parameters | Return | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Binds observers to DialogData fields. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Watches active, message, isOkBtnActive, isCancelBtnActive. |
| [`showDialog`](showDialog.md) | `public` | `active: boolean` | `void` | Toggles dialog node active state and opacity. |
| [`updateMessage`](updateMessage.md) | `public` | `message: string` | `void` | Updates lbMessage text string. |
| [`showButtonOK`](showButtonOK.md) | `public` | `active: boolean` | `void` | Toggles buttonOK active state. |
| [`showButtonCancel`](showButtonCancel.md) | `public` | `active: boolean` | `void` | Toggles buttonCancel active state. |
| [`onConfirmPressed`](onConfirmPressed.md) | `public` | None | `void` | Emits ON_ACTION_OK. |
| [`onCancelPressed`](onCancelPressed.md) | `public` | None | `void` | Emits ON_ACTION_CANCEL. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Releases observer bindings. |
