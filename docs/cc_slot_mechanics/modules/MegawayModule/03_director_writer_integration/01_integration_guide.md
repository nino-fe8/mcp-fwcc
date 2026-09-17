---
id: "cc_slot_mechanics:MegawayModule:integration:director"
title: "MegawayModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MegawayModule` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### MegawayModule Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegawayModule Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MegawayModule` hooks directly into the writer command array:

```typescript
makeScriptStartSpinning(): Object[] {
    const listScript = [];
    listScript.push({
        command: "_startSpinningTable",
    });
    return listScript;
}
```

---

## 2. Director Event Handlers

| Event Name | Source | Listener Module | Functional Payload |
| :--- | :--- | :--- | :--- |
| **`UPDATE_MEGAWAY`** | `GameModeDirector` / `SlotTable` | `MegawayModule` | `{ totalWay, matrix, colIndex }` |
| **`REEL_STOPPED`** | `GameModeDirector` / `SlotTable` | `MegawayModule` | `{ totalWay, matrix, colIndex }` |
| **`RESET_MEGAWAY`** | `GameModeDirector` / `SlotTable` | `MegawayModule` | `{ totalWay, matrix, colIndex }` |
