---
id: "cc_slot_module:JackpotWinNoticePopup:methods:index"
title: "JackpotWinNoticePopup Methods Index"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "index"]
---

# 📑 JackpotWinNoticePopup Methods Index

<!-- convention-summary-start -->
### JackpotWinNoticePopup Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `onLoadExtend.md`, `setupObserver.md`, `showWinNotice.md`
- **Related Docs**: [`onLoadExtend`](onLoadExtend.md), [`setupObserver`](setupObserver.md), [`showWinNotice`](showWinNotice.md)
<!-- convention-summary-end -->


---

## 1. Methods Table

| Method | Visibility | Parameters | Return | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Binds observers and hides node. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Watches JackpotData.notifyJackpotInfo. |
| [`showWinNotice`](showWinNotice.md) | `public` | `data: { jpInfo, isMe }` | `void` | Filters local user and initiates winner display. |
| [`showNextWinner`](showNextWinner.md) | `public` | None | `void` | Schedules showCurrentWinner after delay. |
| [`showCurrentWinner`](showCurrentWinner.md) | `public` | None | `void` | Pops winner from queue and triggers fade-in sequence. |
| [`showInfo`](showInfo.md) | `public` | None | `void` | Populates name, win text, and currency labels. |
| [`hideCurrentWinner`](hideCurrentWinner.md) | `public` | None | `void` | Fades out banner and schedules next winner. |
| [`onClosePopup`](onClosePopup.md) | `public` | None | `void` | Dismisses current banner if in IDLE state. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Clears callbacks, tweens, and observer bindings. |
