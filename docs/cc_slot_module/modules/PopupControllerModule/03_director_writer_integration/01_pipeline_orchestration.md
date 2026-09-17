---
id: "cc_slot_module:PopupControllerModule:director_writer:pipeline_orchestration"
title: "PopupControllerModule Pipeline Integration"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 PopupControllerModule Pipeline Integration

<!-- convention-summary-start -->
### PopupControllerModule Pipeline Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PopupControllerModule Pipeline Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. System Integration

`GameModeDirectorModule` checks `isDisplayPopup()` to prevent spins during modal review:
```typescript
if (this.popupController && this.popupController.isDisplayPopup()) {
    log("Spin prevented: modal popup is currently open");
    return;
}
```
