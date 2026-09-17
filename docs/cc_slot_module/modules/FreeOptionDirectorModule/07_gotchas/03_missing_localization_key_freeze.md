---
id: "cc_slot_module:FreeOptionDirectorModule:gotcha:missing_localization_key_freeze"
title: "Gotcha: Missing Localization Key Renders Undefined String"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "gotchas", "localization"]
---

# ⚠️ Gotcha: Missing Localization Key Renders Undefined String

<!-- convention-summary-start -->
### Gotcha: Missing Localization Key Renders Undefined String Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing Localization Key Renders Undefined String.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
Countdown label shows `undefined 15s` instead of `Auto select in 15s`.

---

## 2. Root Cause Analysis
`FREE_OPTION_GAME_REMIND` missing from language JSON bundles.

---

## 3. Recommended Resolution
Declare fallback default strings in `localizeText()`:
```typescript
localizeText(): void {
    this.autoSelectText = this.gameLogic?.getGameText("FREE_OPTION_GAME_REMIND") || "Auto select in";
}
```
