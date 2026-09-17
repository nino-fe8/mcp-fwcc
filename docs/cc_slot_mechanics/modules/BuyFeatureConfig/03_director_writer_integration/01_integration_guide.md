---
id: "cc_slot_mechanics:BuyFeatureConfig:integration:director"
title: "BuyFeatureConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["BuyFeatureConfig", "buy_feature_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `BuyFeatureConfig` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### BuyFeatureConfig Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BuyFeatureConfig Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `BuyFeatureConfig` hooks directly into the writer command array:

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
| **`BUY_FEATURE_CLICKED`** | `GameModeDirector` / `SlotTable` | `BuyFeatureConfig` | `{ totalWay, matrix, colIndex }` |
| **`CONFIRM_BUY_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureConfig` | `{ totalWay, matrix, colIndex }` |
| **`START_PURCHASED_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureConfig` | `{ totalWay, matrix, colIndex }` |
