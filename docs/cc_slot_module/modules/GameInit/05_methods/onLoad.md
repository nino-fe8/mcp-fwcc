---
id: "cc_slot_module:GameInit:method:onLoad"
title: "GameInit.onLoad() Method Specification"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "method", "onLoad", "bootstrap", "lifecycle"]
---

# `GameInit.onLoad(): void`

<!-- convention-summary-start -->
### GameInit.onLoad() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameInit.onLoad() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public onLoad(): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: Cocos Creator Engine 2.4 runtime loader.
* **Lifecycle Moment**: Frame 0, immediately upon scene node activation on `Canvas/Director`.

---

## 3. Detailed Algorithmic Execution Logic
1. `this.setupTest()`: Inspects `this.isModuleTest` to dynamically mount `SetupModuleTest` if unit testing.
2. `this.initializeConfigAndDataStore()`: Fetches or creates `GameConfig` and `GameDataStore`, injecting configuration into the data store.
3. `this.initializeGameLogic()`: Instantiates `new eno.Game(this._gameConfig)` and configures default language and extended text dictionaries.
4. `this.setupLogger()`: Injects console logger styles and configures `CC_DEBUG` filtering.
5. `this.setupScheduler()`: Creates `new eno.Scheduler(GAME_ID)` and registers it with `_gameLogic`.
6. `this.setupMoneyFormatter()`: Creates `MoneyFormatter` and `MoneyTween` instances.
7. `this.setupEventManager()`: Creates `new GameEventManager()` with configured logger prefix.
8. `this.setupDependencyInjection()`: Registers all 12 singleton tokens with `eno.provide()`.
9. `this.setupGameText()`: Binds slot text localization tables.

---

## 4. Caller & Callee Call Graph
* **Callers**: Cocos Creator Engine Component Lifecycle.
* **Callees**: `setupTest()`, `initializeConfigAndDataStore()`, `initializeGameLogic()`, `setupLogger()`, `setupScheduler()`, `setupMoneyFormatter()`, `setupEventManager()`, `setupDependencyInjection()`, `setupGameText()`.

---

## 5. Un-truncated Source Code Implementation
```typescript
onLoad(): void {
    this.setupTest();
    this.initializeConfigAndDataStore();
    this.initializeGameLogic();
    this.setupLogger();
    this.setupScheduler();
    this.setupMoneyFormatter();
    this.setupEventManager();
    this.setupDependencyInjection();
    this.setupGameText();
}
```
