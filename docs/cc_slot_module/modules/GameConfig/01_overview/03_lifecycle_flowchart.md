---
id: "cc_slot_module:GameConfig:overview:lifecycle_flowchart"
title: "GameConfig Lifecycle & Ingestion Sequence"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "overview", "lifecycle", "flowchart", "bootstrap"]
---

# 🔄 GameConfig Lifecycle & Ingestion Sequence

<!-- convention-summary-start -->
### GameConfig Lifecycle & Ingestion Sequence Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameConfig Lifecycle & Ingestion Sequence.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant Engine as Cocos Engine
    participant GC as GameConfig.ts
    participant GI as GameInit.ts
    participant GDS as GameDataStore.ts
    participant IoC as eno.provide (Container)
    participant Consumers as SlotBaseModules (Table, UI)

    Engine->>GC: Scene loads GameConfig on Canvas/Director
    Engine->>GI: onLoad() -> initializeConfigAndDataStore()
    GI->>GC: getGameConfig()
    GI->>GDS: setConfig(gameConfig)
    GI->>IoC: provide(GameConfig, gameConfig, gameId)
    
    Consumers->>IoC: @inject(GameConfig) gameConfig
    Consumers->>GC: Reads TABLE_FORMAT, WIN_LEVEL_CONFIG
```
