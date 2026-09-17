---
id: "cc_slot_module:GameInit:methods:index"
title: "GameInit Methods & API Specification Index"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "methods", "api", "index"]
---

# 🚀 GameInit Methods & API Specification Index

<!-- convention-summary-start -->
### GameInit Methods & API Specification Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameInit Methods & API Specification Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoad.md`, `./start.md`, `./initializeConfigAndDataStore.md`
- **Related Docs**: [`onLoad(): void`](./onLoad.md), [`start(): void`](./start.md), [`initializeConfigAndDataStore(): void`](./initializeConfigAndDataStore.md)
<!-- convention-summary-end -->


## 1. Master Method Index

| Method Signature | Visibility | Lifecycle Phase | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoad(): void`](./onLoad.md)** | `public` | Frame 0 | Synchronous 9-step bootstrap pipeline and IoC container population. |
| **[`start(): void`](./start.md)** | `public` | Frame 1 | Triggers network login handshake. |
| **[`initializeConfigAndDataStore(): void`](./initializeConfigAndDataStore.md)** | `public` | Frame 0 Step 2 | Resolves `GameConfig` and injects it into `GameDataStore`. |
| **[`initializeGameLogic(): void`](./initializeGameLogic.md)** | `public` | Frame 0 Step 3 | Instantiates `eno.Game` and sets default language. |
| **[`setupDependencyInjection(): void`](./setupDependencyInjection.md)** | `public` | Frame 0 Step 8 | Binds all 12 core singletons via `eno.provide()`. |
| **[`connect(): void`](./connect.md)** | `public` | Frame 1 | Dispatches `connectNetwork.loginScene()` with auth callbacks. |
| **[`setUpGame(): void`](./setUpGame.md)** | `public` | Post-Auth | Binds socket router `_gameLogic.initNetwork(network)`. |
| **[`onDestroy(): void`](./onDestroy.md)** | `public` | Teardown | Destroys logic instances and calls `clearGameDependencies(gameId)`. |
