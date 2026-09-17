---
id: "cc_slot_module:SlotGameSettings:overview:scene_and_prefabs"
title: "SlotGameSettings Service Placement & Injection"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotGameSettings Service Placement & Injection

<!-- convention-summary-start -->
### SlotGameSettings Service Placement & Injection Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotGameSettings Service Placement & Injection.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime Instantiation & Injection

`SlotGameSettings` is instantiated by `GameInit` on `Canvas/Director` on Frame 0 and registered into the Service Locator container:

```typescript
// Registered in GameInit on Canvas/Director:
this.gameSettings = new SlotGameSettings();
```

---

## 2. Injected Consumers

- `Canvas/Director` (`GameDirector`, `GameConfig`)
- `Canvas/Director/UIManager/TurboButton` (`TurboButton`)
- `Canvas/Director/GameMode/MainGamePrefab` (`NormalGameDirectorModule`)
