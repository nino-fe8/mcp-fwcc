---
id: "cc_slot_module:GameInit:method:connect"
title: "GameInit.connect() Method Specification"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "method", "connect", "network", "auth", "loginScene"]
---

# `GameInit.connect(): void`

<!-- convention-summary-start -->
### GameInit.connect() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameInit.connect() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public connect(): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: `GameInit.start()`.
* **Lifecycle Moment**: Frame 1, after all scene components have finished `onLoad()`.

---

## 3. Detailed Algorithmic Execution Logic
1. Registers the network adapter via `connectNetwork.setGameNetwork(network)`.
2. Calls `connectNetwork.loginScene()` passing `gameId`, success callback (`this.setUpGame`), and failure callback (`this.loginFailed`).

---

## 4. Caller & Callee Call Graph
* **Callers**: `GameInit.start()`
* **Callees**: `connectNetwork.setGameNetwork()`, `connectNetwork.loginScene()`, `this.setUpGame()`, `this.loginFailed()`

---

## 5. Un-truncated Source Code Implementation
```typescript
connect(): void {
    connectNetwork.setGameNetwork(network);
    connectNetwork.loginScene({
        callback: this.setUpGame.bind(this),
        gameId: this._gameConfig.GAME_ID,
        callbackAuthFailed: this.loginFailed.bind(this)
    });
}
```
