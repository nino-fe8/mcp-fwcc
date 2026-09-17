---
id: "cc_slot_module:TrialModeManager:methods:safeCheckTrialMode"
title: "TrialModeManager.safeCheckTrialMode Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "safeCheckTrialMode"]
---

# 📖 `TrialModeManager.safeCheckTrialMode()`

<!-- convention-summary-start -->
### TrialModeManager.safeCheckTrialMode Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager.safeCheckTrialMode Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Validates that trial bet steps exist in `trialModeData` for the active user currency.

```typescript
public safeCheckTrialMode(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
safeCheckTrialMode(isActive: boolean): void {
    if (!isActive) {
        return;
    }
    const currency = this.gameLogic.getDataStore().getCurrency();
    if (!verifyTrialModeData(currency, this.trialModeData)) {
        cc.error(`[TrialModeManager] No data for currency: ${currency}, please check the TrialModeData`);
    }
}
```
