---
id: "cc_slot_module:FreeOptionDirectorModule:gotcha:double_click_race_condition_network_spam"
title: "Gotcha: Double-Click Race Condition Triggers Duplicate Network Requests"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "gotchas", "race_condition", "double_click"]
---

# ⚠️ Gotcha: Double-Click Race Condition Triggers Duplicate Network Requests

<!-- convention-summary-start -->
### Gotcha: Double-Click Race Condition Triggers Duplicate Network Requests Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Double-Click Race Condition Triggers Duplicate Network Requests.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
Player taps rapidly on two different options, sending multiple `SEND_FREE_OPTION_REQUEST` packets and causing backend invalid state errors.

---

## 2. Root Cause Analysis
Delayed deactivation of buttons allows multi-touch events to trigger `optionClick` multiple times in the same frame.

---

## 3. Recommended Resolution
Disable all buttons synchronously at the very beginning of `optionClick()`:
```typescript
this.options.forEach((option) => {
    option.optionNode.getComponent(Button).interactable = false;
});
```
