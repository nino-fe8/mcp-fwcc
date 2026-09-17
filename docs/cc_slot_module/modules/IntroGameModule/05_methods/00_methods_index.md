---
id: "cc_slot_module:IntroGameModule:methods:index"
title: "IntroGameModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "index"]
---

# 📚 IntroGameModule Methods Catalog Index

<!-- convention-summary-start -->
### IntroGameModule Methods Catalog Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Methods Catalog Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoadExtend.md`, `./joinGameSuccess.md`, `./init.md`
- **Related Docs**: [`onLoadExtend`](./onLoadExtend.md), [`joinGameSuccess`](./joinGameSuccess.md), [`init`](./init.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Binds `JOIN_GAME_SUCCESS` and calls `init()`. |
| **[`joinGameSuccess`](./joinGameSuccess.md)**| `public` | `void` | Evaluates reconnect/promotion flags to auto-skip intro. |
| **[`init`](./init.md)** | `public` | `void` | Reads cached preference from `sys.localStorage`. |
| **[`onClickJoinGame`](./onClickJoinGame.md)**| `public` | `void` | Fades out modal, saves preference, and emits dismissal events. |
| **[`onCheckDoNotShowAgain`](./onCheckDoNotShowAgain.md)**| `public` | `void` | Toggles `_isHideIntroGame` boolean state. |
| **[`showButtonJoinGame`](./showButtonJoinGame.md)**| `public` | `void` | Toggles visibility of progressBar vs join button and checkbox. |
| **[`cacheHideIntroGame`](./cacheHideIntroGame.md)**| `public` | `void` | Serializes preference JSON into `sys.localStorage`. |
| **[`playSfxClick`](./playSfxClick.md)** | `public` | `void` | Plays standard button click sound. |
| **[`onDisable`](./onDisable.md)** | `public` | `void` | Stops all active node tweens. |
