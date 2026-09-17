---
id: "cc_slot_mechanics:CellTableData:integration:director"
title: "CellTableData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CellTableData` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### CellTableData Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CellTableData Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CellTableData` hooks directly into the writer command array:

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
| **`CELL_START_SPIN`** | `GameModeDirector` / `SlotTable` | `CellTableData` | `{ totalWay, matrix, colIndex }` |
| **`CELL_STOP_SPIN`** | `GameModeDirector` / `SlotTable` | `CellTableData` | `{ totalWay, matrix, colIndex }` |
| **`CELL_BOUNCE_SETTLE`** | `GameModeDirector` / `SlotTable` | `CellTableData` | `{ totalWay, matrix, colIndex }` |
