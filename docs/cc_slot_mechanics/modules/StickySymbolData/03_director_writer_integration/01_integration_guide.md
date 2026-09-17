---
id: "cc_slot_mechanics:StickySymbolData:integration:director"
title: "StickySymbolData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `StickySymbolData` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### StickySymbolData Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for StickySymbolData Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `StickySymbolData` hooks directly into the writer command array:

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
| **`STICKY_LOCK_APPLIED`** | `GameModeDirector` / `SlotTable` | `StickySymbolData` | `{ totalWay, matrix, colIndex }` |
| **`STICKY_UNLOCK_ALL`** | `GameModeDirector` / `SlotTable` | `StickySymbolData` | `{ totalWay, matrix, colIndex }` |
| **`RESPIN_RETAIN_SYMBOLS`** | `GameModeDirector` / `SlotTable` | `StickySymbolData` | `{ totalWay, matrix, colIndex }` |
