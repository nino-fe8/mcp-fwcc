---
id: "cc_slot_module:BaseUIPopup:director_writer:pipeline_orchestration"
title: "BaseUIPopup Pipeline & Event Integration"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 BaseUIPopup Pipeline & Event Integration

<!-- convention-summary-start -->
### BaseUIPopup Pipeline & Event Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup Pipeline & Event Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Integration

Dispatches modal closure commands to `GameLogic`:
```typescript
this.gameLogic.emit(GameLogicUIEvents.CLOSE_ALL_POPUPS);
```
Subclasses observe their respective domain models (`BetHistoryData`, `JackpotHistoryData`, `SettingData`).
