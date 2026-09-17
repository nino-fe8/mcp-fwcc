---
id: "cc_slot_mechanics:InstantCashModule:integration:director"
title: "InstantCashModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `InstantCashModule` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### InstantCashModule Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InstantCashModule Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `InstantCashModule` hooks directly into the writer command array:

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
| **`INSTANT_CASH_COLLECTED`** | `GameModeDirector` / `SlotTable` | `InstantCashModule` | `{ totalWay, matrix, colIndex }` |
| **`RESET_RESPIN_COUNT`** | `GameModeDirector` / `SlotTable` | `InstantCashModule` | `{ totalWay, matrix, colIndex }` |
| **`SETTLE_JACKPOT_PRIZE`** | `GameModeDirector` / `SlotTable` | `InstantCashModule` | `{ totalWay, matrix, colIndex }` |
