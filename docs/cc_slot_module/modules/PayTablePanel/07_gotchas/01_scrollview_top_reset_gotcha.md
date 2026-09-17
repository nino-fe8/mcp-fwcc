---
id: "cc_slot_module:PayTablePanel:gotchas:01_scrollview_top_reset_gotcha"
title: "ScrollView Top Reset Gotcha"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "gotchas", "scrollview"]
---

# ⚠️ ScrollView Top Reset Gotcha

<!-- convention-summary-start -->
### ScrollView Top Reset Gotcha Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ScrollView Top Reset Gotcha.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Solution

Always execute `this.scrollView.scrollToTop(0)` inside `showPayTablePanel(true)` so users start reading from the top header on each open.
