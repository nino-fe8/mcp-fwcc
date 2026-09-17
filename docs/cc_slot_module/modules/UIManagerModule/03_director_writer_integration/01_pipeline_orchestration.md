---
id: "cc_slot_module:UIManagerModule:director_writer:pipeline_orchestration"
title: "UIManagerModule Pipeline & Event Integration"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 UIManagerModule Pipeline & Event Integration

<!-- convention-summary-start -->
### UIManagerModule Pipeline & Event Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Pipeline & Event Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Dispatched by `GameModeDirectorModule` whenever entering a new mode:
```typescript
this.eventManager.emit(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, GAME_MODE_ENUM.FREE_GAME);
```
`UIManagerModule` handles the event by calling `this.updateGameModeUI(gameMode)`.
