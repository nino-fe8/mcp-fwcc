---
id: "cc_slot_mechanics:MultiplierReelModule:integration:director"
title: "MultiplierReelModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MultiplierReelModule` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### MultiplierReelModule Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultiplierReelModule Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MultiplierReelModule` hooks directly into the writer command array:

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
| **`MULTIPLIER_REEL_STOPPED`** | `GameModeDirector` / `SlotTable` | `MultiplierReelModule` | `{ totalWay, matrix, colIndex }` |
| **`APPLY_REEL_MULTIPLIER`** | `GameModeDirector` / `SlotTable` | `MultiplierReelModule` | `{ totalWay, matrix, colIndex }` |
