---
id: "cc_slot_module:NormalGameWriterModule:gotcha:omitting_resume_wallet_in_final_script"
title: "Gotcha: Omitting _resumeWallet in makeScriptShowResultFinal"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "gotchas", "wallet_freeze"]
---

# ⚠️ Gotcha: Omitting _resumeWallet in makeScriptShowResultFinal

<!-- convention-summary-start -->
### Gotcha: Omitting _resumeWallet in makeScriptShowResultFinal Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Omitting _resumeWallet in makeScriptShowResultFinal.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
After a winning Base Game spin concludes, the player balance displayed in the bottom HUD never increments, or gets permanently paused.

---

## 2. Root Cause Analysis
During `makeScriptNormalSpinTrigger`, `_pauseWallet` freezes wallet updates. The corresponding unfreeze step `_resumeWallet` is dispatched inside `makeScriptShowResultFinal`. If a custom writer overrides this method and omits `_resumeWallet`, the wallet remains paused forever.

---

## 3. Recommended Resolution
Always include `{ command: "_resumeWallet" }` in `makeScriptShowResultFinal`:
```typescript
makeScriptShowResultFinal(): Object[] {
    let listScript = [];
    listScript.push({ command: "_resumeWallet" });
    return listScript;
}
```
