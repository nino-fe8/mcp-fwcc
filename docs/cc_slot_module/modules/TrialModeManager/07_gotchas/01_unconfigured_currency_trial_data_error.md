---
id: "cc_slot_module:TrialModeManager:gotchas:unconfigured_currency_trial_data_error"
title: "Gotcha: Missing Currency Configuration in Trial Data"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "gotchas", "currency"]
---

# ⚠️ Gotcha: Missing Currency Configuration in Trial Data

<!-- convention-summary-start -->
### Gotcha: Missing Currency Configuration in Trial Data Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing Currency Configuration in Trial Data.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If a player logs in with a currency (e.g. `VND`, `IDR`, `USD`) not present in `trialModeData`, `safeCheckTrialMode()` logs a red console error:
`[TrialModeManager] No data for currency: VND, please check the TrialModeData`.

---

## 2. Prevention

Always configure default trial bet arrays for all supported game currencies in `trialModeData`.
