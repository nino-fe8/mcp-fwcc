---
id: "cc_slot_module:GameInit:customization:subclassing_guide"
title: "GameInit Subclassing & Custom Bootstrap Guide"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "customization", "subclassing", "bootstrap", "ioc", "provide"]
---

# 🏗️ GameInit Subclassing & Custom Bootstrap Guide

<!-- convention-summary-start -->
### GameInit Subclassing & Custom Bootstrap Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameInit Subclassing & Custom Bootstrap Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance & Scene Mounting

`GameInit` is the root bootstrap controller mounted permanently at **`Canvas/Director`**:

```typescript
const { _decorator } = cc;
import { GameInit } from "../../../../cc-common/cc-slot-module/Core/GameInit";
const { ccclass } = _decorator;

@ccclass("GameInitCustom")
export class GameInitCustom extends GameInit {
    // Custom bootstrap extensions
}
```

---

## 2. Invariant Guardrails & Best Practices

1. **Companion Component Pattern**: In most production games (such as Red Cliff `g9666L`), `GameInit` is used directly as-is on `Canvas/Director`. Customization is achieved by mounting **subclassed companion components** (`GameConfig9666`, `GameDataStore9666`) alongside `GameInit`.
2. **IoC Container Extension**: If a new game introduces custom global singletons (e.g. `CustomJackpotWheelService`), override `setupDependencyInjection()` and invoke `eno.provide()` **after calling `super.setupDependencyInjection()`**.
3. **Synchronous Frame 0 Invariant**: All services must be registered within `onLoad()` before any child component executes `start()`.
