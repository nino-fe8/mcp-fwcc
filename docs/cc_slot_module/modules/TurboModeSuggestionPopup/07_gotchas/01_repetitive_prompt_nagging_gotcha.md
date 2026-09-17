---
id: "cc_slot_module:TurboModeSuggestionPopup:gotchas:01_repetitive_prompt_nagging_gotcha"
title: "Repetitive Prompt Nagging Gotcha"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "gotchas", "retention"]
---

# ⚠️ Repetitive Prompt Nagging Gotcha

<!-- convention-summary-start -->
### Repetitive Prompt Nagging Gotcha Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Repetitive Prompt Nagging Gotcha.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Solution

Always invoke `this.uiManagerData.setCanShowTurboIntro(false)` on both Confirm and Cancel button clicks.
