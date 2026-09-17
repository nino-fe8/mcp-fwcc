---
id: "cc_slot_module:FreeGameWriterModule:gotcha:total_win_cutscene_skipped_prematurely"
title: "Gotcha: Total Win Celebration Skipped on Fast Click"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "gotchas", "total_win"]
---

# ⚠️ Gotcha: Total Win Celebration Skipped on Fast Click

<!-- convention-summary-start -->
### Gotcha: Total Win Celebration Skipped on Fast Click Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Total Win Celebration Skipped on Fast Click.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
When concluding the final Free Spin, clicking the screen dismisses the summary popup before the player can see their accumulated winnings.

---

## 2. Root Cause Analysis
Using `_showCutscene` allows user clicks to fast-forward the dialog.

---

## 3. Recommended Resolution
Use `_showUnskippedCutscene` in `getFreeGameEndScript()` so the summary dialog enforces its configured minimum showcase duration before closing:
```typescript
listScript.push({
    command: "_showUnskippedCutscene",
    data: { cutsceneType: CUTSCENE_TYPE_ENUM.TOTAL_WIN, cutsceneData: {} },
});
```
