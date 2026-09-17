---
id: "cc_slot_module:JackpotWinNoticePopup:inheritance:subclassing_guide"
title: "JackpotWinNoticePopup Subclassing Guide"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ JackpotWinNoticePopup Subclassing Guide

<!-- convention-summary-start -->
### JackpotWinNoticePopup Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Extend `JackpotWinNoticePopup`.
2. Override `showInfo()` to customize winner typography.
3. Clean up timers and tweens in `onDestroy()`.
