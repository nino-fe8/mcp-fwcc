---
id: "cc_slot_mechanics:BuyFeatureButton:integration:director"
title: "BuyFeatureButton Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `BuyFeatureButton` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### BuyFeatureButton Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BuyFeatureButton Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `BuyFeatureButton` hooks directly into the writer command array:

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
| **`BUY_FEATURE_CLICKED`** | `GameModeDirector` / `SlotTable` | `BuyFeatureButton` | `{ totalWay, matrix, colIndex }` |
| **`CONFIRM_BUY_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureButton` | `{ totalWay, matrix, colIndex }` |
| **`START_PURCHASED_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureButton` | `{ totalWay, matrix, colIndex }` |
