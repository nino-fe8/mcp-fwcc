---
id: "cc_slot_module:GameDirector:methods:index"
title: "GameDirector Methods Index"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "methods", "index"]
---

# 📋 GameDirector Methods Index

<!-- convention-summary-start -->
### GameDirector Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onSwitchGameMode.md`, `./onExitGameMode.md`, `./resumeNormalGameMode.md`
- **Related Docs**: [`onSwitchGameMode(mode: number): void`](./onSwitchGameMode.md), [`onExitGameMode(): Promise<void>`](./onExitGameMode.md), [`resumeNormalGameMode(): void`](./resumeNormalGameMode.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onSwitchGameMode(mode: number): void`](./onSwitchGameMode.md)** | `public` | Activates target game mode, pushes it onto `currentModes` stack, and calls `enter()`. |
| **[`onExitGameMode(): Promise<void>`](./onExitGameMode.md)** | `public` | Pops current mode from stack, deactivates it, restores previous mode, and calls `onBackToGameMode()`. |
| **[`resumeNormalGameMode(): void`](./resumeNormalGameMode.md)** | `public` | Emergency reset clearing mode stack and forcing return to Base Game. |
| **[`onUIEventRequest(event: string, data: any): any`](./onUIEventRequest.md)** | `public` | Delegates network events from `GameLogic` to `GameLogicEventHandler` on active mode. |
| **[`onEventHide(): void`](./onEventHide.md)** | `public` | Handles browser tab backgrounding by pausing tweens and calling `gameOnPause()`. |
| **[`onEventShow(): void`](./onEventShow.md)** | `public` | Handles browser tab return by resuming running actions and calling `gameOnResume()`. |
